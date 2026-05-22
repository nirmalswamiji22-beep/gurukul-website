import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import https from 'https'
import crypto from 'crypto'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper function to sign JWT and acquire Google OAuth2 access token
async function getGoogleAuthToken(creds) {
  return new Promise((resolve, reject) => {
    try {
      const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
      
      const now = Math.floor(Date.now() / 1000);
      const claim = Buffer.from(JSON.stringify({
        iss: creds.client_email,
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        aud: 'https://oauth2.googleapis.com/token',
        exp: now + 3600,
        iat: now
      })).toString('base64url');
      
      const signatureInput = `${header}.${claim}`;
      const signer = crypto.createSign('RSA-SHA256');
      signer.update(signatureInput);
      const signature = signer.sign(creds.private_key, 'base64url');
      
      const jwt = `${signatureInput}.${signature}`;
      
      const postData = new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt
      }).toString();
      
      const req = https.request({
        hostname: 'oauth2.googleapis.com',
        path: '/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData)
        }
      }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data.access_token) {
              resolve(data.access_token);
            } else {
              reject(new Error('Failed to get access token: ' + body));
            }
          } catch (e) {
            reject(e);
          }
        });
      });
      
      req.on('error', reject);
      req.write(postData);
      req.end();
    } catch (err) {
      reject(err);
    }
  });
}

// Helper to append a row to Google Sheets via Sheets REST API v4
async function appendRowToGoogleSheet(accessToken, spreadsheetId, rowData) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      values: [rowData]
    });
    
    // We append to A:G which will automatically target the first visible sheet
    const req = https.request({
      hostname: 'sheets.googleapis.com',
      path: `/v4/spreadsheets/${spreadsheetId}/values/A:G:append?valueInputOption=USER_ENTERED`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (res.statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error(`Google Sheets API Error [${res.statusCode}]: ` + body));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// Vite custom server plugin to handle POST /api/admissions and local CSV + Google Sheets sync
const csvBackendPlugin = () => ({
  name: 'csv-backend',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/admissions' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            
            // Check required fields
            if (!data.studentName || !data.mobileNumber) {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: 'Student Name and Mobile Number are required.' }));
              return;
            }

            const csvPath = path.resolve(__dirname, 'admissions.csv');
            
            // Clean value helper to prevent breaking CSV structure
            const escapeCsvVal = (val) => {
              if (val === null || val === undefined) return '';
              const str = String(val).replace(/"/g, '""');
              return `"${str}"`;
            };

            const recordId = 'ADM' + Date.now();
            const submissionDate = new Date().toISOString();

            const row = [
              recordId,
              data.studentName,
              data.mobileNumber,
              data.branch || 'General',
              data.standard || 'General',
              data.package || 'General',
              submissionDate
            ].map(escapeCsvVal).join(',');

            // Append row to the local CSV
            fs.appendFileSync(csvPath, row + '\n', 'utf8');
            console.log(`[CSV Backend] Appended new admission record ${recordId} to admissions.csv successfully.`);

            // Google Sheets Direct Sync (Using Service Account Credentials JSON)
            const spreadsheetId = '1WnO9xRQzR8EMY5oCIyNfvShbttzd7zuvzKUBJwHVLjw';
            const keyPath = path.resolve(__dirname, 'gen-lang-client-0619709499-450ecb1f9551.json');

            let sheetsSynced = false;
            let syncError = null;

            if (fs.existsSync(keyPath)) {
              try {
                const creds = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
                console.log(`[Google Sheets] Authenticating service account: ${creds.client_email}...`);
                const accessToken = await getGoogleAuthToken(creds);
                
                console.log(`[Google Sheets] Access token acquired. Appending row to Sheet ID: ${spreadsheetId}...`);
                const rowData = [
                  recordId,
                  data.studentName,
                  data.mobileNumber,
                  data.branch || 'General',
                  data.standard || 'General',
                  data.package || 'General',
                  submissionDate
                ];

                await appendRowToGoogleSheet(accessToken, spreadsheetId, rowData);
                console.log(`[Google Sheets] Row successfully synced to Google Sheets!`);
                sheetsSynced = true;
              } catch (err) {
                console.error('[Google Sheets] Failed to sync to Google Sheets:', err);
                syncError = err.message;
              }
            } else {
              console.warn(`[Google Sheets] Credentials file not found at ${keyPath}. Skipping Google Sheets sync.`);
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
              success: true, 
              message: 'Admission details saved successfully.',
              id: recordId,
              googleSheetsSynced: sheetsSynced,
              googleSheetsError: syncError
            }));

          } catch (err) {
            console.error('[CSV Backend] Error processing POST /api/admissions:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Internal Server Error' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), csvBackendPlugin()],
})

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import VisionMission from './pages/VisionMission';
import GurukulValueSystem from './pages/GurukulValueSystem';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans antialiased text-[#212529]">
        <Header />
        <main className="flex-grow bg-[#fef3de]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/why-swaminarayan-gurukul" element={<GurukulValueSystem />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

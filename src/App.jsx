import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import VisionMission from './pages/VisionMission';
import GurukulValueSystem from './pages/GurukulValueSystem';
import Principal from './pages/Principal';
import LifeAtGurukul from './pages/LifeAtGurukul';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans antialiased text-[#212529]">
        <Header />
        <main className="flex-grow bg-[#fffbf0]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/why-swaminarayan-gurukul" element={<GurukulValueSystem />} />
            <Route path="/principal" element={<Principal />} />
            <Route path="/life-at-gurukul/academic-life" element={<LifeAtGurukul />} />
            <Route path="/life-at-gurukul/residential-life" element={<LifeAtGurukul />} />
            <Route path="/life-at-gurukul" element={<Navigate to="/life-at-gurukul/academic-life" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

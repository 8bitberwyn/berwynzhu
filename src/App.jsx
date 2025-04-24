// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ScrollingAnimationApp from './pages/ScrollingAnimationApp';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import WelcomePage from './pages/WelcomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollingAnimationApp />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { VoiceChat } from './components/VoiceChat';
import { AnimatedBackground } from './components/AnimatedBackground';

// Pages
import Home from './pages/Home';
import AITransformation from './pages/AITransformation';
import Marketing from './pages/Marketing';
import Work from './pages/Work';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Discovery from './pages/Discovery';
import Academy from './pages/Academy';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Service Pages
import AIEmployees from './pages/services/AIEmployees';
import AutomationWorkflows from './pages/services/AutomationWorkflows';
import PlatformDevelopment from './pages/services/PlatformDevelopment';
import FractionalCTO from './pages/services/FractionalCTO';
import MarketingAutomation from './pages/services/MarketingAutomation';
import Web3Development from './pages/services/Web3Development';

// AnimatedRoutes wrapper for framer-motion exit animations
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ai-transformation" element={<AITransformation />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/academy" element={<Academy />} />

        {/* Service Routes */}
        <Route path="/services/ai-employees" element={<AIEmployees />} />
        <Route path="/services/automation-workflows" element={<AutomationWorkflows />} />
        <Route path="/services/platform-development" element={<PlatformDevelopment />} />
        <Route path="/services/fractional-cto" element={<FractionalCTO />} />
        <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
        <Route path="/services/web3" element={<Web3Development />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      <AnimatedBackground />

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
        <VoiceChat />
      </div>
    </Router>
  );
}

export default App;

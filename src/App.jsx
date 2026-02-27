import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// AI Transformation Service Pages
import WorkflowAutomation from './pages/services/ai/WorkflowAutomation';
import CustomAIAgents from './pages/services/ai/CustomAIAgents';
import RAGKnowledge from './pages/services/ai/RAGKnowledge';
import BusinessIntelligence from './pages/services/ai/BusinessIntelligence';
import PlatformDev from './pages/services/ai/PlatformDev';
import APIIntegration from './pages/services/ai/APIIntegration';

// Marketing Service Pages
import SEOOrganicGrowth from './pages/services/marketing/SEOOrganicGrowth';
import SocialMediaDynamics from './pages/services/marketing/SocialMediaDynamics';
import IntelligentLifecycle from './pages/services/marketing/IntelligentLifecycle';
import BrandArchitecture from './pages/services/marketing/BrandArchitecture';
import HighVelocityWeb from './pages/services/marketing/HighVelocityWeb';
import ContentEngines from './pages/services/marketing/ContentEngines';

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

        {/* AI Transformation Hub */}
        <Route path="/services/ai/workflow-automation" element={<WorkflowAutomation />} />
        <Route path="/services/ai/custom-agents" element={<CustomAIAgents />} />
        <Route path="/services/ai/rag-knowledge" element={<RAGKnowledge />} />
        <Route path="/services/ai/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/services/ai/platform-dev" element={<PlatformDev />} />
        <Route path="/services/ai/api-integration" element={<APIIntegration />} />

        {/* Marketing Hub */}
        <Route path="/services/marketing/seo-organic" element={<SEOOrganicGrowth />} />
        <Route path="/services/marketing/social-dynamics" element={<SocialMediaDynamics />} />
        <Route path="/services/marketing/intelligent-lifecycle" element={<IntelligentLifecycle />} />
        <Route path="/services/marketing/brand-architecture" element={<BrandArchitecture />} />
        <Route path="/services/marketing/high-velocity-web" element={<HighVelocityWeb />} />
        <Route path="/services/marketing/content-engines" element={<ContentEngines />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<Admin />} />

        {/* 404 Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;

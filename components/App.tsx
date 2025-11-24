import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

import Header from './Header';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import Home from '../Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Contact from '../pages/Contact';
import OurWork from '../pages/OurWork';
import ProjectDetail from '../pages/ProjectDetail';
import DiscussProject from '../pages/DiscussProject';
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";


const SharedBackground: React.FC = () => {
    const { scrollYProgress } = useScroll();
    
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0.24, 0]);

    return (
        <motion.div
            className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
            style={{ y: backgroundY, opacity: backgroundOpacity }}
            aria-hidden="true"
        >
            <motion.span 
                className="text-[35vw] md:text-[30vw] font-black text-gray-500/50 select-none -translate-y-[5%] md:translate-y-0 tracking-wider" 
                style={{ fontFamily: "'Playfair Display', serif" }}
                animate={{
                    textShadow: [
                        "0 0 8px rgba(142, 45, 226, 0.2)",
                        "0 0 24px rgba(142, 45, 226, 0.4)",
                        "0 0 8px rgba(142, 45, 226, 0.2)",
                    ],
                    scale: [1, 1.01, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                PGS
            </motion.span>
        </motion.div>
    );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0A0A10] text-gray-100 selection:bg-purple-500 selection:text-white">
      <ParticleBackground />
      <SharedBackground />
      <Header />
      <main className="relative z-10">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/work/:category/:projectId" element={<ProjectDetail />} />
            <Route path="/discuss-project" element={<DiscussProject />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />

          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
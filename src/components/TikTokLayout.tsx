import React, { useRef, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import MatrixCodeFlow from './MatrixCodeFlow';
import TikTokSidebar from './TikTokSidebar';
import TikTokBottomNav from './TikTokBottomNav';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './sections/HomeContent';
import AboutContent from './sections/AboutContent';
import SkillsContent from './sections/SkillsContent';
import ExperienceContent from './sections/ExperienceContent';
import ContactContent from './sections/ContactContent';

const TikTokLayout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Desktop scroll detection
    const handleDesktopScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Mobile scroll detection
    const container = containerRef.current;
    const handleMobileScroll = () => {
      if (container) {
        setIsScrolled(container.scrollTop > 50);
      }
    };

    window.addEventListener('scroll', handleDesktopScroll);
    if (container) {
      container.addEventListener('scroll', handleMobileScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleDesktopScroll);
      if (container) {
        container.removeEventListener('scroll', handleMobileScroll);
      }
    };
  }, []);

  return (
    <div className="tiktok-layout">
      {/* Desktop: Traditional routing with Header and Footer */}
      <div className="hidden md:block min-h-screen flex flex-col bg-black">
        <Header isScrolled={isScrolled} currentSection="" />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      
      {/* Mobile: TikTok-style scroll layout */}
      <div className="md:hidden tiktok-container" ref={containerRef}>
        {/* Matrix Background - Fixed */}
        <div className="fixed inset-0 z-0">
          <MatrixCodeFlow />
        </div>
        
        {/* Semi-transparent overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 pointer-events-none"></div>
        
        {/* Mobile Header - Shows on scroll */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: isScrolled ? 0 : -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-500/20 shadow-lg"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-xl font-display font-bold text-green-400 font-mono">
              &gt; Hafiz Adem
            </div>
            <a 
              href="#contact" 
              className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-mono text-sm transition-colors"
            >
              Connect
            </a>
          </div>
        </motion.header>
        
        {/* Scrollable Content */}
        <div className="relative z-20">
          <section id="home" className="tiktok-section">
            <HomeContent />
          </section>
          
          <section id="about" className="tiktok-section">
            <AboutContent />
          </section>
          
          <section id="skills" className="tiktok-section">
            <SkillsContent />
          </section>
          
          <section id="experience" className="tiktok-section">
            <ExperienceContent />
          </section>
          
          <section id="contact" className="tiktok-section">
            <ContactContent />
          </section>
        </div>
        
        {/* Right Sidebar Actions */}
        <TikTokSidebar />
        
        {/* Bottom Navigation Bar */}
        <TikTokBottomNav containerRef={containerRef} />
      </div>
    </div>
  );
};

export default TikTokLayout;

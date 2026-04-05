import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { NAVIGATION_ITEMS } from '../utils/constants';

interface TikTokBottomNavProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const iconMap: { [key: string]: React.ElementType } = {
  home: FaHome,
  about: FaUser,
  skills: FaCode,
  experience: FaBriefcase,
  contact: FaEnvelope,
};

const TikTokBottomNav: React.FC<TikTokBottomNavProps> = ({ containerRef }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    let lastScrollY = container.scrollTop;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Get scroll position from container (mobile) or fallback to window (desktop emulation)
          const currentScrollY = container.scrollTop || window.scrollY;
          
          // Detect scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling DOWN - hide navbar
            setIsVisible(false);
            console.log('🔽 Scrolling DOWN - Hiding navbar');
          } else if (currentScrollY < lastScrollY) {
            // Scrolling UP - show navbar
            setIsVisible(true);
            console.log('🔼 Scrolling UP - Showing navbar');
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }

      // Active section detection
      const sections = document.querySelectorAll('.tiktok-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section is in viewport (with some tolerance)
        if (rect.top >= -100 && rect.top <= 100) {
          setActiveSection(section.id);
        }
      });
    };

    // Listen to both container scroll and window scroll for better compatibility
    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="backdrop-blur-m rounded-lg shadow-lg -mx-4 px-4 fixed bottom-0 left-0 right-0 z-50 tiktok-bottom-nav md:hidden"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex justify-around bg-transparent items-center py-2 px-2">
        {NAVIGATION_ITEMS.map((item) => {
          const sectionId = item.href.replace('/', '') || 'home';
          const IconComponent = iconMap[sectionId] || FaHome;
          const isActive = activeSection === sectionId;

          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(sectionId)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? 'text-green-400' : 'text-green-300/60'
              }`}
              aria-label={item.name}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-xl transition-all ${
                  isActive ? 'bg-green-900/30' : ''
                }`}
              >
                <IconComponent className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
              </motion.div>
              <span className="text-[10px] font-mono font-medium">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="w-1.5 h-1.5 bg-green-400 rounded-full mt-0.5 shadow-lg shadow-green-400/50"
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default TikTokBottomNav;

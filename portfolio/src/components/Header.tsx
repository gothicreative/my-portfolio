import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { NAVIGATION_ITEMS } from '../utils/constants';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isScrolled: boolean;
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-display font-bold text-gradient"
            >
              Hafiz Adem
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-colors duration-200 ${
                  isActiveRoute(item.href)
                    ? 'text-primary-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                {item.name}
                {isActiveRoute(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/contact" className="btn-primary">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors ${
                isMenuOpen 
                  ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg -mx-4 px-4"
            >
              <motion.div 
                className="flex flex-col space-y-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {NAVIGATION_ITEMS.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: -10, opacity: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={`font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 block ${
                        isActiveRoute(item.href)
                          ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -10, opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="btn-primary self-start mt-2"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
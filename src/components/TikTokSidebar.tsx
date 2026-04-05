import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaPlus } from 'react-icons/fa';
import { CONTACT_INFO } from '../utils/constants';

interface ActionButtonProps {
  icon: React.ElementType;
  href?: string;
  onClick?: () => void;
  label: string;
  delay?: number;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, href, onClick, label, delay = 0 }) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay: delay * 0.05
      }}
      whileHover={{ scale: 1.15, x: -4 }}
      whileTap={{ scale: 0.9 }}
    >
      <Component
        href={href}
        onClick={onClick}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="w-12 h-12 bg-black/80 backdrop-blur-md border border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-900/50 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
        aria-label={label}
      >
        <Icon className="w-6 h-6" />
      </Component>
    </motion.div>
  );
};

const TikTokSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/HafizAdemCV.pdf';
    link.download = 'HafizAdemCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const actions = [
    { icon: FaGithub, href: CONTACT_INFO.social.github, label: "GitHub" },
    { icon: FaLinkedin, href: CONTACT_INFO.social.linkedin, label: "LinkedIn" },
    { icon: FaDownload, onClick: handleDownloadCV, label: "Download CV" },
    { icon: FaEnvelope, href: "#contact", label: "Contact" },
  ];

  return (
    <motion.div 
      className="fixed bottom-24 right-2 -translate-y-1/2 z-40 flex flex-col gap-3"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* Expandable action buttons */}
      <AnimatePresence>
        {isExpanded && (
          <div className="flex flex-col gap-3 mb-2">
            {actions.map((action, index) => (
              <ActionButton
                key={action.label}
                icon={action.icon}
                href={action.href}
                onClick={action.onClick}
                label={action.label}
                delay={index}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
          isExpanded 
            ? 'bg-green-600 hover:bg-green-700 border border-green-400/50' 
            : 'bg-green-600 hover:bg-green-700 border border-green-400/50'
        }`}
        aria-label={isExpanded ? "Close menu" : "Open menu"}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 135 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default TikTokSidebar;

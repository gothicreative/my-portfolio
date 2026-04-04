import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';
import { CONTACT_INFO } from '../utils/constants';

interface ActionButtonProps {
  icon: React.ElementType;
  href?: string;
  onClick?: () => void;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, href, onClick, label }) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      whileHover={{ scale: 1.15, x: -4 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/HafizAdemCV.pdf';
    link.download = 'HafizAdemCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      className="fixed right-2 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <ActionButton 
        icon={FaGithub} 
        href={CONTACT_INFO.social.github} 
        label="GitHub" 
      />
      <ActionButton 
        icon={FaLinkedin} 
        href={CONTACT_INFO.social.linkedin} 
        label="LinkedIn" 
      />
      <ActionButton 
        icon={FaDownload} 
        onClick={handleDownloadCV} 
        label="Download CV" 
      />
      <ActionButton 
        icon={FaEnvelope} 
        href="#contact" 
        label="Contact" 
      />
    </motion.div>
  );
};

export default TikTokSidebar;

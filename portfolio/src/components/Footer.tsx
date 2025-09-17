import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDribbble, 
  FaBehance,
  FaHeart 
} from 'react-icons/fa';
import { CONTACT_INFO, NAVIGATION_ITEMS } from '../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: CONTACT_INFO.social.github, label: 'GitHub' },
    { icon: FaLinkedin, url: CONTACT_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, url: CONTACT_INFO.social.twitter, label: 'Twitter' },
    { icon: FaDribbble, url: CONTACT_INFO.social.dribbble, label: 'Dribbble' },
    { icon: FaBehance, url: CONTACT_INFO.social.behance, label: 'Behance' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-display font-bold text-gradient">
                Hafiz creative
              </div>
            </Link>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              Full-Stack Mobile Developer & Digital Artist passionate about creating 
              innovative web and mobile solutions with creative flair.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <p>{CONTACT_INFO.email}</p>
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {currentYear} Hafiz Adem. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center">
                Made with <FaHeart className="text-red-500 mx-1" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
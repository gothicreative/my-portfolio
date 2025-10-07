import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
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
    <footer className="bg-black border-t border-green-500/20 text-white">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-display font-bold text-green-400 font-mono">
              &gt; Hafiz Adem
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-green-300 hover:text-green-400 transition-colors duration-200 font-mono text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-500/10 mt-8 pt-6 text-center">
          <p className="text-green-400 text-sm font-mono">
            © {currentYear} Hafiz Adem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

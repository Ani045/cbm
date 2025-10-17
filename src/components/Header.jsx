import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://i.ibb.co/Kj9wWbx7/CBM-4.png" 
                alt="CBM Medical Management" 
                className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:214-295-5890" 
              className="flex items-center text-[#3E1E76] hover:text-[#9A070C] transition-colors font-medium"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4 mr-2" />
              (214) 295-5890
            </a>
            <button 
              onClick={() => scrollToSection('hero')} 
              className="bg-[#3E1E76] text-white px-6 py-2 rounded-lg hover:bg-[#9A070C] transition-colors font-medium"
            >
              Free Consultation
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6 text-[#3E1E76]" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="block w-full text-left text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left text-gray-700 hover:text-[#3E1E76] transition-colors font-medium"
            >
              FAQ
            </button>
            <a 
              href="tel:214-295-5890" 
              className="flex items-center text-[#3E1E76] hover:text-[#9A070C] transition-colors font-medium"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4 mr-2" />
              (214) 295-5890
            </a>
            <button 
              onClick={() => scrollToSection('hero')} 
              className="w-full bg-[#3E1E76] text-white px-6 py-2 rounded-lg hover:bg-[#9A070C] transition-colors font-medium"
            >
              Free Consultation
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
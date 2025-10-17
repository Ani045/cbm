import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiFax, FiMail, FiMapPin, FiLinkedin, FiFacebook, FiTwitter } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2A1450] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Link to="/">
                <img 
                  src="https://i.ibb.co/Kj9wWbx7/CBM-4.png" 
                  alt="CBM Medical Management" 
                  className="h-10 w-auto bg-white mb-4 hover:opacity-80 transition-opacity cursor-pointer" 
                />
              </Link>
              <p className="text-purple-200 italic">Helping Those Who Help the Hurting</p>
            </div>
            <p className="text-purple-100 mb-6 leading-relaxed">
              40+ years of excellence in mental health revenue cycle management. We understand your practice because we operate our own.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', section: 'about' },
                { label: 'Services', section: 'services' },
                { label: 'Process', section: 'process' },
                { label: 'Testimonials', section: 'testimonials' },
                { label: 'FAQ', section: 'faq' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-purple-200 hover:text-white transition-colors text-left w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Revenue Cycle Management',
                'Credentialing Services',
                'Virtual Assistants',
                'Digital Marketing',
                'Practice Startup',
                'TMS & Spravato Billing'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-purple-200">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                <div className="text-purple-200">
                  <div>2435 North Central Expressway</div>
                  <div>Suite 1200</div>
                  <div>Richardson, TX 75080</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-purple-300" />
                <a 
                  href="tel:214-295-5890" 
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  (214) 295-5890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiFax} className="w-5 h-5 text-purple-300" />
                <a 
                  href="tel:972-268-7969" 
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  (972) 268-7969
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-purple-300" />
                <a 
                  href="mailto:info@cbmmedicalmanagement.com" 
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  info@cbmmedicalmanagement.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-purple-300 text-sm mb-4 md:mb-0">
              © {currentYear} CBM Medical Management. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-purple-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-purple-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-purple-300 hover:text-white transition-colors"
              >
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
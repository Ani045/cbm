import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowLeft, FiPhone, FiMail, FiClock, FiHeart } = FiIcons;

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3E1E76] via-[#4A2185] to-[#2A1450]">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Success Icon */}
            <div className="bg-gradient-to-r from-[#3E1E76] to-[#9A070C] p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <SafeIcon icon={FiCheck} className="w-12 h-12 text-green-500" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-purple-100">
                Your consultation request has been received
              </p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3E1E76] mb-4">
                  What Happens Next?
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Our team of mental health billing experts will review your information and contact you within 24 hours to schedule your free revenue assessment.
                </p>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiMail} className="w-8 h-8 text-[#3E1E76]" />
                  </div>
                  <h3 className="font-bold text-[#3E1E76] mb-2">Email Confirmation</h3>
                  <p className="text-sm text-gray-600">Check your inbox for confirmation details</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiPhone} className="w-8 h-8 text-[#3E1E76]" />
                  </div>
                  <h3 className="font-bold text-[#3E1E76] mb-2">Expert Consultation</h3>
                  <p className="text-sm text-gray-600">We'll call to discuss your specific needs</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiHeart} className="w-8 h-8 text-[#3E1E76]" />
                  </div>
                  <h3 className="font-bold text-[#3E1E76] mb-2">Revenue Growth</h3>
                  <p className="text-sm text-gray-600">Start maximizing your practice's potential</p>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-[#3E1E76] mb-4 text-center">
                  Need to Speak With Someone Sooner?
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                  <a 
                    href="tel:214-295-5890" 
                    className="flex items-center text-[#3E1E76] hover:text-[#9A070C] transition-colors font-medium"
                  >
                    <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                    (214) 295-5890
                  </a>
                  <a 
                    href="mailto:info@cbmmedicalmanagement.com" 
                    className="flex items-center text-[#3E1E76] hover:text-[#9A070C] transition-colors font-medium"
                  >
                    <SafeIcon icon={FiMail} className="w-5 h-5 mr-2" />
                    info@cbmmedicalmanagement.com
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/"
                  className="bg-[#3E1E76] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#9A070C] transition-colors duration-300 flex items-center group"
                >
                  <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Homepage
                </Link>
                <a
                  href="tel:214-295-5890"
                  className="border-2 border-[#3E1E76] text-[#3E1E76] px-8 py-3 rounded-xl font-semibold hover:bg-[#3E1E76] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <div className="flex items-center justify-center text-white/80">
              <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
              <span className="text-sm">
                We typically respond within 24 hours during business hours (Mon-Fri, 9am-5pm CST)
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
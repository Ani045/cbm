import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiUsers, FiBrain, FiBarChart3, FiAward, FiTrendingUp, FiArrowRight } = FiIcons;

const WhyChooseSection = () => {
  const differentiators = [
    {
      icon: FiUsers,
      title: 'Real Clinic Owners',
      description: 'We operate our own mental health clinics, so we understand your challenges firsthand—not from a textbook.'
    },
    {
      icon: FiBrain,
      title: 'Mental Health Specialists',
      description: 'Exclusively focused on psychiatry, TMS, Spravato, and ketamine therapy. We speak your language.'
    },
    {
      icon: FiBarChart3,
      title: 'Data-Driven Insights',
      description: 'Advanced analytics and reporting give you complete visibility into your practice\'s financial health.'
    },
    {
      icon: FiAward,
      title: 'Credentialing Experts',
      description: 'Navigate complex payer relationships with our credentialing specialists who know every insurance panel inside-out.'
    },
    {
      icon: FiTrendingUp,
      title: 'Proven Track Record',
      description: '40+ years, 98% retention rate, and millions recovered for practices just like yours.'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E1E76] mb-6">
            Why Mental Health Practices Choose CBM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that comes from working with billing experts who truly understand your practice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 group cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={scrollToForm}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3E1E76] to-[#9A070C] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3E1E76] mb-2 group-hover:text-[#9A070C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={scrollToForm}
                className="bg-[#3E1E76] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#9A070C] transition-colors duration-300 flex items-center group shadow-lg"
              >
                Start Maximizing Your Revenue
                <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-500 mt-3 text-sm">
                Join practices that trust CBM with their billing
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3E1E76] to-[#9A070C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3E1E76] mb-4">
                  The CBM Advantage
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3E1E76] mb-2">40+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#9A070C] mb-2">98%</div>
                  <div className="text-sm text-gray-600">Retention Rate</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-red-50 rounded-xl">
                <p className="text-center text-gray-700 italic">
                  "The only billing company owned by mental health professionals, 
                  for mental health professionals."
                </p>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
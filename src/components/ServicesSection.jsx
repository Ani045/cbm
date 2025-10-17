import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiRefreshCw, FiCheckCircle, FiUsers, FiSmartphone, FiBrain, FiRocket, FiArrowRight } = FiIcons;

const ServicesSection = () => {
  const services = [
    {
      icon: FiRefreshCw,
      title: 'Revenue Cycle Management',
      description: 'Full A/R management, claims submission & follow-up, denial management, and payment posting for maximum revenue recovery.',
      color: 'from-[#3E1E76] to-[#9A070C]'
    },
    {
      icon: FiCheckCircle,
      title: 'Credentialing & Payer Setup',
      description: 'Provider enrollment, payer contract negotiation, re-credentialing support, and CAQH management services.',
      color: 'from-[#3E1E76] to-[#9A070C]'
    },
    {
      icon: FiUsers,
      title: 'Virtual Medical Assistants',
      description: 'Front desk support, patient scheduling, insurance verification, and comprehensive phone support services.',
      color: 'from-[#3E1E76] to-[#9A070C]'
    },
    {
      icon: FiSmartphone,
      title: 'Digital Marketing',
      description: 'Patient acquisition strategies, SEO & local search optimization, social media management, and reputation management.',
      color: 'from-[#3E1E76] to-[#9A070C]'
    },
    {
      icon: FiBrain,
      title: 'TMS & Spravato Optimization',
      description: 'Specialized billing protocols, prior authorization experts, maximum reimbursement strategies, and compliance guidance.',
      color: 'from-[#3E1E76] to-[#9A070C]'
    },
    {
      icon: FiRocket,
      title: 'Practice Start-Up Services',
      description: 'Business formation, location selection, equipment procurement, and comprehensive staff training programs.',
      color: 'from-[#3E1E76] to-[#9A070C]'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E1E76] mb-6">
            Complete Revenue Cycle Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From practice startup to sustained growth—we've got you covered with comprehensive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#9A070C] hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={scrollToForm}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3E1E76] mb-4 group-hover:text-[#9A070C] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={scrollToForm}
            className="bg-[#3E1E76] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#9A070C] transition-colors duration-300 flex items-center mx-auto group shadow-lg"
          >
            Schedule Free Discovery Call
            <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            No obligation • 15-minute consultation • Discover your revenue potential
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from 'react';
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E1E76] mb-4 sm:mb-6">
            Complete Revenue Cycle Management
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From practice startup to sustained growth—we've got you covered with comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-[#9A070C] hover:-translate-y-2 cursor-pointer"
              onClick={scrollToForm}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <SafeIcon icon={service.icon} className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3E1E76] mb-3 sm:mb-4 group-hover:text-[#9A070C] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-[#3E1E76] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#9A070C] transition-colors duration-300 flex items-center justify-center sm:mx-auto group shadow-lg"
          >
            Schedule Free Discovery Call
            <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm text-center">
            No obligation • 15-minute consultation • Discover your revenue potential
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
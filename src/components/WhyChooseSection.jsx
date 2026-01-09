import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiUsers, FiBrain, FiBarChart3, FiAward, FiTrendingUp, FiArrowRight } = FiIcons;

const WhyChooseSection = ({ onOpenPopup }) => {
  const differentiators = [
    {
      icon: FiUsers,
      title: 'Real Clinic Owners',
      description: 'We operate our own mental health clinics, so we understand your challenges firsthand—not from a textbook.'
    },
    {
      icon: FiBrain,
      title: 'Mental Health Specialists',
      description: 'Exclusively focused on psychiatry and TMS therapy. We speak your language.'
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



  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E1E76] mb-4 sm:mb-6">
            Why Mental Health Practices Choose CBM
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that comes from working with billing experts who truly understand your practice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
                onClick={onOpenPopup}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3E1E76] to-[#9A070C] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <SafeIcon icon={item.icon} className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#3E1E76] mb-1 sm:mb-2 group-hover:text-[#9A070C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-6 sm:mt-8">
              <button
                onClick={onOpenPopup}
                className="w-full sm:w-auto bg-[#3E1E76] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#9A070C] transition-colors duration-300 flex items-center justify-center sm:justify-start group shadow-lg"
              >
                Start Maximizing Your Revenue
                <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-500 mt-3 text-xs sm:text-sm text-center sm:text-left">
                Join practices that trust CBM with their billing
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3E1E76] to-[#9A070C] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <SafeIcon icon={FiCheck} className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3E1E76] mb-3 sm:mb-4">
                  The CBM Advantage
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#3E1E76] mb-1 sm:mb-2">40+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#9A070C] mb-1 sm:mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Retention Rate</div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-red-50 rounded-xl">
                <p className="text-center text-sm sm:text-base text-gray-700 italic">
                  "The only billing company owned by mental health professionals,
                  for mental health professionals."
                </p>
              </div>
            </div>

            {/* Background Decorations */}

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
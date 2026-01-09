import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight } = FiIcons;

const AboutSection = ({ onOpenPopup }) => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E1E76] mb-4 sm:mb-6">
            Welcome to CBM Medical Management
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-[#3E1E76] pl-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                For over 40 years, CBM Medical Management has provided the best mental health billing services
                for psychiatry professionals across the nation. Our specialized psychiatry billing expertise
                comes from owning and operating our own mental health clinics.
              </p>
            </div>

            <div className="border-l-4 border-[#9A070C] pl-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We understand the unique challenges of billing for mental health services because we live them
                daily. From TMS to traditional psychiatry, our mental health billing services
                deliver faster claims turnaround, lower denial rates, and higher revenue recovery.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenPopup}
                className="bg-[#3E1E76] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#9A070C] transition-all duration-300 flex items-center group border-2 border-orange-500 shadow-lg"
              >
                Learn How We Can Help
                <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3E1E76] to-[#9A070C] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white text-xl sm:text-2xl font-bold">CBM</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#3E1E76] mb-3 sm:mb-4">
                  What makes us different?
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We own and operate our own mental health clinics, giving us real-world insights
                  no other billing company can match.
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
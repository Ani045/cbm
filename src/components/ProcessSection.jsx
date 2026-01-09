import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiSearch, FiClipboard, FiRocket, FiCheck } = FiIcons;

const ProcessSection = ({ onOpenPopup }) => {
  const steps = [
    {
      number: '1',
      icon: FiPhone,
      title: 'Schedule Free Consultation',
      description: 'Fill out our comprehensive online application form with all required details to begin your journey with us.',
      image: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2069&auto=format&fit=crop',
    },
    {
      number: '2',
      icon: FiSearch,
      title: 'Comprehensive Audit',
      description: 'Upload all necessary documents including academic records and certificates for a thorough review.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
    {
      number: '3',
      icon: FiClipboard,
      title: 'Custom Action Plan',
      description: 'Our team will create a tailored recovery strategy with a clear timeline and transparent pricing proposal for your practice.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      number: '4',
      icon: FiRocket,
      title: 'Launch & Grow',
      description: 'Experience seamless onboarding, followed by ongoing optimization and detailed monthly performance reports to ensure growth.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <section id="process" className="pt-10pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E1E76] mb-6">
            Your Path to Profitable Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process to maximize your revenue and streamline operations
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
              <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={onOpenPopup}
                />
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#3E1E76] to-[#9A070C] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {step.number}
                </div>
              </div>

              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center mb-4 cursor-pointer group" onClick={onOpenPopup}>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-red-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <SafeIcon icon={step.icon} className="w-6 h-6 text-[#3E1E76]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3E1E76] group-hover:text-[#9A070C] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <button
                  onClick={onOpenPopup}
                  className="bg-[#3E1E76] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A070C] transition-all duration-300 flex items-center group border-2 border-orange-500"
                >
                  Start This Step
                  <SafeIcon icon={FiCheck} className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
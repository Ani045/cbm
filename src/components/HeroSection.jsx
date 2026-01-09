import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowRight } = FiIcons;

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceType: '',
    monthlyRevenue: '',
    challenge: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Redirect to thank you page
    window.location.hash = '/thank-you';
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-14">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5f41a6] via-[#4A2185] to-[#3E1E76]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-red-600/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Outsource Your Mental Health Billing — Grow Your Practice
              </h1>

              <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl">
                Get a Free Billing Evaluation & Personalized Plan for Psychiatry & Mental Health Practices.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { label: '98% Client Retention', icon: '⭐' },
                  { label: 'Faster Claims Turnaround', icon: '⚡' },
                  { label: 'Lower Denial Rates', icon: '✓' },
                  { label: 'Higher Revenue Recovery', icon: '📈' }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-2xl mb-1">{badge.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-center leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg text-purple-200 italic">
                Specializing in best mental health billing services for psychiatry and TMS practices
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div
              className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3E1E76] mb-2">
                  Get Your FREE Revenue Assessment
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Discover hidden revenue opportunities in your practice
                </p>
              </div>

              <form accept-charset='UTF-8' action='https://app.formester.com/forms/MEHdblgRf/submissions' method='POST' className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E1E76] focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E1E76] focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E1E76] focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <select
                    name="practiceType"
                    value={formData.practiceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E1E76] focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Select Practice Type</option>
                    <option value="psychiatry">Psychiatry</option>
                    <option value="tms">TMS</option>
                    <option value="general">General Mental Health</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="challenge"
                    placeholder="Biggest Billing Challenge (Optional)"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E1E76] focus:border-transparent outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3E1E76] text-white py-4 px-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#9A070C] transition-colors duration-300 flex items-center justify-center group"
                >
                  Schedule My Free Consultation
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs sm:text-sm text-gray-500">
                  ⚡ No obligation • 15-min discovery call • Instant calendar booking
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiTrendingUp, FiBuilding, FiHeart, FiArrowRight } = FiIcons;

const StatsSection = ({ onOpenPopup }) => {
  const [isVisible, setIsVisible] = useState(true);

  const stats = [
    { number: 40, suffix: '+', label: 'Years of Experience', icon: FiCalendar },
    { number: 98, suffix: '%', label: 'Client Retention Rate', icon: FiHeart }
  ];

  const AnimatedNumber = ({ number, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setInterval(() => {
          setCount(prev => {
            if (prev < number) {
              return Math.min(prev + Math.ceil(number / 50), number);
            }
            return number;
          });
        }, 50);
        return () => clearInterval(timer);
      }
    }, [isVisible, number]);

    return (
      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
        {prefix}{count}{suffix}
      </span>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#3E1E76] to-[#2A1450] relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-center items-center hover:bg-white/20 transition-colors duration-300">
                <div className="mb-3 sm:mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto mb-3 sm:mb-4" />
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-white text-sm sm:text-base font-medium opacity-90">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={onOpenPopup}
            className="bg-white text-[#3E1E76] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl mx-auto border-2 border-orange-500"
          >
            Join Our Successful Practices
            <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-white/80 mt-4 text-sm">Get your free revenue assessment today</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
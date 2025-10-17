import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiTrendingUp, FiBuilding, FiHeart } = FiIcons;

const StatsSection = () => {
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
      </div>
    </section>
  );
};

export default StatsSection;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiTrendingUp, FiBuilding, FiHeart } = FiIcons;

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      <span className="text-5xl md:text-6xl font-bold text-white">
        {prefix}{count}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#3E1E76] to-[#2A1450] relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onViewportEnter={() => setIsVisible(true)}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full flex flex-col justify-center items-center hover:bg-white/20 transition-colors duration-300">
                <div className="mb-4">
                  <SafeIcon icon={stat.icon} className="w-10 h-10 text-white mx-auto mb-4" />
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-white text-base font-medium opacity-90">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
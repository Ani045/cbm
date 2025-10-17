import React from 'react';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiArrowRight, FiCheck, FiClock, FiShield} = FiIcons;

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#3E1E76] via-[#4A2185] to-[#9A070C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Grow a Profitable{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Mental Health Practice?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let our experts recover your hidden revenue and give you the peace of mind you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              className="bg-white text-[#3E1E76] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group shadow-xl"
              onClick={() => document.getElementById('hero').scrollIntoView({behavior: 'smooth'})}
            >
              Schedule Free Discovery Call
              <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            {[
              {icon: FiClock, text: 'Free revenue assessment'},
              {icon: FiShield, text: '40+ years of experience'}
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center text-white space-x-3"
              >
                <SafeIcon icon={item.icon} className="w-5 h-5 text-green-400" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiChevronLeft, FiChevronRight, FiQuote } = FiIcons;

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "CBM transformed our practice. Within 3 months, they recovered over $45,000 in denied claims we thought were lost forever. Their expertise in mental health billing is unmatched.",
      author: "Terry Abraham, LPC",
      rating: 5,
      highlight: "$45,000 recovered in 3 months"
    },
    {
      quote: "The team at CBM doesn't just process claims—they optimize every aspect of our revenue cycle. Best decision we ever made for our psychiatry practice.",
      author: "Kyle Babick, Ph.D.",
      rating: 5,
      highlight: "Complete revenue optimization"
    },
    {
      quote: "Finally, a billing company that understands mental health! Their TMS billing expertise alone has paid for their services 10x over. Highly recommended.",
      author: "Dr. Sarah Mitchell, MD",
      rating: 5,
      highlight: "10x ROI on services"
    },
    {
      quote: "CBM's credentialing team got us enrolled with major payers in record time. Their knowledge of insurance panels is incredible. We're seeing 40% more revenue.",
      author: "Michael Rodriguez, LCSW",
      rating: 5,
      highlight: "40% revenue increase"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-[#3E1E76] to-[#2A1450] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20">
          <SafeIcon icon={FiQuote} className="w-32 h-32 text-white transform rotate-12" />
        </div>
        <div className="absolute bottom-20 right-20">
          <SafeIcon icon={FiQuote} className="w-24 h-24 text-white transform -rotate-12" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Mental Health Professionals Nationwide
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            See what our clients say about their experience with CBM Medical Management
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            key={currentIndex}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Highlight */}
                <div className="inline-block bg-gradient-to-r from-[#3E1E76] to-[#9A070C] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  {testimonials[currentIndex].highlight}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3E1E76] to-[#9A070C] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#3E1E76] text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300 group"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-[#3E1E76] group-hover:text-[#9A070C]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300 group"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-[#3E1E76] group-hover:text-[#9A070C]" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-white bg-opacity-20 rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
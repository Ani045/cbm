import React from 'react';

const AboutSection = () => {
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
                For over 40 years, CBM Medical Management has been the trusted partner for mental health 
                professionals across the nation. We're not just another billing company—we're practice owners ourselves.
              </p>
            </div>

            <div className="border-l-4 border-[#9A070C] pl-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We understand the unique challenges of mental health billing because we live them daily in our own clinics. 
                From TMS and Spravato to traditional psychiatry, we've mastered the art and science of revenue recovery.
              </p>
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
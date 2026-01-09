import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import PopupForm from '../components/PopupForm';

const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenPopup={handleOpenPopup} />
      <HeroSection />
      <AboutSection onOpenPopup={handleOpenPopup} />
      <StatsSection onOpenPopup={handleOpenPopup} />
      <ServicesSection onOpenPopup={handleOpenPopup} />
      <ProcessSection onOpenPopup={handleOpenPopup} />
      <WhyChooseSection onOpenPopup={handleOpenPopup} />
      <TestimonialsSection />
      <FAQSection />
      <CTASection onOpenPopup={handleOpenPopup} />
      <Footer onOpenPopup={handleOpenPopup} />

      {/* Popup Form - Auto appears after 6 seconds */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default LandingPage;
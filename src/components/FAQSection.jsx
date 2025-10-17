import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus, FiArrowRight } = FiIcons;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes CBM different from other medical billing companies?",
      answer: "We own and operate our own mental health clinics, giving us unique insider knowledge of the challenges you face daily. Unlike other billing companies that work from theory, we understand the real-world complexities of mental health billing because we live them ourselves."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most practices see increased collections within the first 30-60 days. Our comprehensive audit often identifies immediate revenue opportunities, and our aggressive follow-up on denied claims typically recovers funds within the first quarter."
    },
    {
      question: "What types of practices do you work with?",
      answer: "We specialize exclusively in mental health practices including psychiatry, TMS therapy, Spravato treatments, ketamine therapy, and general mental health services. Our deep expertise in these areas allows us to maximize reimbursements that generalist billing companies often miss."
    },
    {
      question: "How does your pricing work?",
      answer: "We offer transparent percentage-based pricing with setup fees and contracts available. You only pay when we collect, aligning our success directly with yours. Contact us for a custom quote based on your practice size and needs."
    },
    {
      question: "Do you handle credentialing and payer enrollment?",
      answer: "Yes! Our credentialing specialists manage the entire process from initial applications to re-credentialing. We have established relationships with major payers and know exactly how to navigate their requirements efficiently."
    },
    {
      question: "How do you handle denied claims?",
      answer: "Our denial management team pursues every claim with aggressive follow-up. We have a 95% success rate in overturning denials through proper appeals processes, documentation corrections, and payer advocacy."
    },
    {
      question: "Can you help with practice startup?",
      answer: "Absolutely! We offer complete practice start-up services from location selection and business formation to equipment procurement and staff training. Our startup packages have helped hundreds of practitioners launch successful practices."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E1E76] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about working with CBM Medical Management
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg transition-all duration-300 ${
                openIndex === index ? 'shadow-xl' : 'hover:shadow-xl'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-[#3E1E76] pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3E1E76] to-[#9A070C] rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  <SafeIcon icon={openIndex === index ? FiMinus : FiPlus} className="w-4 h-4 text-white" />
                </div>
              </button>

              {openIndex === index && (
                <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-[#3E1E76] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#9A070C] transition-colors duration-300 flex items-center mx-auto group shadow-lg"
          >
            Let's Talk
            <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 mt-3 text-sm">
            Get answers from our mental health billing experts
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
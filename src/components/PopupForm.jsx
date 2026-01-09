import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiArrowRight } = FiIcons;

const PopupForm = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        practiceType: '',
        challenge: ''
    });

    useEffect(() => {
        // Show popup after 6 seconds (auto-show)
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    // Update visibility when isOpen prop changes
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        }
    }, [isOpen]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) {
            onClose();
        }
    };



    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close popup"
                >
                    <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>

                {/* Form Content */}
                <div className="p-6 sm:p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-[#3E1E76] mb-2">
                            Get Your FREE Billing Evaluation
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Personalized Plan for Psychiatry & Mental Health Practices
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
                            className="w-full bg-[#3E1E76] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#9A070C] transition-colors duration-300 flex items-center justify-center group"
                        >
                            Get Free Assessment
                            <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            ⚡ No obligation • Quick evaluation • Personalized insights
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopupForm;

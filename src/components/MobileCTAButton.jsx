import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight } = FiIcons;

const MobileCTAButton = ({ onOpenPopup }) => {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 lg:hidden">
            <button
                onClick={onOpenPopup}
                className="bg-[#3E1E76] text-white py-3 px-6 rounded-full font-semibold text-sm hover:bg-[#9A070C] transition-all duration-300 shadow-2xl flex items-center gap-2 animate-pulse hover:animate-none"
                style={{
                    writingMode: 'horizontal-tb'
                }}
            >
                Get Free Assessment
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </button>
        </div>
    );
};

export default MobileCTAButton;

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationControls = ({ onNext, onPrev }) => {
  return (
    <div className="fixed bottom-8 left-144 flex gap-4 z-[100]">
      <button 
        onClick={onPrev}
        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#FFE600] hover:text-black transition-all group shadow-xl backdrop-blur-lg"
      >
        <ChevronLeft size={24} strokeWidth={0.5} />
      </button>
      <button 
        onClick={onNext}
        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#FFE600] hover:text-black transition-all group shadow-xl backdrop-blur-lg"
      >
        <ChevronRight size={24} strokeWidth={0.5} />
      </button>
    </div>
  );
};

export default NavigationControls;
// components/SlideLayout.js
import React from 'react';
import { motion } from 'framer-motion';

const SlideLayout = ({ children, title, tagline, slideNum, footerText }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-[1280px] h-[720px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-16 flex flex-col relative shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(255,230,0,0.04)_0%,_transparent_70%)] rounded-full" />

      {/* Header */}
      <div className="flex justify-between items-center mb-8 z-10">
        <div className="bg-white/5 border border-white/10 px-5 py-2 rounded-lg backdrop-blur-md flex items-center gap-2">
          <span className="text-xs font-black tracking-widest uppercase">ECE PARIS</span>
        </div>
        <div className="bg-white h-12 px-5 py-2 rounded-lg flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="h-8" />
        </div>
      </div>

      {/* Content Area */}
      {title && (
        <div className="border-l-4 border-[#FFE600] pl-6 mb-8 z-10">
          <p className="text-[#FFE600] text-sm uppercase tracking-[4px] font-bold mb-1">{tagline}</p>
          <h1 className="text-4xl font-light">{title}</h1>
        </div>
      )}

      <div className="flex-grow z-10 flex flex-col">
        {children}
      </div>

      {/* Footer HUD */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between text-[10px] font-extrabold uppercase tracking-widest text-white/20 z-10">
        <div>{footerText}</div>
        <div className="text-[#FFE600]">{slideNum} / 06</div>
      </div>
    </motion.div>
  );
};

export default SlideLayout;
import React from 'react';
import { motion } from 'framer-motion';

const Slide12 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col items-center justify-center p-[60px_80px] font-sans text-center"
    >
      <div className="w-20 h-1 bg-[#FFE600] mb-10" />
      
      <h2 className="text-7xl font-black uppercase italic tracking-tighter mb-6">
        Merci de votre <span className="text-[#FFE600]">Attention</span>
      </h2>
      
      <p className="text-xl font-light opacity-60 max-w-2xl mb-12">
        L'audit de performance de demain ne se contentera plus de constater le passé, il construira la résilience du futur.
      </p>
      
      <div className="font-urbanist flex gap-4">
        <div className="px-6 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
          Questions & Réponses
        </div>
        <div className="px-6 py-3 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest">
          Fin de session
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="font-urbanist pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            13 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide12;
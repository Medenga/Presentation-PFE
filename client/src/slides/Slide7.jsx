import React from 'react';
import { motion } from 'framer-motion';

const Slide6 = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col items-center justify-center p-[60px_80px] font-urbanist text-center">
      <div className="w-20 h-1 bg-[#FFE600] mb-10" />
      <h2 className="text-7xl font-black uppercase italic tracking-tighter mb-6">Merci de votre <span className="text-[#FFE600]">Attention</span></h2>
      <p className="text-xl font-light opacity-60 max-w-2xl mb-12">L'audit de performance de demain ne se contentera plus de constater le passé, il construira la résilience du futur.</p>
      
      <div className="flex gap-4">
        <div className="px-6 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">Questions & Réponses</div>
        <div className="px-6 py-3 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest">Fin de session</div>
      </div>

      <div className="absolute bottom-10 text-[10px] font-bold opacity-30 uppercase tracking-[2px]">06 / 06 • PFE EY 2026</div>
    </motion.div>
  );
};
export default Slide6;
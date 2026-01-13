import React from 'react';
import { motion } from 'framer-motion';
import { History, Zap, Search, GraduationCap, ArrowRight } from 'lucide-react';

const Slide2 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* HEADER HUD */}
      <div className="flex justify-between items-center z-10 w-full mb-4">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md">
          <div className="flex items-center gap-2 font-extrabold text-[14px] tracking-widest uppercase text-white">
            <GraduationCap size={18} strokeWidth={0.5} />
            <span>ECE PARIS</span>
          </div>
        </div>
        <div className="h-[50px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="h-[35px]" />
        </div>
      </div>

      <h2 className="text-[#FFE600] text-[28px] font-bold tracking-[8px] uppercase mb-6 text-center">
        L'Impératif de Mutation
      </h2>
      
      <div className="flex-grow flex flex-col justify-center">
        {/* SPLIT VIEW */}
        <div className="grid grid-cols-2 gap-0 items-stretch h-[280px] mb-12">
          {/* TRADITIONNEL */}
          <div className="bg-white/[0.02] border border-white/10 rounded-l-3xl p-10 flex flex-col justify-center items-center text-center opacity-50">
            <History size={48} className="mb-4 text-gray-500" />
            <h3 className="text-[32px] font-bold text-gray-400 mb-2">Audit Traditionnel</h3>
            <p className="text-[20px] text-gray-500 italic">"L'Historien"</p>
            <div className="mt-6 text-[16px] text-gray-500 uppercase tracking-widest">Constat Rétrospectif</div>
          </div>

          {/* PRÉDICTIF */}
          <div className="bg-[#FFE600]/[0.03] border-2 border-[#FFE600] rounded-r-3xl p-10 flex flex-col justify-center items-center text-center relative">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#FFE600] rounded-full p-2 text-black shadow-[0_0_20px_rgba(255,230,0,0.5)]">
              <ArrowRight size={24} strokeWidth={3} />
            </div>
            <Zap size={48} className="mb-4 text-[#FFE600]" />
            <h3 className="text-[40px] font-black text-[#FFE600] mb-2">Audit Prédictif</h3>
            <p className="text-[24px] text-white font-medium italic">"La Vigie"</p>
            <div className="mt-6 text-[16px] text-[#FFE600] font-bold uppercase tracking-widest">Anticipation Proactive</div>
          </div>
        </div>

        {/* PUNCHLINE ANALOGIE */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/[0.03] border-l-4 border-[#FFE600] p-6 rounded-r-3xl max-w-3xl mx-auto flex items-center gap-6"
        >
          <Search className="text-[#FFE600] shrink-0" size={40} />
          <p className="text-[22px] leading-tight text-gray-300">
            "Chercher une aiguille dans une <br/> 
            <span className="text-white font-bold">botte de foin en mouvement</span>".
          </p>
        </motion.div>
      </div>

      {/* FOOTER HUD */}
      <div className="mt-auto pt-4 border-t border-white/[0.08] flex justify-between items-center z-10 opacity-60">
        <div className="text-[12px] font-extrabold uppercase tracking-[2px]">Project Context</div>
        <div className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#FFE600]">02 / 06</div>
      </div>
    </motion.div>
  );
};

export default Slide2;
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Hourglass, Target, Zap, GraduationCap } from 'lucide-react';

const Slide4 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[40px_80px] overflow-hidden font-urbanist"
    >
      {/* HEADER HUD */}
      <div className="flex justify-between items-center z-10 w-full mb-6">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md">
          <div className="flex items-center gap-2 font-extrabold text-[14px] tracking-widest uppercase">
            <GraduationCap size={18} className="text-[#FFE600]" />
            <span>ECE PARIS</span>
          </div>
        </div>
        <div className="h-[50px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="h-[35px]" />
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        {/* PROBLÉMATIQUE CENTRALE */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] px-4 py-1 rounded-full text-[12px] font-black uppercase tracking-[3px] mb-4">
            <Microscope size={14} /> Question de Recherche
          </div>
          <h3 className="text-[32px] font-light italic leading-tight max-w-4xl mx-auto text-white/90">
            Comment transformer cet audit statique en un système capable d'anticiper les défaillances avant qu'elles ne soient perçues par l'utilisateur ? 
          </h3>
        </div>

        {/* HYPOTHÈSES KPI CARDS */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          {/* H1: LEAD TIME */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] border border-white/10 p-8 rounded-[32px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Hourglass size={80} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#FFE600] p-2 rounded-lg text-black font-bold text-[14px]">H1</div>
              <h4 className="text-[18px] font-bold uppercase tracking-widest text-gray-400">Lead Time</h4>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[72px] font-black text-[#FFE600] leading-none">&gt; 2</span>
              <span className="text-[24px] font-bold text-[#FFE600]">minutes</span>
            </div>
            <p className="text-[17px] text-gray-300 leading-relaxed max-w-[300px]">
              Délai d'anticipation nécessaire pour une <b>auto-remédiation</b> ou une <b>intervention humaine</b>.
            </p>
          </motion.div>

          {/* H2: PRÉCISION */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] border border-white/10 p-8 rounded-[32px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={80} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#FFE600] p-2 rounded-lg text-black font-bold text-[14px]">H2</div>
              <h4 className="text-[18px] font-bold uppercase tracking-widest text-gray-400">Précision</h4>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[72px] font-black text-[#FFE600] leading-none">&gt; 85</span>
              <span className="text-[24px] font-bold text-[#FFE600]">%</span>
            </div>
            <p className="text-[17px] text-gray-300 leading-relaxed max-w-[320px]">
              Fusion des métriques <b>Système</b> et <b>Applicatives</b> pour réduire drastiquement les faux positifs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      {/* FOOTER HUD - Version Fixe avec Absolute */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
          <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
          <div className="text-white text-xs font-black">
            04 <span className="text-ey-yellow">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide4;
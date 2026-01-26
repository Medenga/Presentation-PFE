import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Hourglass, Target } from 'lucide-react';

const Slide4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-20 pt-12 pb-24 overflow-hidden font-sans"
    >
      <div className="flex-grow flex flex-col items-center">
        {/* TITRE - mb-16 pour descendre les cartes */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] px-5 py-2 rounded-full text-[13px] font-black uppercase tracking-[3px] mb-6">
            <Microscope size={16} />
            Question de recherche
          </div>
          <h1 className="text-white text-[36px] font-extrabold leading-tight max-w-4xl mx-auto">
            Comment transformer cet audit statique en un système capable d'anticiper les défaillances avant qu'elles ne soient perçues par l'utilisateur ?
          </h1>
        </div>

        {/* KPI CARDS - Ajout d'un petit margin top pour équilibrer */}
        <div className="grid grid-cols-2 gap-8 max-w-[850px] mx-auto w-full mt-2">
          {/* H1 — LEAD TIME */}
          <motion.div whileHover={{ y: -4 }} className="bg-white/10 border border-white/15 rounded-3xl p-7 relative">
            <div className="absolute top-6 right-6 opacity-10"><Hourglass size={60} /></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFE600] px-3 py-1 rounded-md text-black font-black text-[14px]">H1</div>
              <h4 className="text-[16px] font-bold uppercase tracking-widest text-gray-300">Lead Time</h4>
            </div>
            <div className="flex items-end gap-2 mb-3">
              <span className="text-[64px] font-black text-[#FFE600] leading-none">&gt; 2</span>
              <span className="text-[22px] font-bold text-[#FFE600] pb-1">minutes</span>
            </div>
            <p className="text-[17px] text-gray-200">Délai d'anticipation nécessaire pour une <strong className="text-white">auto-remédiation</strong>.</p>
          </motion.div>

          {/* H2 — PRÉCISION */}
          <motion.div whileHover={{ y: -4 }} className="bg-white/10 border border-white/15 rounded-3xl p-7 relative">
            <div className="absolute top-6 right-6 opacity-10"><Target size={60} /></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFE600] px-3 py-1 rounded-md text-black font-black text-[14px]">H2</div>
              <h4 className="text-[16px] font-bold uppercase tracking-widest text-gray-300">Précision</h4>
            </div>
            <div className="flex items-end gap-2 mb-3">
              <span className="text-[64px] font-black text-[#FFE600] leading-none">&gt; 85</span>
              <span className="text-[22px] font-bold text-[#FFE600] pb-1">%</span>
            </div>
            <p className="text-[17px] text-gray-200">Fusion des métriques <strong className="text-white">Système</strong> et <strong className="text-white">Applicatives</strong>.</p>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-8">
        <div className="pt-4 border-t border-white/15 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white/70">
          <div>Numéro d'équipe : <span className="text-white">#PFE25-R-474</span></div>
          <div className="text-sm font-black text-white">04 <span className="text-[#FFE600]">/</span> 10</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide4;
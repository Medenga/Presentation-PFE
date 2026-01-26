import React from 'react';
import { motion } from 'framer-motion';
import { History, Zap, Search, ArrowRight } from 'lucide-react';

const Slide2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Harmonisation : font-sans et padding vertical pour remonter le contenu
      className="relative w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-20 pt-12 pb-28 overflow-hidden font-sans"
    >
      {/* TITLE - Ajusté à 36px et font-extrabold pour correspondre aux autres slides */}
      <h1 className="text-white text-[36px] font-extrabold leading-tight max-w-5xl mx-auto text-center mb-8">
        L&apos;Impératif de Mutation
      </h1>

      {/* CONTENT */}
      <div className="flex-grow flex flex-col items-center justify-center">
        
        {/* SPLIT VIEW */}
        <div className="grid grid-cols-2 w-full max-w-[900px] h-[220px] mb-10">
          
          {/* TRADITIONNEL */}
          <div className="bg-black/20 border border-white/15 rounded-l-3xl px-8 flex flex-col justify-center items-center text-center opacity-60">
            <History size={42} className="mb-3 text-gray-500" />
            <h3 className="text-[32px] font-bold text-gray-400 mb-1">
              Audit Traditionnel
            </h3>
            <p className="text-[20px] text-gray-500 italic">
              &quot;L&apos;Historien&quot;
            </p>
            <div className="mt-4 text-[16px] text-gray-400 uppercase tracking-widest font-bold">
              Constat rétrospectif
            </div>
          </div>

          {/* PREDICTIF */}
          <div className="relative bg-ey-yellow/5 border-2 border-ey-yellow rounded-r-3xl px-8 flex flex-col justify-center items-center text-center">
            
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 bg-ey-yellow rounded-full p-2 text-black shadow-[0_0_20px_rgba(255,230,0,0.5)] z-10">
              <ArrowRight size={22} strokeWidth={3} />
            </div>

            <Zap size={42} className="mb-3 text-ey-yellow" />
            <h3 className="text-[40px] font-black text-ey-yellow mb-1">
              Audit Prédictif
            </h3>
            <p className="text-[22px] text-white italic">
              &quot;La Vigie&quot;
            </p>
            <div className="mt-4 text-[16px] text-ey-yellow font-bold uppercase tracking-widest">
              Anticipation proactive
            </div>
          </div>
        </div>

        {/* PUNCHLINE */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-black/30 border-l-4 border-ey-yellow px-8 py-5 rounded-r-3xl max-w-3xl flex items-center gap-6"
        >
          <Search size={36} className="text-ey-yellow shrink-0" />
          <p className="text-[22px] leading-snug text-gray-300">
            &quot;Chercher une aiguille dans une{" "}
            <span className="text-white font-bold">
              botte de foin en mouvement
            </span>
            &quot;.
          </p>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/20 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white/70">
          <div>Numéro d&apos;équipe : <span className="text-white">#PFE25-R-474</span></div>
          <div className="text-sm font-black text-white">
            02 <span className="text-ey-yellow">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide2;
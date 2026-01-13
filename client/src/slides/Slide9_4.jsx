import React from 'react';
import { motion } from 'framer-motion';
import { Hourglass, Layers, Microscope, Target } from 'lucide-react';

const Slide9_4 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* HEADER HUD */}
      <div className="flex justify-between items-center z-10 w-full mb-8">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md">
          <div className="flex items-center gap-2 font-extrabold text-[14px] tracking-widest uppercase text-white">
            <span>ECE PARIS</span>
          </div>
        </div>
        <div className="h-[50px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" 
            alt="EY" 
            className="h-[35px]" 
          />
        </div>
      </div>

      <div className="z-10 flex-grow flex flex-col justify-center">
        {/* Badge Section */}
        <div className="flex justify-center mb-6">
          <span className="bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-[3px] flex items-center gap-2">
            <Microscope size={16} /> Question de Recherche
          </span>
        </div>
        
        {/* Cadre de la Problématique Centrale */}
        <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 p-10 rounded-[24px] mb-10 text-center relative shadow-2xl">
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d0d0d] px-4 text-[#FFE600] text-[12px] font-bold uppercase tracking-[2px]">
             Problématique 
           </div>
           <p className="text-[24px] font-light leading-relaxed italic text-white/90">
              « Comment transformer l'audit de performance traditionnel en un système capable d'anticiper les défaillances via l'analyse prédictive ? »
           </p>
        </div>

        {/* Grille des Hypothèses Scientifiques */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          {/* Hypothèse 1 */}
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl border-l-4 border-l-[#FFE600] hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Hourglass className="text-[#FFE600]" size={28} />
              <h4 className="text-[20px] font-bold tracking-tight text-[#FFE600]">H1 : Lead Time</h4>
            </div>
            <p className="text-[17px] text-gray-300 leading-relaxed">
              Démontrer que nos modèles (LSTM, Random Forest) identifient des signaux faibles au moins <b className="text-white">2 minutes</b> avant une rupture de service.
            </p>
            <p className="text-[14px] text-gray-500 mt-3 italic">
              Temps nécessaire pour une intervention humaine ou auto-remédiation. 
            </p>
          </div>

          {/* Hypothèse 2 */}
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl border-l-4 border-l-[#FFE600] hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-[#FFE600]" size={28} />
              <h4 className="text-[20px] font-bold tracking-tight text-[#FFE600]">H2 : Corrélation</h4>
            </div>
            <p className="text-[17px] text-gray-300 leading-relaxed">
              La fusion des métriques <b className="text-white">Système</b> et <b className="text-white">Applicatives</b> permet d'atteindre une précision prédictive supérieure à <b className="text-white">85%</b>.
            </p>
            <p className="text-[14px] text-gray-500 mt-3 italic">
              Dépasser les limites du monitoring basé uniquement sur l'infrastructure. 
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER HUD */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center opacity-40">
        <div className="text-[11px] font-extrabold uppercase tracking-[2px]">Scientific Hypotheses & Goals</div>
        <div className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#FFE600]">04 / 06</div>
      </div>
    </motion.div>
  );
};

export default Slide9_4;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  FlaskConical, 
  Hourglass, 
  Layers 
} from 'lucide-react';

const Slide2 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center z-10 w-full mb-2">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md">
          <div className="flex items-center gap-2 font-extrabold text-[14px] tracking-widest uppercase text-white">
            <GraduationCap size={18} strokeWidth={0.5} />
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

      {/* MAIN CONTENT */}
      <div className="z-10 flex-grow flex flex-col justify-center">
        {/* Badge Travaux de Recherche */}
        <div className="flex justify-center mb-3">
          <span className="bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-[2px] flex items-center gap-2">
            <FlaskConical size={14} strokeWidth={0.5} /> Travaux de Recherche
          </span>
        </div>

        {/* Problem Box */}
        <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 p-10 rounded-[20px] mb-6 text-center backdrop-blur-sm relative">
           {/* Quote Icon decorative */}
           <div className="absolute top-4 left-6 text-white/5 text-6xl font-serif">“</div>
           
           <h2 className="text-[#FFE600] text-[14px] font-black uppercase tracking-[3px] mb-4">
             Problématique Centrale
           </h2>
           <p className="text-[24px] font-light leading-relaxed text-white/90 italic">
             « Comment transformer l'audit de performance traditionnel — <span className="text-white font-medium italic underline decoration-[#FFE600]/30">réactif et statique</span> — en un système capable d'anticiper les défaillances via l'analyse prédictive ? »
           </p>
        </div>

        {/* Grid 2 Columns */}
        <div className="grid grid-cols-2 gap-[30px] max-w-5xl mx-auto w-full">
          <div className="bg-white/[0.03] border border-white/10 px-8 py-4 rounded-[16px] backdrop-blur-sm group hover:border-[#FFE600]/40 transition-colors">
            <Hourglass className="text-[#FFE600] mb-2 group-hover:scale-110 transition-transform" size={24} />
            <h4 className="text-[18px] font-bold mb-1 tracking-tight">Anticipation (Lead Time)</h4>
            <p className="text-[14px] text-gray-400 leading-relaxed">
              Démontrer la capacité à détecter les pannes <b className="text-white font-bold">2 minutes</b> avant l'impact utilisateur réel sur le système.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 px-8 py-4 rounded-[16px] backdrop-blur-sm group hover:border-[#FFE600]/40 transition-colors">
            <Layers className="text-[#FFE600] mb-2 group-hover:scale-110 transition-transform" size={24} />
            <h4 className="text-[18px] font-bold mb-1 tracking-tight">Fusion de Métriques</h4>
            <p className="text-[14px] text-gray-400 leading-relaxed">
              Corrélation entre Système (Infrastructure) et Applicatif pour atteindre une précision prédictive supérieure à <b className="text-white font-bold">85%</b>.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER HUD */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center opacity-50">
        <div className="text-[10px] font-extrabold uppercase tracking-[2px]">Research Framework</div>
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#FFE600]">02 / 06</div>
      </div>
    </motion.div>
  );
};

export default Slide2;
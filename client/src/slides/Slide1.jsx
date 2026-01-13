import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Slide1 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center z-10 w-full mb-5">
        {/* Box ECE */}
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg flex items-center backdrop-blur-md px-[15px]">
          <div className="flex items-center gap-2 font-extrabold text-[14px] tracking-widest uppercase text-white">
            <GraduationCap size={18} className="text-[#FFE600]" />
            <span>ECE PARIS</span>
          </div>
        </div>

        {/* Box EY */}
        <div className="h-[50px] w-[80px] bg-white rounded-lg px-6 flex items-center justify-center">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" 
                alt="EY" 
                className="h-[35px] w-auto block" 
                style={{ minWidth: '70px' }} // Sécurité pour éviter que l'image ne s'écrase
            />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex flex-col justify-center items-center text-center z-10">
        <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-5">
          Projet de Fin d'Études • 2025-2026
        </div>
        
        <h1 className="text-[55px] font-light leading-[1.1] max-w-[1100px]">
            Application de l'analyse prédictive à l’audit de performance des systèmes d’information
        </h1>

        <div className="w-[80px] h-[4px] bg-[#FFE600] my-[30px] rounded-full shadow-[0_0_10px_rgba(255,230,0,0.3)]" />

        {/* TEAM CARDS */}
        <div className="flex gap-5 mt-5">
          <div className="mx-[10px] bg-white/[0.03] border border-white/10 p-[15px_25px] rounded-[12px] backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
            <div className="text-[10px] text-[#FFE600] font-extrabold uppercase tracking-wider">Pôle Cybersécurité</div>
            <div className="text-[13px] mt-[5px] text-white/90">Massioudath BANKOLE • Mendenga TAKOUGNADI-A</div>
          </div>
          
          <div className="mx-[10px] bg-white/[0.03] border border-white/10 p-[15px_25px] rounded-[12px] backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
            <div className="text-[10px] text-[#FFE600] font-extrabold uppercase tracking-wider">Pôle Data & IA</div>
            <div className="text-[13px] mt-[5px] text-white/90">Redha IBBOU • Naïm MEYA • Walid LECHHAB • Nicolas PEREIRA</div>
          </div>
        </div>
      </div>

      {/* FOOTER HUD */}
      <div className="mt-auto pt-[15px] border-t border-white/[0.08] flex justify-between items-center z-10">
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] opacity-40">Project Ref: PFE-EY-2026</div>
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#FFE600] opacity-80">01 / 06</div>
      </div>
    </motion.div>
  );
};

export default Slide1;
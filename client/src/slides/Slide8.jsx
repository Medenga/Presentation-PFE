import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Slide8 = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      <div className="flex justify-between items-center z-10 w-full mb-8">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md text-white font-extrabold text-[14px] gap-2 uppercase tracking-widest">
          <GraduationCap size={18} /> ECE PARIS
        </div>
        <div className="h-[50px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="h-[35px]" />
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <div className="border-l-4 border-[#FFE600] pl-6 text-left mb-12">
          <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">Simulation d'incident</div>
          <h1 className="text-[50px] font-light uppercase tracking-tighter">
            Démonstrateur de <span className="font-bold text-[#FFE600]">Lead Time</span>
          </h1>
        </div>

        <button 
          onClick={() => navigate('/simulation')}
          className="group relative bg-[#FFE600] text-black px-12 py-5 font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,230,0,0.2)] hover:scale-105 transition-all flex items-center gap-4"
        >
          <Play size={20} fill="black" />
          Démarrer la simulation live
        </button>
      </div>

      
    {/* FOOTER */}
    {/* FOOTER HUD - Version Fixe avec Absolute */}
    <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
      <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
        <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
        <div className="text-white text-xs font-black">
          08 <span className="text-ey-yellow">/</span> 10
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default Slide8;
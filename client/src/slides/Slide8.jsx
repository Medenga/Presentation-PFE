import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Slide8 = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[60px_80px] overflow-hidden font-['Helvetica',sans-serif]"
    >
      {/* Logos supprimés */}

      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <div className="border-l-4 border-[#FFE600] pl-6 text-left mb-12">
          <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">Simulation d'incident</div>
          <h1 className="text-[50px] font-bold tracking-tighter">
            Démonstration de <span className="text-[#FFE600]">lead time</span>
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
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
          <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
          <div className="text-white text-xs font-black">
            08 <span className="text-[#FFE600]">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide8;
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Slide10 = () => {
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
            onClick={() => window.location.href = "http://localhost:5173/"}
            className="inline-flex items-center h-[34px] px-4 rounded-md
                       bg-[#FFE600] text-black text-[12px] font-black uppercase
                       tracking-[0.28em] shadow-[0_0_20px_rgba(255,230,0,0.15)]
                       hover:scale-[1.03] transition-transform mb-2"
          >
            Démonstration
          </button>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            10 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide10;
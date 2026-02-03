import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Slide9 = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[60px_80px] overflow-hidden font-['Helvetica',sans-serif]"
    >
      {/* Logos supprimés */}
      <div className="flex-grow flex flex-col justify-center items-center text-center w-75">
        <img src="/src/assets/Slide9.jpg" alt="Slide 9" className="w-full h-full object-contain" />
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            09 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide9;
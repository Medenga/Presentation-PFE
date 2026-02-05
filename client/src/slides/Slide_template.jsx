import React from 'react';
import { motion } from 'framer-motion';

const Slide_template = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: '1280px', height: '720px' }}
      className="relative flex flex-col px-20 py-10 overflow-hidden font-helvetica shadow-2xl mx-auto bg-pres-grey"
    >
      

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            12 <span className="text-ey-yellow">/</span> 14
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide_template;

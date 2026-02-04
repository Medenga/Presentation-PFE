import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Eye, Sparkles } from 'lucide-react';

const Slide3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-20 pt-12 pb-32 overflow-hidden font-sans"
    >
      {/* TITLE */}
      <h3 className="text-white text-[38px] font-extrabold leading-tight max-w-5xl mx-auto text-center mb-8">
        Etat de l'art
      </h3>

      <div className="flex-grow flex items-center justify-between gap-12">
        
        {/* VENN DIAGRAM  */}
        <div className="relative w-[520px] h-[450px] flex-shrink-0">
          {/* RIGUEUR */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border-2 border-blue-400/40 bg-blue-400/10 flex flex-col items-center justify-start pt-10 text-center">
            <ShieldCheck size={36} className="text-blue-400 mb-3" />
            <div className="text-[22px] font-bold text-blue-200 uppercase tracking-wider">Rigueur</div>
            <div className="text-[16px] text-blue-200/80 mt-1 font-semibold max-w-[180px]">
              Audit traditionnel (IFACI)
            </div>
          </div>

          {/* PUISSANCE */}
          <div className="absolute bottom-4 left-0 w-[300px] h-[300px] rounded-full border-2 border-green-400/40 bg-green-400/10 flex flex-col items-center justify-start pt-12 text-center">
            <Zap size={36} className="text-green-400 mb-3" />
            <div className="text-[22px] font-bold text-green-200 uppercase tracking-wider">Puissance</div>
            <div className="text-[16px] text-green-200/80 mt-1 font-semibold max-w-[180px]">
              Temps réel (AIOps)
            </div>
          </div>

          {/* CONFIANCE */}
          <div className="absolute bottom-4 right-0 w-[300px] h-[300px] rounded-full border-2 border-purple-400/40 bg-purple-400/10 flex flex-col items-center justify-start pt-12 text-center">
            <Eye size={36} className="text-purple-400 mb-3" />
            <div className="text-[22px] font-bold text-purple-200 uppercase tracking-wider">Confiance</div>
            <div className="text-[16px] text-purple-200/80 mt-1 font-semibold max-w-[180px]">
              Explicabilité (XAI)
            </div>
          </div>

          {/* CENTRE (Cœur de cible) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[80px] h-[80px] bg-[#FFE600] rounded-full 
                       shadow-[0_0_40px_rgba(255,230,0,0.6)] 
                       flex items-center justify-center z-10"
          >
            <Sparkles size={30} className="text-black" />
          </motion.div>
        </div>

        {/* EXPLANATION CARDS */}
        <div className="w-[580px] space-y-6">

          <div className="bg-white/5 border border-white/10 p-7 rounded-[24px]">
            <h4 className="text-blue-400 font-bold text-[22px] mb-2 uppercase tracking-tight">
              Limite normative
            </h4>
            <p className="text-[19px] text-gray-300 leading-relaxed font-medium">
              L’audit constate la conformité <span className="text-white">a posteriori</span>, il ne prédit pas la panne.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-7 rounded-[24px]">
            <h4 className="text-green-400 font-bold text-[22px] mb-2 uppercase tracking-tight">
              Le piège de l’AIOps
            </h4>
            <p className="text-[19px] text-gray-300 leading-relaxed font-medium">
              La <span className="text-white">boîte noire</span> mathématique est incompatible avec la preuve d’audit.
            </p>
          </div>

          <div className="bg-[#FFE600]/10 border border-[#FFE600]/30 p-7 rounded-[24px]">
            <h4 className="text-[#FFE600] font-black uppercase tracking-[3px] text-[15px] mb-3">
              Notre solution
            </h4>
            <p className="text-[24px] font-extrabold text-white leading-tight">
              L’audit prédictif devient <span className="text-[#FFE600]">intelligible</span> grâce aux modèles SHAP & LIME.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-8">
        <div className="pt-4 border-t border-white/15 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white/60">
          <div>Numéro d’équipe : <span className="text-white">#PFE25-R-474</span></div>
          <div className="text-sm font-black text-white">
            03 <span className="text-[#FFE600]">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide3;
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Eye, Sparkles, GraduationCap } from 'lucide-react';

const Slide8_3 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[40px_80px] overflow-hidden font-urbanist"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center z-10 w-full mb-4">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md">
          <div className="flex items-center gap-2 font-extrabold text-[14px] tracking-widest uppercase">
            <GraduationCap size={18} className="text-[#FFE600]" />
            <span>ECE PARIS</span>
          </div>
        </div>
        <div className="h-[50px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="h-[35px]" />
        </div>
      </div>

      <h2 className="text-[#FFE600] text-[24px] font-bold tracking-[8px] uppercase mb-8 text-center">
        Positionnement Stratégique
      </h2>

      <div className="flex-grow flex items-center justify-between">
        {/* VENN DIAGRAM AREA */}
        <div className="relative w-[500px] h-[450px]">
          {/* Cercle 1: Rigueur */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full border-2 border-blue-500/30 bg-blue-500/10 flex flex-col items-center justify-center p-8 text-center"
          >
            <ShieldCheck className="text-blue-400 mb-2" size={32} />
            <span className="font-bold text-blue-200">RIGUEUR</span>
            <span className="text-[12px] opacity-60 italic mt-1">Audit Traditionnel (IFACI)</span>
          </motion.div>

          {/* Cercle 2: Puissance */}
          <motion.div 
            initial={{ x: 50, y: 50, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }}
            className="absolute bottom-10 left-0 w-[280px] h-[280px] rounded-full border-2 border-green-500/30 bg-green-500/10 flex flex-col items-center justify-center p-8 text-center"
          >
            <Zap className="text-green-400 mb-2" size={32} />
            <span className="font-bold text-green-200">PUISSANCE</span>
            <span className="text-[12px] opacity-60 italic mt-1">Temps Réel (AIOps)</span>
          </motion.div>

          {/* Cercle 3: Explicabilité */}
          <motion.div 
            initial={{ x: -50, y: 50, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }}
            className="absolute bottom-10 right-0 w-[280px] h-[280px] rounded-full border-2 border-purple-500/30 bg-purple-500/10 flex flex-col items-center justify-center p-8 text-center"
          >
            <Eye className="text-purple-400 mb-2" size={32} />
            <span className="font-bold text-purple-200">CONFIANCE</span>
            <span className="text-[12px] opacity-60 italic mt-1">Explicabilité (XAI)</span>
          </motion.div>

          {/* CENTRE: LE PROJET */}
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}
            className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#FFE600] rounded-full shadow-[0_0_40px_rgba(255,230,0,0.4)] flex items-center justify-center z-20 border-4 border-[#0d0d0d]"
          >
            <Sparkles className="text-black" size={48} />
          </motion.div>
        </div>

        {/* EXPLANATION CARDS */}
        <div className="w-[500px] space-y-4">
          <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl">
            <h4 className="text-blue-400 font-bold mb-1">Limite Normative</h4>
            <p className="text-[15px] text-gray-400 italic">"L'audit constate la conformité a posteriori, il ne prédit pas la panne." </p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-1">Le Piège de l'AIOps</h4>
            <p className="text-[15px] text-gray-400 italic">"La 'Boîte Noire' mathématique est incompatible avec la preuve d'audit." </p>
          </div>
          <div className="bg-[#FFE600]/10 border border-[#FFE600]/20 p-5 rounded-2xl">
            <h4 className="text-[#FFE600] font-black uppercase tracking-widest text-[14px]">Notre Solution</h4>
            <p className="text-[18px] font-bold mt-1 text-white">
              L'audit prédictif devient intelligible grâce aux modèles SHAP & LIME. 
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-white/[0.08] flex justify-between items-center opacity-60">
        <div className="text-[12px] font-extrabold uppercase tracking-[2px]">Market State & Differentiation</div>
        <div className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#FFE600]">03 / 06</div>
      </div>
    </motion.div>
  );
};

export default Slide8_3;
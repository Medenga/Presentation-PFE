import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Eye, Sparkles } from 'lucide-react';

const Slide3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // pb-20 au lieu de pb-28 pour laisser le contenu descendre naturellement
      className="relative w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-20 pt-12 pb-20 overflow-hidden font-sans"
    >
      {/* TITLE - Taille harmonisée 36px et Gras */}
      <h3 className="text-white text-[36px] font-extrabold leading-tight max-w-5xl mx-auto text-center mb-12">
        Positionnement stratégique
      </h3>

      {/* On ajoute mt-4 pour pousser tout le bloc vers le bas */}
      <div className="flex-grow flex items-center justify-between mt-4">
        
        {/* VENN */}
        <div className="relative w-[500px] h-[420px]">
          {/* RIGUEUR */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full border-2 border-blue-400/40 bg-blue-400/10 flex flex-col items-center justify-start pt-8 text-center">
            <ShieldCheck size={32} className="text-blue-400 mb-2" />
            <div className="text-[18px] font-bold text-blue-200 uppercase tracking-wider">Rigueur</div>
            <div className="text-[14px] text-blue-200/70 mt-1 font-medium">
              Audit traditionnel (IFACI)
            </div>
          </div>

          {/* PUISSANCE */}
          <div className="absolute bottom-4 left-0 w-[280px] h-[280px] rounded-full border-2 border-green-400/40 bg-green-400/10 flex flex-col items-center justify-start pt-10 text-center">
            <Zap size={32} className="text-green-400 mb-2" />
            <div className="text-[18px] font-bold text-green-200 uppercase tracking-wider">Puissance</div>
            <div className="text-[14px] text-green-200/70 mt-1 font-medium">
              Temps réel (AIOps)
            </div>
          </div>

          {/* CONFIANCE */}
          <div className="absolute bottom-4 right-0 w-[280px] h-[280px] rounded-full border-2 border-purple-400/40 bg-purple-400/10 flex flex-col items-center justify-start pt-10 text-center">
            <Eye size={32} className="text-purple-400 mb-2" />
            <div className="text-[18px] font-bold text-purple-200 uppercase tracking-wider">Confiance</div>
            <div className="text-[14px] text-purple-200/70 mt-1 font-medium">
              Explicabilité (XAI)
            </div>
          </div>

          {/* CENTRE */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[80px] h-[80px] bg-ey-yellow rounded-full 
                       shadow-[0_0_30px_rgba(255,230,0,0.5)] 
                       flex items-center justify-center z-10"
          >
            <Sparkles size={30} className="text-black" />
          </motion.div>
        </div>

        {/* EXPLANATION - Correction de la police (plus d'italique) */}
        <div className="w-[520px] space-y-5">

          <div className="bg-black/35 border border-white/15 p-6 rounded-2xl">
            <h4 className="text-blue-400 font-bold text-[18px] mb-2">
              Limite normative
            </h4>
            <p className="text-[16px] text-white/80 leading-relaxed font-normal">
              "L’audit constate la conformité a posteriori, il ne prédit pas la panne."
            </p>
          </div>

          <div className="bg-black/35 border border-white/15 p-6 rounded-2xl">
            <h4 className="text-green-400 font-bold text-[18px] mb-2">
              Le piège de l’AIOps
            </h4>
            <p className="text-[16px] text-white/80 leading-relaxed font-normal">
              "La boîte noire mathématique est incompatible avec la preuve d’audit."
            </p>
          </div>

          <div className="bg-ey-yellow/10 border border-ey-yellow/30 p-6 rounded-2xl">
            <h4 className="text-ey-yellow font-black uppercase tracking-widest text-[13px] mb-2">
              Notre solution
            </h4>
            <p className="text-[19px] font-bold text-white leading-tight">
              L’audit prédictif devient intelligible grâce aux modèles SHAP & LIME.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/15 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white/60">
          <div>Numéro d’équipe : <span className="text-white">#PFE25-R-474</span></div>
          <div className="text-sm font-black text-white">
            03 <span className="text-ey-yellow">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide3;
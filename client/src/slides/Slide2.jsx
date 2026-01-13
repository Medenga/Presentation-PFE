import React from 'react';
import { motion } from 'framer-motion';
import { History, Zap, Target } from 'lucide-react';

const Slide2 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* Titre de la slide - text-[24px] */}
      <h2 className="text-[#FFE600] text-[24px] font-bold tracking-[6px] uppercase mb-12 text-center">
        Contexte : L'impératif de mutation
      </h2>
      
      <div className="z-10 flex-grow flex flex-col justify-between max-w-5xl mx-auto w-full mb-10">
        
        {/* BLOC 1 : LE PARADOXE (Audit vs Vigie) */}
        <div className="grid grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/10 p-10 rounded-3xl">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-white/5 p-4 rounded-xl">
                <History className="text-gray-400" size={32} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-gray-300 mb-2">Audit Classique</h3>
                <p className="text-[18px] text-gray-500 leading-relaxed">
                  Contrôles ponctuels, manuels et rétrospectifs. <br/>
                  On analyse la panne une fois qu'elle a eu lieu.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#FFE600]/10 p-4 rounded-xl">
                <Zap className="text-[#FFE600]" size={32} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#FFE600] mb-2">Notre Enjeu : La Vigie</h3>
                <p className="text-[24px] text-white font-medium italic leading-tight">
                  "Passer de l'historien qui constate, <br/>
                  à la vigie qui anticipe."
                </p>
              </div>
            </div>
          </div>

          {/* Analogie visuelle */}
          <div className="border-l-2 border-[#FFE600]/30 pl-10">
            <p className="text-[22px] text-gray-400 italic leading-relaxed">
              Auditer un SI moderne, c'est comme <br/>
              <span className="text-white font-bold">"chercher une aiguille dans une botte de foin en mouvement".</span>
            </p>
          </div>
        </div>

        {/* BLOC 2 : OBJECTIFS (Horizontal) */}
        <div className="bg-[#FFE600]/5 border border-[#FFE600]/20 p-10 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Target className="text-[#FFE600]" size={36} />
            <h4 className="text-[20px] font-black uppercase tracking-[4px]">Objectifs Stratégiques</h4>
          </div>
          
          <div className="grid grid-cols-2 gap-10">
            <div className="flex gap-4">
              <div className="min-w-[10px] h-[10px] bg-[#FFE600] rounded-full mt-3" />
              <p className="text-[20px] text-white/90 leading-snug">
                <b>Garantir la continuité de service</b> <br/>
                en anticipant les dégradations critiques.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="min-w-[10px] h-[10px] bg-[#FFE600] rounded-full mt-3" />
              <p className="text-[20px] text-white/90 leading-snug">
                <b>Optimiser les ressources</b> <br/>
                en réduisant drastiquement les faux positifs.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER HUD */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center opacity-40">
        <div className="text-[12px] font-extrabold uppercase tracking-[2px]">Project Context</div>
        <div className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#FFE600]">02 / 06</div>
      </div>
    </motion.div>
  );
};

export default Slide2;
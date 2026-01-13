import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Database, Sparkles } from 'lucide-react';

const Slide8_3 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* Titre de la slide - text-[20px] */}
      <h2 className="text-[#FFE600] text-[20px] font-bold tracking-[5px] uppercase mb-8 text-center">
        État de l'Art & Positionnement
      </h2>

      <div className="flex-grow flex flex-col justify-center max-w-5xl mx-auto w-full">
        {/* En-têtes du tableau - text-[13px] */}
        <div className="grid grid-cols-4 border-b border-white/10 pb-4 mb-4 text-[13px] font-black uppercase tracking-widest text-gray-500">
          <div>Approche</div>
          <div>Solution Type</div>
          <div>Forces</div>
          <div className="text-[#FFE600]">Limites Critiques</div>
        </div>

        {/* Ligne IFACI - text-[18px] pour les titres, text-[16px] pour le reste */}
        <div className="grid grid-cols-4 border-b border-white/5 py-6 items-center">
          <div className="flex items-center gap-3 font-bold text-[18px]">
            <ShieldCheck className="text-blue-400" size={22} /> Normative
          </div>
          <div className="text-gray-300 text-[16px]">IFACI / IIA</div>
          <div className="text-[15px] text-gray-400">Cadre rigoureux, crédibilité</div>
          <div className="text-[15px] text-red-400/90 italic font-medium">Vision rétrospective, réactivité limitée</div>
        </div>

        {/* Ligne AIOps */}
        <div className="grid grid-cols-4 border-b border-white/5 py-6 items-center">
          <div className="flex items-center gap-3 font-bold text-[18px]">
            <Activity className="text-green-400" size={22} /> Technique
          </div>
          <div className="text-gray-300 text-[16px]">Dynatrace / Splunk</div>
          <div className="text-[15px] text-gray-400">Puissance temps réel</div>
          <div className="text-[15px] text-red-400/90 italic font-medium">Effet "Boîte noire", preuve opaque</div>
        </div>

        {/* Ligne AMS */}
        <div className="grid grid-cols-4 border-b border-white/5 py-6 items-center">
          <div className="flex items-center gap-3 font-bold text-[18px]">
            <Database className="text-purple-400" size={22} /> Documentaire
          </div>
          <div className="text-gray-300 text-[16px]">AuditBoard</div>
          <div className="text-[15px] text-gray-400">Workflow centralisé</div>
          <div className="text-[15px] text-red-400/90 italic font-medium">Mode "batch", pas de temps réel</div>
        </div>

        {/* Bloc Proposition de Valeur - Titre text-[14px], Corps text-[22px] */}
        <div className="mt-10 bg-[#FFE600] p-[2px] rounded-2xl shadow-[0_0_20px_rgba(255,230,0,0.1)]">
          <div className="bg-[#0d0d0d] rounded-[14px] p-6 flex items-center gap-8">
            <div className="bg-[#FFE600] p-4 rounded-full text-black">
              <Sparkles size={28} />
            </div>
            <div>
              <h4 className="text-[#FFE600] text-[14px] font-black uppercase tracking-widest mb-1">
                Notre Proposition de Valeur
              </h4>
              <p className="text-[22px] leading-tight text-white/95 italic">
                Allier <b>Rigueur de l'Audit</b> et <b>Puissance de l'AIOps</b> via l'explicabilité <span className="text-[#FFE600] font-bold">(XAI - SHAP/LIME)</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide8_3;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, 
  SearchCode, 
  BrainCircuit, 
  ShieldCheck,
  Cpu,
  Fingerprint,
  Activity,
  ArrowRightLeft,
  Trophy
} from 'lucide-react';

const Slide11 = ({ auditMetadata }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[50px_70px] overflow-hidden font-sans"
    >
      {/* TITLE BLOCK */}
      <div className="mb-8 border-l-4 border-[#FFE600] pl-6">
        <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">
          Innovation & Intelligence Artificielle
        </div>
        <h1 className="text-[40px] font-bold leading-tight uppercase tracking-tight">
          Valorisation 
        </h1>
      </div>

      {/* COMPARISON BANNER - RUPTURE TECH */}
      <div className="grid grid-cols-2 gap-4 mb-8 uppercase font-black text-[11px] tracking-widest text-center">
        <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-white/40 italic">
          Outils Existants : Modèles Statistiques Linéaires & Seuils Fixes
        </div>
        <div className="bg-[#FFE600] border border-[#FFE600] p-4 rounded-lg text-black shadow-[0_0_20px_rgba(255,230,0,0.15)]">
          Notre Solution : Pipeline Deep Learning Hybride & Prédictif
        </div>
      </div>

      {/* PIPELINE ARCHITECTURE (GRU + NLP + CORRELATION) */}
      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 text-[#FFE600] text-[12px] font-black uppercase tracking-widest mb-5">
          <Cpu size={17} /> Méthodologie d'Analyse Prédictive
        </div>
        <div className="grid grid-cols-3 gap-6">
          <TechPhase icon={<Activity size={22} />} title="GRU (Temporal)" desc="Détection de patterns séquentiels profonds" />
          <TechPhase icon={<SearchCode size={22} />} title="NLP (Sémantique)" desc="Analyse contextuelle des logs non structurés" />
          <TechPhase icon={<ArrowRightLeft size={22} />} title="Corrélation Log" desc="Couplage multi-sources pour diagnostic précis" active />
        </div>
      </div>

      {/* SECTION : EXPLICABILITÉ & VALEUR AJOUTÉE (SUR LA MÊME LIGNE) */}
      <div className="grid grid-cols-2 gap-6 mb-auto">
        {/* BLOC XAI */}
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest mb-4">
              <Fingerprint size={18} /> Explicabilité (XAI) via SHAP & LIME
            </div>
            <p className="text-[14px] text-white/80 leading-relaxed italic">
              "Indispensable pour la confiance SRE : chaque alerte est justifiée par une décomposition locale de l'importance des variables (logs, timestamps, métriques)."
            </p>
          </div>
          
        </div>

        {/* BLOC ACCOMPAGNEMENT SRE */}
        <div className="bg-[#FFE600]/5 border border-[#FFE600]/20 rounded-xl p-6 flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest mb-4 font-mono">
              <ShieldCheck size={18} /> Valeur Ajoutée : Accompagnement SRE
            </div>
            <p className="text-[14px] text-white/80 leading-relaxed font-medium">
              Au-delà de la détection, nous fournissons un **Rapport Intelligent** couplé à une **Remédiation Automatisée**. Un gain de temps critique pour le MTTR (Mean Time To Repair).
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-[#FFE600] uppercase pt-4 border-t border-[#FFE600]/10 mt-auto">
            <Trophy size={14} /> Accélération du Diagnostic Opérationnel
          </div>
        </div>
      </div>

      {/* FOOTER ORIGINAL RESTAURÉ */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black text-white">
            11 <span className="text-[#FFE600]">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* --- SOUS-COMPOSANTS --- */

const TechPhase = ({ icon, title, desc, active }) => (
  <div className={`p-5 rounded-lg border flex gap-4 items-center transition-all ${
    active ? 'bg-[#FFE600] border-[#FFE600]' : 'bg-white/5 border-white/10'
  }`}>
    <div className={`${active ? 'text-black' : 'text-[#FFE600]'}`}>
      {icon}
    </div>
    <div>
      <div className={`text-[14px] font-bold uppercase tracking-tight ${active ? 'text-black' : 'text-white'}`}>
        {title}
      </div>
      <div className={`text-[10px] font-black uppercase opacity-60 ${active ? 'text-black' : 'text-[#FFE600]'}`}>
        {desc}
      </div>
    </div>
  </div>
);

export default Slide11;
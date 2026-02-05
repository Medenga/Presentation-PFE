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
  const textStyle = { fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={textStyle}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[50px_70px] overflow-hidden"
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

      {/* COMPARISON BANNER */}
      <div className="grid grid-cols-2 gap-4 mb-8 uppercase font-black text-[11px] tracking-widest text-center">
        <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-white/40 italic">
          Outils Existants : Seuils Fixes & Rigides
        </div>
        <div className="bg-[#FFE600] border border-[#FFE600] p-4 rounded-lg text-black shadow-[0_0_20px_rgba(255,230,0,0.15)]">
          Notre Solution : IA Prédictive & Dynamique
        </div>
      </div>

      {/* PIPELINE ARCHITECTURE */}
      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 text-[#FFE600] text-[12px] font-black uppercase tracking-widest mb-5">
          <Cpu size={17} /> Méthodologie d'Analyse Prédictive
        </div>
        <div className="grid grid-cols-3 gap-6">
          <TechPhase icon={<Activity size={22} />} title="GRU (Temporal)" desc="Patterns séquentiels" />
          <TechPhase icon={<SearchCode size={22} />} title="NLP (Sémantique)" desc="Contexte des logs" />
          <TechPhase icon={<ArrowRightLeft size={22} />} title="Corrélation Log" desc="Diagnostic croisé" active />
        </div>
      </div>

      {/* SECTION : MOTS-CLÉS ACCESSIBLES */}
      <div className="grid grid-cols-2 gap-6 mb-auto">
        {/* BLOC XAI - MOTS CLÉS */}
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest mb-6">
              <Fingerprint size={18} /> Transparence (XAI)
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide">Zéro "Boîte Noire"</span>
              <span className="bg-white/10 px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide">Justification Réelle</span>
              <span className="bg-white/10 px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide">Confiance Totale</span>
              <span className="bg-white/10 px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide">Clarté Critique</span>
            </div>
          </div>
        </div>

        {/* BLOC VALEUR AJOUTÉE - MOTS CLÉS */}
        <div className="bg-[#FFE600]/5 border border-[#FFE600]/20 rounded-xl p-6 flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest mb-6">
              <ShieldCheck size={18} /> Impact Business & SRE
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#FFE600]/10 text-[#FFE600] px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide border border-[#FFE600]/20">Gain de temps</span>
              <span className="bg-[#FFE600]/10 text-[#FFE600] px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide border border-[#FFE600]/20">Aide à la décision</span>
              <span className="bg-[#FFE600]/10 text-[#FFE600] px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide border border-[#FFE600]/20">Réparation Rapide</span>
              <span className="bg-[#FFE600]/10 text-[#FFE600] px-3 py-1 rounded text-[16px] font-bold uppercase tracking-wide border border-[#FFE600]/20">MTTR Optimisé</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-[#FFE600] uppercase pt-4 border-t border-[#FFE600]/10 mt-auto">
            <Trophy size={14} /> Performance Opérationnelle
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black text-white">
            11 <span className="text-[#FFE600]">/</span> 14
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
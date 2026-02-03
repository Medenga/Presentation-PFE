import React from 'react';
import { motion } from 'framer-motion';
import { 
  Milestone,
  Users, 
  Github, 
  Layout, 
  MessageSquare, 
  ShieldAlert, 
  Calendar,
  CheckCircle2,
  RotateCw
} from 'lucide-react';

const Slide11 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[50px_70px] overflow-hidden font-sans"
    >
      {/* TITLE BLOCK */}
      <div className="mb-5 border-l-4 border-[#FFE600] pl-6">
        <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">
          Roadmap & Méthodologie Opérationnelle
        </div>
        <h1 className="text-[36px] font-bold leading-tight">
          Approche Projet, <span className="text-white">Exécution</span> & <span className="text-[#FFE600]">Prise de Recul</span>
        </h1>
      </div>

      {/* BLOC 1: ROADMAP (GANTT STYLE) */}
      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 text-[#FFE600] text-[12px] font-black uppercase tracking-widest mb-3">
          <Milestone size={17} /> Chronologie Stratégique
        </div>
        <div className="grid grid-cols-4 gap-3">
          <GanttPhase range="SEPT - OCT" name="Cadrage & Revue Littérature" />
          <GanttPhase range="OCT - NOV" name="Conception & Analyse Expérimentale" />
          <GanttPhase range="NOV - DÉC" name="Prototypage & ML" />
          <GanttPhase 
            range="DÉC - FÉVRIER" 
            name="Développement, Valorisation, Soutenance" 
            active 
          />
        </div>
      </div>

      {/* BOTTOM ROW (3 COLUMNS) */}
      <div className="grid grid-cols-[1fr_1fr_1.3fr] gap-4 mb-20">
        
        {/* BLOC 2: ORGANISATION & OUTILS */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col">
          <div className="flex items-center gap-2 text-[#FFE600] text-[12px] font-black uppercase tracking-widest mb-3">
            <Users size={16} /> Organisation & Outils
          </div>
          <div className="space-y-1.5 mb-3">
            <MethodoItem text="Équipe : Synergie Cyber + Data/IA" />
            <MethodoItem text="Agilité : Rôles flexibles & entraide" />
          </div>
          <div className="flex gap-2 flex-wrap mt-auto">
            <ToolTag icon={<Github size={12} />} label="GITHUB" />
            <ToolTag icon={<Layout size={12} />} label="NOTION" />
            <ToolTag icon={<MessageSquare size={12} />} label="TEAMS" />
          </div>
        </div>

        {/* BLOC 3: RYTHME & MODÈLE */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col">
          <div className="flex items-center gap-2 text-[#FFE600] text-[12px] font-black uppercase tracking-widest mb-3">
            <RotateCw size={16} /> Rythme & Modèle
          </div>
          <div className="space-y-1.5 mb-3">
            <MethodoItem text="Modèle Hybride : Cascade + Agile" />
            <MethodoItem text="Réunions : Quotidiennes & Hebdo" />
          </div>
          <div className="bg-[#FFE600]/10 border border-[#FFE600]/20 rounded px-3 py-2 flex items-center gap-2 mt-auto">
            <Calendar size={16} className="text-[#FFE600] flex-shrink-0" />
            <span className="text-[11px] font-bold text-white/90 uppercase leading-tight">
              1 Point Encadrant / Partenaire par Mois
            </span>
          </div>
        </div>

        {/* BLOC 4: LIMITES & RECUL */}
        <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4">
          <div className="flex items-center gap-2 text-red-500 text-[12px] font-black uppercase tracking-widest mb-3">
            <ShieldAlert size={16} /> Limites & Prise de Recul
          </div>
          <div className="space-y-2.5">
            <LimitEntry 
              label="Données & Outils" 
              desc="Jeux de données simulés (confidentialité) et usage d'outils Open Source adaptés." 
            />
            <LimitEntry 
              label="Périmètre Technique" 
              desc="Prototype en environnement simulé (pas de prod) pour assurer la faisabilité technique." 
            />
            <LimitEntry 
              label="Recul Méthodologique" 
              desc="Projet cohérent avec les ressources ; résultats interprétés en cadre expérimental contrôlé." 
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            12 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* --- SUB-COMPONENTS --- */

const GanttPhase = ({ range, name, active }) => (
  <div className={`relative p-4 rounded-lg border transition-all ${
    active 
      ? 'bg-[#FFE600] border-[#FFE600]' 
      : 'bg-white/5 border-white/10'
  }`}>
    {active && (
      <div className="bg-black text-[#FFE600] text-[10px] font-black px-2.5 py-1 rounded mb-2 uppercase tracking-wide inline-block">
        Phase Actuelle
      </div>
    )}
    <div className={`text-[11px] font-black mb-2 uppercase tracking-wide ${
      active ? 'text-black/70' : 'text-[#FFE600]'
    }`}>
      {range}
    </div>
    <div className={`text-[15px] font-bold leading-tight ${
      active ? 'text-black' : 'text-white/90'
    }`}>
      {name}
    </div>
  </div>
);

const MethodoItem = ({ text }) => (
  <div className="flex items-start gap-2 text-[14px]">
    <CheckCircle2 size={16} className="text-[#FFE600] flex-shrink-0 mt-0.5" />
    <span className="text-white/80 leading-snug">{text}</span>
  </div>
);

const ToolTag = ({ icon, label }) => (
  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-2 rounded text-[11px] font-bold text-white/60 uppercase">
    {icon} <span>{label}</span>
  </div>
);

const LimitEntry = ({ label, desc }) => (
  <div>
    <div className="text-red-500 text-[11px] font-black uppercase tracking-widest mb-1.5">
      {label}
    </div>
    <p className="text-[13px] text-white/60 leading-relaxed">
      {desc}
    </p>
  </div>
);

export default Slide11;
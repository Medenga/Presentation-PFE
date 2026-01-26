import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Milestone, // Remplacé Timeline
  Users, 
  Settings, 
  Github, 
  Layout, 
  MessageSquare, 
  ShieldAlert, 
  Calendar,
  CheckCircle2,
  RotateCw
} from 'lucide-react';

const Slide9 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[50px_70px] overflow-hidden font-urbanist"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center z-10 w-full mb-6">
        <div className="h-[45px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md">
          <div className="flex items-center gap-2 font-extrabold text-[13px] tracking-widest uppercase text-white">
            <GraduationCap size={16} />
            <span>ECE PARIS</span>
          </div>
        </div>
        <div className="h-[45px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="h-[30px]" />
        </div>
      </div>

      {/* TITLE BLOCK */}
      <div className="mb-6 border-l-4 border-[#FFE600] pl-6">
        <div className="text-[#FFE600] text-[12px] font-bold tracking-[4px] uppercase mb-1 text-white/60">Roadmap & Méthodologie Opérationnelle</div>
        <h1 className="text-[36px] font-light uppercase">
          Approche Projet, <span className="font-bold">Exécution</span> & <span className="font-bold text-[#FFE600]">Prise de Recul</span>
        </h1>
      </div>

      {/* BLOC 1: ROADMAP (GANTT STYLE) */}
      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-4"> {/* Réduit de p-6 mb-6 à p-4 mb-4 */}
        <div className="flex items-center gap-2 text-[#FFE600] text-[10px] font-black uppercase tracking-widest mb-3"> {/* mb-6 -> mb-3 */}
            <Milestone size={14} /> Chronologie Stratégique
        </div>
        <div className="flex justify-between items-stretch gap-2 relative">
          <GanttPhase range="SEPT - OCT" name="Cadrage & Revue littérature" />
          <GanttPhase range="OCT - NOV" name="Conception & Analyse expérimentale" />
          <GanttPhase range="NOV - DÉC" name="Prototypage & ML" />
          <GanttPhase 
            range="DÉC - FÉVRIER" 
            name="Développement, Valorisation, Soutenance" 
            active 
          />
        </div>
      </div>

      {/* BOTTOM ROW (2 COLUMNS) */}
      <div className="grid grid-cols-2 gap-6 flex-grow">
        
        {/* BLOC 2: METHODOLOGY */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 flex  gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest border-b border-white/10 pb-2">
              <Users size={14} /> Organisation & Outils
            </div>
            <div className="space-y-2">
              <MethodoItem text="Équipe : Synergie Cyber + Data/IA" />
              <MethodoItem text="Agilité : Rôles flexibles & entraide" />
            </div>
            <div className="flex gap-2">
              <ToolTag icon={<Github size={12} />} label="GitHub" />
              <ToolTag icon={<Layout size={12} />} label="Notion" />
              <ToolTag icon={<MessageSquare size={12} />} label="Teams" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest border-b border-white/10 pb-2">
              <RotateCw size={14} /> Rythme & Modèle
            </div>
            <div className="space-y-2">
              <MethodoItem text="Modèle Hybride : Cascade + Agile" />
              <MethodoItem text="Réunions : Quotidiennes & Hebdo" />
            </div>
            <div className="bg-[#FFE600]/10 border border-[#FFE600]/20 rounded px-3 py-2 flex items-center gap-3">
              <Calendar size={14} className="text-[#FFE600]" />
              <span className="text-[10px] font-bold text-white/80 uppercase">1 Point Encadrant / Partenaire par mois</span>
            </div>
          </div>
        </div>

        {/* BLOC 3: LIMITES & RECUL */}
        <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-6">
          <div className="flex items-center gap-2 text-red-500 text-[11px] font-black uppercase tracking-widest border-b border-red-500/20 pb-2 mb-6">
            <ShieldAlert size={14} /> Limites & Prise de Recul
          </div>
          <div className="space-y-6">
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
      {/* FOOTER HUD - Version Fixe avec Absolute */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
          <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
          <div className="text-white text-xs font-black">
            09 <span className="text-ey-yellow">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* --- SUB-COMPONENTS --- */

const GanttPhase = ({ range, name, active }) => (
  <div className={`flex-1 p-4 rounded-lg border transition-all ${active ? 'bg-[#FFE600] border-[#FFE600] scale-105 shadow-[0_0_20px_rgba(255,230,0,0.2)]' : 'bg-white/5 border-white/10'}`}>
    {active && (
      <div className="absolute -top-3 left-4 bg-white text-black text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
        Phase Actuelle
      </div>
    )}
    <div className={`text-[9px] font-black mb-1 ${active ? 'text-black/60' : 'text-[#FFE600]'}`}>{range}</div>
    <div className={`text-[11px] font-bold leading-tight uppercase ${active ? 'text-black' : 'text-white/80'}`}>{name}</div>
  </div>
);

const MethodoItem = ({ text }) => (
  <div className="flex items-center gap-2 text-[12px]">
    <CheckCircle2 size={12} className="text-[#FFE600]" />
    <span className="text-white/70">{text}</span>
  </div>
);

const ToolTag = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded text-[10px] font-bold text-white/50 uppercase">
    {icon} {label}
  </div>
);

const LimitEntry = ({ label, desc }) => (
  <div className="group">
    <div className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-1">{label}</div>
    <p className="text-[12px] text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors">
      {desc}
    </p>
  </div>
);

export default Slide9;
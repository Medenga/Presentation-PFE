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
  RotateCw
} from 'lucide-react';

const Slide12 = () => {
  const textStyle = { fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={textStyle}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[40px_70px] overflow-hidden"
    >
      {/* TITLE BLOCK */}
      <div className="mb-5 border-l-4 border-[#FFE600] pl-6">
        <div className="text-[#FFE600] text-[12px] font-black tracking-[4px] uppercase mb-1">
          Roadmap & Méthodologie Opérationnelle
        </div>
        <h1 className="text-[34px] font-bold leading-tight uppercase tracking-tight">
          Approche Projet, <span className="text-white">Exécution</span> & <span className="text-[#FFE600]">Prise de Recul</span>
        </h1>
      </div>

      {/* BLOC 1: ROADMAP RESTAURÉE (GANTT STYLE) */}
      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-5">
        <div className="grid grid-cols-4 gap-3">
          <GanttPhase range="SEPT - OCT" name="Cadrage & Revue Littérature" />
          <GanttPhase range="OCT - NOV" name="Conception & Analyse Expérimentale" />
          <GanttPhase range="NOV - DÉC" name="Prototypage & ML" />
          <GanttPhase range="DÉC - FÉVRIER" name="Développement & Soutenance" active />
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="grid grid-cols-[410px_1fr] gap-6 mb-auto overflow-hidden">
        
        {/* COLONNE GAUCHE : ORGANISATION & RYTHME */}
        <div className="space-y-4">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
            <div className="flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest mb-4">
              <Users size={16} /> Organisation & Outils
            </div>
            <div className="space-y-3 mb-5">
              <MethodoItem text="Synergie : Cyber + Data/IA" />
              <MethodoItem text="Agilité : Rôles flexibles & entraide" />
              <MethodoItem text="Modèle : Hybride (Cascade + Agile)" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <ToolTag icon={<Github size={12} />} label="GITHUB" />
              <ToolTag icon={<Layout size={12} />} label="NOTION" />
              <ToolTag icon={<MessageSquare size={12} />} label="TEAMS" />
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
            <div className="bg-[#FFE600]/10 border border-[#FFE600]/20 rounded-lg p-3 flex items-center gap-4">
              <Calendar size={20} className="text-[#FFE600]" />
              <div className="text-[11px] font-bold text-white uppercase leading-tight">
                1 Point Encadrant / Partenaire par mois
              </div>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : LIMITES & RECUL (VALORISÉE) */}
        <div className="bg-red-500/[0.05] border border-red-500/20 rounded-xl p-7 relative flex flex-col justify-center">
          <div className="flex items-center gap-3 text-red-500 text-[13px] font-black uppercase tracking-[3px] mb-6">
            <ShieldAlert size={22} /> Limites & Prise de Recul
          </div>

          <div className="space-y-6">
            <LimitEntry 
              label="Données & Outils" 
              desc="Jeux de données simulés (confidentialité) et usage d'outils Open Source adaptés au cadre académique." 
            />
            <LimitEntry 
              label="Périmètre Technique" 
              desc="Prototype en environnement simulé (Sandbox). L'intégration en production réelle dépasse le cadre expérimental." 
            />
            <LimitEntry 
              label="Recul Méthodologique" 
              desc="Projet cohérent avec les ressources ; résultats interprétés dans un cadre expérimental contrôlé." 
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-8">
        <div className="pt-4 border-t border-white/20 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white/40">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black text-white">
            12 <span className="text-[#FFE600]">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* --- SUB-COMPONENTS --- */

const GanttPhase = ({ range, name, active }) => (
  <div className={`px-4 py-3 rounded-lg border flex flex-col justify-center min-h-[85px] transition-all ${
    active ? 'bg-[#FFE600] border-[#FFE600] shadow-md' : 'bg-white/5 border-white/10'
  }`}>
    <div className={`text-[9px] font-black uppercase mb-1 tracking-wider ${active ? 'text-black/60' : 'text-[#FFE600]'}`}>
      {range}
    </div>
    <div className={`text-[13px] font-bold uppercase leading-tight ${active ? 'text-black' : 'text-white/90'}`}>
      {name}
    </div>
  </div>
);

const MethodoItem = ({ text }) => (
  <div className="flex items-center gap-3 text-[13px]">
    <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
    <span className="text-white/80 font-bold uppercase tracking-tight leading-none">{text}</span>
  </div>
);

const ToolTag = ({ icon, label }) => (
  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[10px] font-bold text-white/50 uppercase">
    {icon} <span>{label}</span>
  </div>
);

const LimitEntry = ({ label, desc }) => (
  <div className="pl-5 border-l-2 border-red-500/30">
    <div className="text-red-500 text-[11px] font-black uppercase tracking-widest mb-1.5">
      {label}
    </div>
    <p className="text-[14px] text-white/70 leading-relaxed">
      {desc}
    </p>
  </div>
);

export default Slide12;
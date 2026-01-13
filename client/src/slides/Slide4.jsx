import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Store, 
  Microchip, 
  Cpu, 
  Globe, 
  Layers, 
  Mail, // Remplacé Envelope par Mail
  Brain, 
  FileText, 
  TriangleAlert 
} from 'lucide-react';

const Slide4 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center z-10 w-full mb-8">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md">
          <div className="flex items-center gap-2 font-extrabold text-[14px] tracking-widest uppercase text-white">
            <GraduationCap size={18} />
            <span>ECE PARIS</span>
          </div>
        </div>
        <div className="h-[50px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" 
            alt="EY" 
            className="h-[35px]" 
          />
        </div>
      </div>

      {/* TITLE BLOCK */}
      <div className="mb-12 border-l-4 border-[#FFE600] pl-6">
        <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">Architecture Technique</div>
        <h1 className="text-[40px] font-light uppercase text-white">
          Flux d'<span className="font-bold text-[#FFE600]">Analyse Prédictive</span>
        </h1>
      </div>

      {/* DIAGRAM CONTAINER */}
      <div className="flex justify-between items-stretch flex-grow gap-4 py-4">
        
        {/* STEP 1: SOURCE */}
        <StepBox title="Source" subtitle="Google Online Boutique" icon={<Store size={20} />}>
          <MetricRow label="CPU" value="45%" icon={<Cpu size={12}/>} color="text-green-400" />
          <MetricRow label="RAM" value="78%" icon={<Microchip size={12}/>} color="text-orange-400" />
          <MetricRow label="HTTP" value="200 OK" icon={<Globe size={12}/>} color="text-green-400" />
          <TechPill label="Microservices" />
        </StepBox>

        <FlowArrow label="Extraction" />

        {/* STEP 2: TRANSPORT */}
        <StepBox title="Transport" subtitle="Pipeline de Données" icon={<Layers size={20} className="text-red-500" />}>
          <div className="flex gap-2 mb-4 opacity-40 text-white">
            <Mail size={14} /><Mail size={14} /><Mail size={14} />
          </div>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            File d'attente asynchrone pour absorber les pics de charge.
          </p>
          <TechPill label="RabbitMQ" color="border-red-500 text-red-500" />
        </StepBox>

        <FlowArrow label="Streaming" />

        {/* STEP 3: ANALYSE */}
        <StepBox 
          title="Analyse" 
          subtitle="Moteur Prédictif" 
          icon={<Brain size={20} />} 
          borderColor="border-[#FFE600]/30"
        >
          <MetricRow label="Modèle" value="Séries Temp." />
          <MetricRow label="Statut" value="Calcul..." color="text-[#FFE600]" />
          <p className="text-[10px] text-gray-400 mt-1 italic">Détection de saturation</p>
          <TechPill label="Python / ML" />
        </StepBox>

        <FlowArrow label="Alerte" />

        {/* STEP 4: RESULTAT */}
        <StepBox title="Résultat" subtitle="Audit Final" icon={<FileText size={20} className="text-red-500" />}>
          <div className="flex justify-between items-center p-2 bg-red-500/10 border border-red-500/30 rounded mb-2">
            <span className="text-[10px] text-red-500 flex items-center gap-1 font-bold italic uppercase">
              <TriangleAlert size={10} /> Risque
            </span>
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Élevé</span>
          </div>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            Génération du rapport et recommandations.
          </p>
          <TechPill label="PDF Report" color="border-red-500 text-red-500" />
        </StepBox>

      </div>

      {/* FOOTER HUD */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center opacity-50">
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-white/60">Data Flow & System Architecture</div>
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#FFE600]">04 / 06</div>
      </div>
    </motion.div>
  );
};

/* --- COMPOSANTS INTERNES --- */

const StepBox = ({ title, subtitle, icon, children, borderColor = "border-white/10" }) => (
  <div className={`flex-1 bg-white/[0.03] border ${borderColor} p-5 rounded-xl flex flex-col backdrop-blur-sm relative min-w-0`}>
    <div className="mb-4 text-white/80">{icon}</div>
    <div className="text-[14px] font-extrabold uppercase tracking-tight text-white mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    <div className="text-[11px] text-[#FFE600] font-medium mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{subtitle}</div>
    {children}
  </div>
);

const MetricRow = ({ label, value, icon, color = "text-white" }) => (
  <div className="flex justify-between items-center text-[10px] mb-2 border-b border-white/5 pb-1">
    <span className="flex items-center gap-1.5 text-gray-400">
      {icon} {label}
    </span>
    <span className={`font-bold uppercase ${color}`}>{value}</span>
  </div>
);

const TechPill = ({ label, color = "border-white/20 text-gray-300" }) => (
  <div className="mt-auto pt-4">
    <span className={`text-[9px] font-black px-2 py-0.5 rounded border uppercase tracking-widest ${color}`}>
      {label}
    </span>
  </div>
);

const FlowArrow = ({ label }) => (
  <div className="flex flex-col justify-center items-center px-1">
    <span className="text-[8px] font-black uppercase text-[#FFE600] mb-2 tracking-widest rotate-[-90deg] translate-y-[-10px] whitespace-nowrap">
      {label}
    </span>
    <div className="h-[100px] w-px bg-gradient-to-b from-transparent via-[#FFE600]/40 to-transparent relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[5px] border-t-[#FFE600]/40 border-x-[4px] border-x-transparent" />
    </div>
  </div>
);

export default Slide4;
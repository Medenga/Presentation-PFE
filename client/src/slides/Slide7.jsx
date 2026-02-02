import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Store, 
  Microchip, 
  Cpu, 
  Globe, 
  Layers, 
  Mail,
  Brain, 
  FileText, 
  TriangleAlert 
} from 'lucide-react';

const Slide7 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[60px_80px] overflow-hidden font-sans"
    >
      {/* TITLE BLOCK */}
      <div className="mb-6 border-l-4 border-[#FFE600] pl-6">
        <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">Architecture Technique</div>
        <h1 className="text-[40px] font-bold text-white">
          Flux d'<span className="text-[#FFE600]">Analyse Prédictive</span>
        </h1>
      </div>

      {/* DIAGRAM CONTAINER - descendu avec mt-8 */}
      <div className="flex justify-between items-stretch gap-4 mt-8 pb-16 h-[390px]">
        
        {/* STEP 1: SOURCE */}
        <div className="w-[260px]">
          <StepBox title="Source" subtitle="Google Online Boutique" icon={<Store size={24} />}>
            <MetricRow label="CPU" value="45%" icon={<Cpu size={16}/>} color="text-green-400" />
            <MetricRow label="RAM" value="78%" icon={<Microchip size={16}/>} color="text-orange-400" />
            <MetricRow label="HTTP" value="200 OK" icon={<Globe size={16}/>} color="text-green-400" />
            <TechPill label="Microservices" />
          </StepBox>
        </div>

        <FlowArrow label="Extraction" />

        {/* STEP 2: TRANSPORT */}
        <div className="w-[260px]">
          <StepBox title="Transport" subtitle="Pipeline de Données" icon={<Layers size={24} className="text-red-500" />}>
            <div className="flex gap-2 mb-3 opacity-40 text-white">
              <Mail size={18} /><Mail size={18} /><Mail size={18} />
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              File d'attente asynchrone pour absorber les pics de charge.
            </p>
            <TechPill label="RabbitMQ" color="border-red-500 text-red-500" />
          </StepBox>
        </div>

        <FlowArrow label="Streaming" />

        {/* STEP 3: ANALYSE */}
        <div className="w-[260px]">
          <StepBox 
            title="Analyse" 
            subtitle="Moteur Prédictif" 
            icon={<Brain size={24} />} 
            borderColor="border-[#FFE600]/30"
          >
            <MetricRow label="Modèle" value="Séries Temp." />
            <MetricRow label="Statut" value="Calcul..." color="text-[#FFE600]" />
            <p className="text-[13px] text-gray-400 mt-1 italic">Détection de saturation</p>
            <TechPill label="Python / ML" />
          </StepBox>
        </div>

        <FlowArrow label="Alerte" />

        {/* STEP 4: RESULTAT */}
        <div className="w-[260px]">
          <StepBox title="Résultat" subtitle="Audit Final" icon={<FileText size={24} className="text-red-500" />}>
            <div className="flex justify-between items-center p-2 bg-red-500/10 border border-red-500/30 rounded mb-2">
              <span className="text-[13px] text-red-500 flex items-center gap-1.5 font-bold italic uppercase">
                <TriangleAlert size={15} /> Risque
              </span>
              <span className="text-[13px] font-bold text-white uppercase tracking-tighter">Élevé</span>
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              Génération du rapport et recommandations.
            </p>
            <TechPill label="PDF Report" color="border-red-500 text-red-500" />
          </StepBox>
        </div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
          <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
          <div className="text-white text-xs font-black">
            07 <span className="text-[#FFE600]">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* --- COMPOSANTS INTERNES --- */

const StepBox = ({ title, subtitle, icon, children, borderColor = "border-white/10" }) => (
  <div className={`h-full bg-white/[0.03] border ${borderColor} p-5 rounded-xl flex flex-col backdrop-blur-sm relative`}>
    <div className="mb-3 text-white/80">{icon}</div>
    <div className="text-[20px] font-extrabold uppercase tracking-tight text-white mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    <div className="text-[15px] text-[#FFE600] font-medium mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{subtitle}</div>
    {children}
  </div>
);

const MetricRow = ({ label, value, icon, color = "text-white" }) => (
  <div className="flex justify-between items-center text-[14px] mb-2 border-b border-white/5 pb-1.5">
    <span className="flex items-center gap-2 text-gray-400">
      {icon} {label}
    </span>
    <span className={`font-bold uppercase ${color}`}>{value}</span>
  </div>
);

const TechPill = ({ label, color = "border-white/20 text-gray-300" }) => (
  <div className="mt-auto pt-3">
    <span className={`text-[12px] font-black px-2.5 py-1 rounded border uppercase tracking-widest ${color}`}>
      {label}
    </span>
  </div>
);

const FlowArrow = ({ label }) => (
  <div className="flex flex-col justify-center items-center px-1">
    <span className="text-[10px] font-black uppercase text-[#FFE600] mb-2 tracking-widest rotate-[-90deg] translate-y-[-10px] whitespace-nowrap">
      {label}
    </span>
    <div className="h-[100px] w-px bg-gradient-to-b from-transparent via-[#FFE600]/40 to-transparent relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[5px] border-t-[#FFE600]/40 border-x-[4px] border-x-transparent" />
    </div>
  </div>
);

export default Slide7;
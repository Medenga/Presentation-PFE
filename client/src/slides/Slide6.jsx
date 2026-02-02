import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Server, 
  Database, 
  Brain, 
  Flag
} from 'lucide-react';

const Slide6 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[60px_80px] overflow-hidden font-sans"
    >
      {/* Header - removed logos */}

      {/* TITLE BLOCK */}
      <div className="mb-10 border-l-4 border-[#FFE600] pl-6">
        <div className="text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">Protocole Expérimental</div>
        <h1 className="text-[40px] font-bold">
          De la <span className="text-white">Simulation</span> à la <span className="text-[#FFE600]">Validation Prédictive</span>
        </h1>
      </div>

      {/* WORKFLOW CONTAINER */}
      <div className="grid grid-cols-4 gap-4 items-stretch justify-center max-w-[1120px] mx-auto mt-8">
        
        {/* STEP 01 */}
        <StepCard 
          number="01" 
          title="Génération" 
          icon={<Server size={20} strokeWidth={0.5} />}
          items={[
            { label: "SUT", val: "Google Online Boutique" },
            { label: "Charge", val: "Locust (50-300 users)" },
            { label: "Chaos", val: "Pumba (Latence, CPU)" }
          ]}
          hTitle="Scénario"
          hValue="Nominal vs Panne"
        />

        {/* STEP 02 */}
        <StepCard 
          number="02" 
          title="Acquisition" 
          icon={<Database size={20} strokeWidth={0.5} />}
          items={[
            { label: "Collecte", val: "Prometheus (Scrape 5s)" },
            { label: "Métriques", val: "Système + App" },
            { label: "Label", val: "0 (Sain) / 1 (Anomalie)" }
          ]}
          hTitle="Dataset"
          hValue="Maint. Prédictive"
        />

        {/* STEP 03 */}
        <StepCard 
          number="03" 
          title="Modélisation" 
          icon={<Brain size={20} strokeWidth={0.5}/>}
          items={[
            { label: "Preproc.", val: "Nettoyage & Norm." },
            { label: "Split", val: "70/15/15 (Train/Val/Test)" },
            { label: "Modèles", val: "RF / LSTM / AE" }
          ]}
          hTitle="Comparaison"
          hValue="3 Architectures"
        />

        {/* STEP 04 */}
        <StepCard 
          number="04" 
          title="Validation" 
          icon={<Flag size={20} strokeWidth={0.5} />}
          items={[
            { label: "Perf", val: "Score F1 > 0.8" },
            { label: "Ops", val: "Lead Time > 2 min" },
            { label: "Fiab.", val: "Minimiser Faux Pos." }
          ]}
          hTitle="Objectif"
          hValue="Preuve de Valeur"
        />

      </div>

      {/* FOOTER */}
      {/* FOOTER HUD - Version Fixe avec Absolute */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
          <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
          <div className="text-white text-xs font-black">
            06 <span className="text-ey-yellow">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* --- COMPOSANT INTERNE : CARTE D'ÉTAPE --- */

const StepCard = ({ number, title, icon, items, hTitle, hValue }) => (
  <div className="bg-white/[0.03] border border-white/10 p-6 rounded-[16px] flex flex-col backdrop-blur-sm relative group hover:border-[#FFE600]/30 transition-all">
    {/* Card Header */}
    <div className="flex justify-between items-center mb-6">
      <div className="w-10 h-10 bg-[#FFE600]/10 rounded-lg flex items-center justify-center text-[#FFE600]">
        {icon}
      </div>
      <span className="text-[24px] font-black text-white/10 group-hover:text-[#FFE600]/20 transition-colors">
        {number}
      </span>
    </div>

    <h3 className="text-[20px] font-bold uppercase tracking-tight mb-4 text-white">
      {title}
    </h3>

    {/* List Content */}
    <ul className="space-y-3 mb-6 flex-grow">
      {items.map((item, i) => (
        <li key={i} className="text-[13px] leading-tight">
          <strong className="text-[#FFE600] font-black uppercase tracking-tighter mr-1">{item.label} :</strong>
          <span className="text-gray-400">{item.val}</span>
        </li>
      ))}
    </ul>

    {/* Highlight Box */}
    <div className="mt-auto bg-white/[0.04] border border-white/5 p-3 rounded-xl text-center">
      <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">{hTitle}</div>
      <div className="text-[13px] font-bold text-[#FFE600] uppercase italic">{hValue}</div>
    </div>
  </div>
);

export default Slide6;
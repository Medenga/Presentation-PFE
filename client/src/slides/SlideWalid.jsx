import React from 'react';
import {
  Store,
  Database,
  LayoutDashboard,
  BrainCircuit,
  Bug,
  Eye,
  ArrowRight,
  Activity,
  Server,
  FileSpreadsheet,
  Bot,
  Sparkles
} from 'lucide-react';

// Composant Boîte : Hauteur ~260px, Textes Blancs
const CompactBox = ({ title, icon, subtitle, color, bgColor, borderColor, details }) => (
  <div className={`relative flex flex-col p-4 rounded-xl border ${borderColor} ${bgColor} backdrop-blur-md w-[150px] h-[260px] shadow-lg transition-transform hover:-translate-y-2 z-10`}>
    {/* Header */}
    <div className="flex flex-col items-center mb-4 text-center h-20 justify-center">
      <div className={`mb-3 p-3 rounded-full ${color.replace('text-', 'bg-')}/10`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className={`font-black text-[11px] uppercase leading-tight ${color}`}>{title}</h3>
      {subtitle && <span className="text-[9px] text-white font-bold mt-1">{subtitle}</span>}
    </div>

    {/* Divider */}
    <div className={`h-[1px] w-full ${color.replace('text-', 'bg-')}/20 mb-4`}></div>

    {/* Details (Textes blancs) */}
    <div className="flex flex-col gap-3 flex-1 justify-center">
      {details.map((d, i) => (
        <div key={i} className="bg-black/40 rounded px-2 py-1.5 border border-white/5 text-center shadow-sm">
          <span className="text-[10px] font-medium text-white block leading-tight">{d}</span>
        </div>
      ))}
    </div>
  </div>
);

// Flèche Statique Large
const SolidArrow = ({ label }) => (
  <div className="flex flex-col items-center justify-center w-[60px] mx-1 shrink-0">
    <span className="text-[9px] font-black uppercase mb-1.5 text-[#FFE600] tracking-widest whitespace-nowrap">
      {label}
    </span>
    <div className="relative w-full flex items-center">
      <div className="h-[4px] w-full bg-[#FFE600] rounded-l-sm shadow-[0_0_10px_rgba(255,230,0,0.2)]"></div>
      <ArrowRight size={24} className="text-[#FFE600] -ml-2.5" strokeWidth={4} />
    </div>
  </div>
);

const Slide6 = () => {
  return (
    <div className="w-[1280px] h-[720px] bg-[#1a1a1a] text-white flex flex-col px-8 py-10 font-sans overflow-hidden relative">

      {/* HEADER */}
      <div className="mb-12 flex justify-between items-end border-b border-white/10 pb-6 mx-4">
        <div>
          <div className="text-[#FFE600] text-[12px] font-bold tracking-[4px] uppercase mb-2">Pipeline End-to-End</div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Architecture <span className="text-[#FFE600]">Technique</span></h1>
        </div>
        {/* Badge retiré ici */}
      </div>

      {/* --- FLUX LINEAIRE --- */}
      <div className="flex-1 flex items-center justify-center relative px-0">

        {/* Ligne de fond */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -z-0"></div>

        {/* 1. SCÉNARIOS */}
        <CompactBox
          title="Nouveaux Scénarios"
          subtitle="CHARGE & CHAOS"
          icon={<Bug />}
          color="text-orange-400"
          bgColor="bg-orange-500/5"
          borderColor="border-orange-500/30"
          details={["Scripts Locust", "Scripts JS", "Injection Failles"]}
        />

        <SolidArrow label="Injection" />

        {/* 2. SYSTEME CIBLE (BOUTIQUE) */}
        <div className="relative z-20 hover:-translate-y-2 transition-transform duration-300 mx-1">
          <div className="absolute inset-0 bg-[#FFE600]/10 blur-2xl rounded-full"></div>
          <div className="bg-[#1a1a1a] border-2 border-[#FFE600] rounded-2xl p-5 w-[170px] h-[290px] flex flex-col shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFE600] text-black text-[10px] font-black px-3 py-0.5 rounded uppercase">Cible</div>
            <div className="flex flex-col items-center justify-center h-32 mb-4">
              <Store size={56} className="text-[#FFE600] mb-3 drop-shadow-lg" />
              <span className="text-[12px] font-black uppercase text-center leading-tight tracking-tight">Google Online<br />Boutique</span>
            </div>
            <div className="mt-auto grid grid-cols-1 gap-3 w-full">
              <div className="bg-white/10 p-2.5 rounded flex items-center justify-center gap-2">
                <Server size={16} className="text-white" />
                <span className="text-[12px] font-bold text-white">Microservices</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded flex items-center justify-center gap-2">
                <Activity size={16} className="text-white" />
                <span className="text-[12px] font-bold text-white">Docker</span>
              </div>
            </div>
          </div>
        </div>

        <SolidArrow label="Monitoring" />

        {/* 3. DATADOG */}
        <CompactBox
          title="Datadog"
          subtitle="RÉCUPÉRATIONS DONNÉES"
          icon={<Eye />}
          color="text-purple-400"
          bgColor="bg-purple-500/5"
          borderColor="border-purple-500/30"
          details={["Métriques Systèmes", "Requêtes HTTP", "Logs Applicatifs"]}
        />

        <SolidArrow label="Streaming" />

        {/* 4. MODELE IA */}
        <CompactBox
          title="Modèles Deep Learning"
          subtitle="ANALYSE PRÉDICTIVE"
          icon={<BrainCircuit />}
          color="text-[#FFE600]"
          bgColor="bg-[#FFE600]/10"
          borderColor="border-[#FFE600]"
          details={["GRU", "GRU + NLP", "LSTM"]}
        />

        <SolidArrow label="Résultats" />

        {/* 5. DATABASE */}
        <CompactBox
          title="MongoDB"
          subtitle="STOCKAGE"
          icon={<Database />}
          color="text-green-400"
          bgColor="bg-green-500/5"
          borderColor="border-green-500/30"
          details={["Cluster MongoDB", "Historique Audit"]}
        />

        <SolidArrow label="Rendu" />

        {/* 6. DASHBOARD */}
        <div className="w-[150px] h-[260px] bg-black/40 border border-blue-500/30 rounded-xl overflow-hidden flex flex-col shadow-lg z-10 hover:-translate-y-2 transition-transform">

          {/* Header */}
          <div className="bg-blue-500/10 px-4 py-3 border-b border-blue-500/20 flex justify-between items-center h-[50px] shrink-0">
            <span className="text-[10px] font-bold text-blue-400 uppercase">DASHBOARD FINAL</span>
            <LayoutDashboard size={16} className="text-blue-400" />
          </div>

          {/* Body */}
          <div className="p-3 flex flex-col gap-4 flex-1 justify-center w-full">

            {/* INFO 1 : Sauvegarde CSV */}
            <div className="bg-white/5 p-2.5 rounded-lg border border-white/5 flex items-center gap-3 w-full group">
              <div className="bg-green-500/20 p-2 rounded-lg shrink-0 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <FileSpreadsheet size={18} className="text-green-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[8px] text-white uppercase font-bold">Sauvegarde</span>
                <span className="text-[10px] font-bold text-white leading-tight">Fichier CSV</span>
              </div>
            </div>

            {/* Lien visuel */}
            <div className="flex justify-center -my-2 shrink-0">
              <div className="h-4 w-[1px] bg-blue-500/30"></div>
            </div>

            {/* INFO 2 : Analyse LLM */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-2.5 rounded-lg border border-blue-500/30 flex items-center gap-3 relative w-full group">
              <div className="bg-blue-500/20 p-2 rounded-lg relative shrink-0 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Bot size={18} className="text-blue-300" />
                <Sparkles size={10} className="text-yellow-300 absolute -top-1.5 -right-1.5" />
              </div>
              <div className="flex flex-col min-w-0 z-10">
                <span className="text-[8px] text-white uppercase font-bold">Interprétation</span>
                <span className="text-[10px] font-bold text-white leading-tight">Analyse LLM</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            06 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>

    </div>
  );
};

export default Slide6;
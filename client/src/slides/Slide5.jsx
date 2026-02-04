import React from 'react';
import { motion } from 'framer-motion';
import { 
  CloudLightning, 
  ServerCrash, 
  Users, 
  Eye, 
  Activity, 
  FileText, 
  BrainCircuit, 
  Target
} from 'lucide-react';

/**
 * ArchBox
 * Composant UI réutilisable représentant un nœud de l'architecture.
 * Utilise un style "Glassmorphism" (backdrop-blur) pour la modernité.
 * @param {string} width - Largeur adaptable selon le contenu (défaut w-44).
 */
const ArchBox = ({ title, icon, details, color, bgColor, borderColor, width = "w-44" }) => (
  <div className={`flex flex-col items-center p-3 rounded-xl border ${borderColor} ${bgColor} backdrop-blur-md ${width} shadow-lg z-10`}>
    {/* Icône avec fond teinté dynamique */}
    <div className={`p-1.5 rounded-full mb-2 ${color.replace('text-', 'bg-')}/10`}>
      {icon}
    </div>
    <h3 className={`font-bold text-[11px] uppercase mb-1.5 ${color} tracking-wider`}>{title}</h3>
    {/* Liste des spécificités techniques du nœud */}
    <ul className="space-y-1 w-full">
      {details.map((d, i) => (
        <li key={i} className="text-[11px] text-white bg-white/5 px-1.5 py-0.5 rounded text-center truncate w-full border border-white/5">
          {d}
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Line
 * Connecteur visuel simulant le flux de données.
 * Intègre une animation Framer Motion (particule) pour dynamiser le schéma.
 */
const Line = ({ width = "w-8", color = "bg-white/10" }) => (
  <div className={`h-[2px] ${width} ${color} flex items-center justify-center relative`}>
      {/* Animation continue : déplacement de gauche à droite avec fondu */}
      <motion.div 
        animate={{ x: [-10, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className={`w-1.5 h-1.5 rounded-full ${color.replace('bg-', 'bg-').replace('/10', '')} shadow-[0_0_5px_currentColor]`}
      />
  </div>
);

const Slide5 = () => {
  return (
    // Conteneur principal figé en 1280x720 pour garantir le rendu sur vidéoprojecteur
    <div className="w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-12 py-10 font-sans overflow-hidden relative">
      
      {/* --- HEADER --- */}
      <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-4">
        <div>
            <div className="text-[#FFE600] text-[10px] font-bold tracking-[4px] uppercase mb-1">Solution proposée</div>
            <h1 className="text-3xl font-bold">Protocole <span className="text-[#FFE600]">Expérimental</span></h1>
        </div>
        <div className="text-right opacity-0 text-xs font-mono">
            Placeholder
        </div>
      </div>

      {/* --- MAIN LAYOUT (GRID SYSTEM) --- */}
      {/* Division de l'espace en 12 colonnes pour un alignement précis des étapes */}
      <div className="flex-1 grid grid-cols-12 gap-2 items-center relative pb-10">
        
        {/* ZONE 1 : ENVIRONNEMENT (INPUT) */}
        {/* Simulation de l'infrastructure e-commerce et de l'injection de chaos */}
        <div className="col-span-2 flex flex-col gap-4 items-center border-r border-white/5 pr-4 h-full justify-center">
            <span className="text-white text-xs uppercase font-bold mb-4 tracking-widest">Environnement</span>
            <ArchBox 
              title="Google Boutique" 
              icon={<CloudLightning size={16} className="text-red-400"/>}
              details={["Site E-commerce", "Microservices"]}
              color="text-red-400" bgColor="bg-red-500/5" borderColor="border-red-500/30"
            />
            <div className="flex gap-2">
                <div className="p-2 bg-red-900/10 border border-red-500/20 rounded flex flex-col items-center w-20">
                    <Users size={12} className="text-orange-400 mb-1"/>
                    <span className="text-[9px] text-orange-400">Charge:Clients</span>
                </div>
                <div className="p-2 bg-red-900/10 border border-red-500/20 rounded flex flex-col items-center w-20">
                    <ServerCrash size={12} className="text-red-400 mb-1"/>
                    <span className="text-[9px] text-red-400">Chaos:Incidents</span>
                </div>
            </div>
        </div>

        {/* ZONE 2 : ACQUISITION */}
        {/* Collecte centralisée via l'agent Datadog */}
        <div className="col-span-2 flex flex-col items-center justify-center relative">
             <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
                <Line width="w-12" color="bg-gray-400" />
             </div>
             
             <div className="absolute bg-pres-grey p-2">
                <ArchBox 
                    title="Observabilité" 
                    icon={<Eye size={18} className="text-purple-400"/>}
                    details={["Agent Datadog", "Collecte des données"]}
                    color="text-purple-400" bgColor="bg-purple-500/5" borderColor="border-purple-500/30" width="w-36"
                />
             </div>
        </div>

        {/* ZONE 3 : TRAITEMENT & MODÉLISATION (LE CŒUR) */}
        {/* Architecture complexe avec séparation des flux (Metrics vs Logs) puis fusion */}
        <div className="col-span-5 relative h-full">
            
            {/* Branche Haute : Pipeline Métriques (Séries temporelles) */}
            <div className="absolute top-[15%] left-8 right-0 flex items-center">
                <div className="h-[2px] w-8 bg-blue-500/30 -ml-8 rotate-[-25deg] origin-right"></div>
                <Line width="w-12" color="bg-blue-500/50" />
                <ArchBox 
                    title="Preprocessing Métriques" 
                    icon={<Activity size={18} className="text-blue-400"/>}
                    details={["Mise à l'échelle (Outliers)", "Fenêtre temporelle 10 min", "Analyse de Tendances"]}
                    color="text-blue-400" bgColor="bg-blue-500/5" borderColor="border-blue-500/30" width="w-48"
                />
                <Line width="w-16" color="bg-blue-500/50" />
            </div>

            {/* Branche Basse : Pipeline Logs (NLP / TF-IDF) */}
            <div className="absolute bottom-[15%] left-8 right-0 flex items-center">
                <div className="h-[2px] w-8 bg-yellow-500/30 -ml-8 rotate-[25deg] origin-right"></div>
                <Line width="w-12" color="bg-yellow-500/50" />
                <ArchBox 
                    title="Preprocessing Logs" 
                    icon={<FileText size={18} className="text-yellow-400"/>}
                    details={["Nettoyage du Texte", "TF-IDF : Encodage Numérique", "Sélection des Features"]}
                    color="text-yellow-400" bgColor="bg-yellow-500/5" borderColor="border-yellow-500/30" width="w-48"
                />
                <Line width="w-16" color="bg-yellow-500/50" />
            </div>

            {/* Point de convergence : Benchmark des modèles */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
                <ArchBox 
                    title="BENCHMARK MODELES" 
                    icon={<BrainCircuit size={24} className="text-[#FFE600]"/>}
                    details={["LSTM", "GRU", "Hybride (GRU + NLP)"]}
                    color="text-[#FFE600]" bgColor="bg-[#FFE600]/10" borderColor="border-[#FFE600]" width="w-40"
                />
            </div>

            {/* Lexique technique en bas de zone pour expliciter les acronymes */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
                <div className="flex gap-4 px-5 py-2.5 bg-black/40 rounded-full border border-white/10 backdrop-blur-sm shadow-xl w-max whitespace-nowrap">
                    <div className="text-[11px] text-white flex items-center gap-1">
                        <span className="text-[#FFE600] font-bold">TF-IDF:</span> Term Frequency-Inverse Document Frequency
                    </div>
                    <div className="text-[11px] text-white flex items-center gap-1">
                        <span className="text-[#FFE600] font-bold">LSTM:</span> Long Short-Term Memory
                    </div>
                    <div className="text-[11px] text-white flex items-center gap-1">
                        <span className="text-[#FFE600] font-bold">GRU:</span> Gated Recurrent Unit
                    </div>
                    <div className="text-[11px] text-white flex items-center gap-1">
                        <span className="text-[#FFE600] font-bold">NLP:</span> Natural Language Processing
                    </div>
                </div>
            </div>
            
        </div>

        {/* ZONE 4 : RÉSULTATS (OUTPUT) */}
        {/* Métriques clés de performance (F1-Score et Lead Time) */}
        <div className="col-span-3 flex items-center justify-end pl-4 relative">
             <Line width="w-16" color="bg-green-500/50" />
             <div className="bg-green-500/5 border border-green-500/30 p-4 rounded-xl flex flex-col gap-3 w-52">
                <div className="flex items-center gap-2 mb-2 border-b border-green-500/20 pb-2">
                    <Target size={18} className="text-green-400" />
                    <span className="text-green-400 font-bold text-xs uppercase">Performance</span>
                </div>
                
                {/* KPI 1 : Fiabilité */}
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white uppercase font-bold">Qualité de l'Alerte (F1-score)</span>
                    <span className="text-xl font-bold text-white">66%</span>
                </div>
                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-full w-[66%]"></div>
                </div>

                {/* KPI 2 : Anticipation */}
                <div className="flex justify-between items-center mt-1 pt-2 border-t border-white/5">
                    <div className="flex flex-col leading-tight">
                        <span className="text-[10px] text-white uppercase font-bold">Gain de Temps</span>
                        <span className="text-[10px] text-white uppercase font-bold">(Lead Time)</span>
                    </div>
                    <span className="text-xl font-bold text-white">11<span className="text-xs font-normal text-white">min</span></span>
                </div>
             </div>
        </div>

      </div>

      {/* --- FOOTER --- */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            05 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>

    </div>
  );
};

export default Slide5;
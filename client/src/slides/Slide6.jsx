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

// Composant Box optimisé
const ArchBox = ({ title, icon, details, color, bgColor, borderColor, width = "w-44" }) => (
  <div className={`flex flex-col items-center p-3 rounded-xl border ${borderColor} ${bgColor} backdrop-blur-md ${width} shadow-lg z-10`}>
    <div className={`p-1.5 rounded-full mb-2 ${color.replace('text-', 'bg-')}/10`}>
      {icon}
    </div>
    <h3 className={`font-bold text-[11px] uppercase mb-1.5 ${color} tracking-wider`}>{title}</h3>
    <ul className="space-y-1 w-full">
      {details.map((d, i) => (
        <li key={i} className="text-[10px] text-gray-300 bg-black/30 px-1.5 py-0.5 rounded text-center truncate w-full">
          {d}
        </li>
      ))}
    </ul>
  </div>
);

// Connecteur simple et droit
const Line = ({ width = "w-8", color = "bg-white/10" }) => (
  <div className={`h-[2px] ${width} ${color} flex items-center justify-center relative`}>
      {/* Animation de particule */}
      <motion.div 
        animate={{ x: [-10, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className={`w-1.5 h-1.5 rounded-full ${color.replace('bg-', 'bg-').replace('/10', '')} shadow-[0_0_5px_currentColor]`}
      />
  </div>
);

const Slide6 = () => {
  return (
    <div className="w-[1280px] h-[720px] bg-[#1a1a1a] text-white flex flex-col px-12 py-10 font-sans overflow-hidden relative">
      
      {/* HEADER */}
      <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-4">
        <div>
            <div className="text-[#FFE600] text-[10px] font-bold tracking-[4px] uppercase mb-1">Solution proposée</div>
            <h1 className="text-3xl font-bold">Protocole <span className="text-[#FFE600]">Expérimental</span></h1>
        </div>
        {/* Suppression du texte demandée : la div est vide ou retirée */}
        <div className="text-right opacity-0 text-xs font-mono">
            Placeholder
        </div>
      </div>

      {/* --- GRID CONTAINER (Pour un alignement parfait) --- */}
      <div className="flex-1 grid grid-cols-12 gap-2 items-center relative pb-10">
        
        {/* --- COLONNE 1 : INPUT (Gauche) --- */}
        <div className="col-span-2 flex flex-col gap-4 items-center border-r border-white/5 pr-4 h-full justify-center">
            <span className="text-gray-500 text-[10px] uppercase font-bold mb-4 tracking-widest">Environnement</span>
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

        {/* --- COLONNE 2 : ACQUISITION --- */}
        <div className="col-span-2 flex flex-col items-center justify-center relative">
             <Line width="w-full" color="bg-gray-600" />
             <div className="absolute bg-[#1a1a1a] p-2">
                <ArchBox 
                    title="Observabilité" 
                    icon={<Eye size={18} className="text-purple-400"/>}
                    details={["Agent Datadog", "Collecte des données"]}
                    color="text-purple-400" bgColor="bg-purple-500/5" borderColor="border-purple-500/30" width="w-36"
                />
             </div>
        </div>

        {/* --- COLONNE 3 : LE SPLIT (Traitement) --- */}
        <div className="col-span-5 relative h-full">
            {/* Ligne de séparation visuelle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gray-700"></div>
            
            {/* BRANCHE HAUTE (MÉTRIQUES) */}
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

            {/* BRANCHE BASSE (LOGS) */}
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

            {/* LE COEUR (FUSION) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
                <ArchBox 
                    title="FUSION HYBRIDE (GRU + NLP)" 
                    icon={<BrainCircuit size={24} className="text-[#FFE600]"/>}
                    details={["Fusion Multimodale", "Mémoire à Long Terme", "Robustesse (Dropout)"]}
                    color="text-[#FFE600]" bgColor="bg-[#FFE600]/10" borderColor="border-[#FFE600]" width="w-40"
                />
            </div>

            {/* Lignes de convergence vers le coeur */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full z-0">
                <path d="M 280 120 C 350 120, 350 220, 420 280" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <path d="M 280 440 C 350 440, 350 340, 420 280" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            </svg>
        </div>

        {/* --- COLONNE 4 : OUTPUT (Droite) --- */}
        <div className="col-span-3 flex items-center justify-end pl-4 relative">
             <Line width="w-16" color="bg-green-500/50" />
             <div className="bg-green-500/5 border border-green-500/30 p-4 rounded-xl flex flex-col gap-3 w-52">
                <div className="flex items-center gap-2 mb-2 border-b border-green-500/20 pb-2">
                    <Target size={18} className="text-green-400" />
                    {/* Titre qui claque */}
                    <span className="text-green-400 font-bold text-xs uppercase">Performance</span>
                </div>
                
                {/* Métrique 1 : La Fiabilité */}
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Qualité de l'Alerte (F1-score)</span>
                    <span className="text-xl font-bold text-white">72%</span>
                </div>
                {/* Barre de progression visuelle */}
                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-full w-[66%]"></div>
                </div>

                {/* Métrique 2 : L'Anticipation */}
                <div className="flex justify-between items-center mt-1 pt-2 border-t border-white/5">
                    {/* On empile les deux textes avec exactement le même style */}
                    <div className="flex flex-col leading-tight">
                        <span className="text-[10px] text-gray-400 uppercase font-bold">Gain de Temps</span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold">(Lead Time)</span>
                    </div>
                    
                    <span className="text-xl font-bold text-white">11<span className="text-xs font-normal text-gray-400">min</span></span>
                </div>
             </div>
        </div>

      </div>

      {/* FOOTER OFFICIEL */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
        <div className="pt-4 border-t border-white/20 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
          <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
          <div className="text-white text-xs font-black">
            06 <span className="text-[#FFE600]">/</span> 10
          </div>
        </div>
      </div>

    </div>
  );
};

export default Slide6;
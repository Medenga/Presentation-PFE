import React from 'react';
import { Shield, Activity, Server, Database, Layers, Clock, Globe, Cpu } from 'lucide-react';

const Slide6 = () => {
  const metricsInfra = [
    "Usage CPU", "Limitation CPU", "RAM RSS", "Lecture Disque", "Écriture Disque", "Réseau Envoyé", "Réseau Reçu"
  ];
  
  const metricsService = [
    "Temps de Réponse Moyen", "Taux de Succès", "Débit", "Taux de Réponse"
  ];

  const scenarios = [
    { id: "A", title: "Saturation Workers", desc: "Stress CPU / Calcul intensif sur microservices", icon: <Server size={28}/>, color: "text-blue-400", border: "border-blue-500/30" },
    { id: "B", title: "Érosion Database", desc: "Sabotage Postgres & Churn massif de données", icon: <Database size={28}/>, color: "text-purple-400", border: "border-purple-500/30" },
    { id: "C", title: "Engorgement Celery", desc: "Saturation critique des files de tâches", icon: <Layers size={28}/>, color: "text-orange-400", border: "border-orange-500/30" },
    { id: "D", title: "Slow-Burn (RAM)", desc: "Fuite mémoire progressive (Injection continue)", icon: <Clock size={28}/>, color: "text-red-400", border: "border-red-500/30" }
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-12 py-8 font-sans overflow-hidden relative">
      
      {/* HEADER */}
      <div className="mb-5 flex justify-between items-end border-b border-white/10 pb-3">
        <div>
          <div className="font-urbanist text-[#FFE600] text-sm font-bold tracking-[4px] uppercase mb-2">Analyse des dégradations</div>
          <h1 className="text-5xl font-bold">Scénarios <span className="text-[#FFE600]">&</span> Gestion des risques</h1>
        </div>
        <Shield size={40} className="text-[#FFE600] opacity-50" />
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6 items-start relative pb-20">
        
        {/* COLONNE GAUCHE : METRIQUES */}
        <div className="col-span-4 flex flex-col gap-2 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md shadow-xl">
          <div className="font-urbanist flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
            <Activity size={20} className="text-[#FFE600]" />
            <span className="text-sm text-[#FFE600] uppercase font-bold tracking-widest">Dataset : Métriques étudiées</span>
          </div>
          
          <div className="grid grid-cols-1 gap-0.5">
            <div className="font-urbanist flex items-center gap-2 mb-1">
              <Cpu size={16} className="text-blue-400" />
              <p className="text-sm text-blue-400 uppercase font-bold">Infrastructure</p>
            </div>
            {metricsInfra.map((m, i) => (
              <div key={i} className="text-sm text-gray-300 bg-blue-500/5 px-3 py-1 rounded border border-blue-500/10 font-sans">
                <span className="font-medium">{m}</span>
              </div>
            ))}
            
            <div className="font-urbanist flex items-center gap-2 mt-2 mb-1">
              <Globe size={16} className="text-[#FFE600]" />
              <p className="text-sm text-[#FFE600] uppercase font-bold">Service</p>
            </div>
            {metricsService.map((m, i) => (
              <div key={i} className="text-sm text-white bg-[#FFE600]/5 px-3 py-1 rounded border border-[#FFE600]/20 font-sans">
                <span className="font-bold">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE : SCÉNARIOS */}
        <div className="col-span-8 grid grid-cols-2 gap-4">
          {scenarios.map((s) => (
            <div key={s.id} className={`flex flex-col p-6 rounded-xl border ${s.border} bg-white/5 backdrop-blur-md transition-all hover:bg-white/10`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-full ${s.color.replace('text', 'bg')}/10 ${s.color}`}>
                  {s.icon}
                </div>
                {/* Badge ID Scénario plus discret */}
                <div className={`font-urbanist px-3 py-1 rounded-lg font-black text-lg uppercase ${s.color} bg-white/5 border border-white/10`}>
                  {s.id}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight font-sans">{s.title}</h4>
              {/* DESCRIPTION EN BLANC */}
              <p className="text-sm text-white leading-relaxed italic font-medium opacity-80 font-sans">
                {s.desc}
              </p>
            </div>
          ))}
          
          {/* BOX OBJECTIF */}
          <div className="col-span-2 mt-2 bg-[#FFE600]/5 border border-[#FFE600]/30 p-5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-[#FFE600] rounded-full text-black shadow-[0_0_15px_rgba(255,230,0,0.2)]">
                 <Shield size={24}/>
               </div>
               <div>
                 <p className="font-urbanist text-sm text-[#FFE600] font-bold uppercase tracking-widest leading-none mb-1.5">Objectif Expérimental</p>
                 <p className="text-base text-gray-200 font-medium font-sans">Validation du modèle sur dérives comportementales multi-vectorielles.</p>
               </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="font-urbanist pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            06 <span className="text-ey-yellow">/</span> 14
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
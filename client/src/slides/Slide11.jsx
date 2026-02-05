import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, 
  SearchCode, 
  BrainCircuit, 
  ShieldCheck,
  Cpu,
  Fingerprint,
  Activity,
  ArrowRightLeft,
  Trophy,
  MessageSquareText,
  Clock
} from 'lucide-react';

const Slide11 = ({ auditMetadata }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[50px_70px] overflow-hidden font-sans"
    >
      {/* TITRE PRINCIPAL */}
      <div className="mb-8 border-l-4 border-[#FFE600] pl-6">
        <div className="font-urbanist text-[#FFE600] text-[13px] font-bold tracking-[4px] uppercase mb-1">
          Innovation & Intelligence Artificielle
        </div>
        <h1 className="text-[40px] font-bold leading-tight uppercase tracking-tight">
          Notre Valeur Ajoutée
        </h1>
      </div>

      {/* COMPARAISON DES APPROCHES */}
      <div className="font-urbanist grid grid-cols-2 gap-4 mb-8 uppercase font-black text-[11px] tracking-widest text-center">
        <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-white/40 italic">
          Méthodes Classiques : Alertes fixes et calculs rigides
        </div>
        <div className="bg-[#FFE600] border border-[#FFE600] p-4 rounded-lg text-black shadow-[0_0_20px_rgba(255,230,0,0.15)]">
          Notre IA : Apprentissage continu et analyse prédictive
        </div>
      </div>

      {/* ARCHITECTURE DE L'ANALYSE */}
      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-8">
        <div className="font-urbanist flex items-center gap-2 text-[#FFE600] text-[12px] font-black uppercase tracking-widest mb-5">
          <Cpu size={17} /> Les 3 piliers de notre intelligence artificielle
        </div>
        <div className="grid grid-cols-3 gap-6">
          <TechPhase 
            icon={<Clock size={22} />} 
            title="Analyse du Temps" 
            desc="Repère les anomalies dans l'enchaînement des événements" 
          />
          <TechPhase 
            icon={<MessageSquareText size={22} />} 
            title="Lecture de Texte" 
            desc="Comprend le sens caché des messages d'erreur" 
          />
          <TechPhase 
            icon={<Layers size={22} />} 
            title="Lien de Cause à Effet" 
            desc="Relie les données entre elles pour un diagnostic précis" 
            active 
          />
        </div>
      </div>

      {/* SECTION : CONFIANCE & RÉSULTATS */}
      <div className="grid grid-cols-2 gap-6 mb-auto">
        {/* BLOC EXPLICABILITÉ */}
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="font-urbanist flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest mb-4">
              <Fingerprint size={18} /> Une IA transparente (Pas de "Boîte Noire")
            </div>
            <p className="text-[16px] text-white/80 leading-relaxed italic font-sans">
              "Chaque alerte est expliquée de manière simple : nous montrons précisément quel facteur ou quel événement a déclenché l'anomalie pour garantir une confiance totale."
            </p>
          </div>
        </div>

        {/* BLOC ACCOMPAGNEMENT MÉTIER */}
        <div className="bg-[#FFE600]/5 border border-[#FFE600]/20 rounded-xl p-6 flex flex-col justify-between min-h-[180px]">
          <div>
            <div className="font-urbanist flex items-center gap-2 text-[#FFE600] text-[11px] font-black uppercase tracking-widest mb-4 font-mono">
              <ShieldCheck size={18} /> Gain de temps opérationnel
            </div>
            <p className="text-[16px] text-white/80 leading-relaxed font-medium font-sans">
              Nous ne nous contentons pas de détecter. Nous générons un **Rapport Intelligent** qui propose des **solutions immédiates** pour réparer les pannes plus rapidement.
            </p>
          </div>
          <div className="font-urbanist flex items-center gap-2 text-[10px] font-black text-[#FFE600] uppercase pt-4 border-t border-[#FFE600]/10 mt-auto">
            <Trophy size={14} /> Accélération drastique des interventions
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="font-urbanist pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black text-white">
            11 <span className="text-[#FFE600]">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechPhase = ({ icon, title, desc, active }) => (
  <div className={`p-5 rounded-lg border flex gap-4 items-center transition-all ${
    active ? 'bg-[#FFE600] border-[#FFE600]' : 'bg-white/5 border-white/10'
  }`}>
    <div className={`${active ? 'text-black' : 'text-[#FFE600]'}`}>
      {icon}
    </div>
    <div>
      <div className={`font-urbanist text-[14px] font-bold uppercase tracking-tight ${active ? 'text-black' : 'text-white'}`}>
        {title}
      </div>
      <div className={`font-sans text-[10px] font-black uppercase opacity-70 ${active ? 'text-black' : 'text-black/60'}`}>
        {desc}
      </div>
    </div>
  </div>
);

export default Slide11;
import React from 'react';
import {
  TrendingUp,
  BrainCircuit,
  GitMerge,
  Zap,
  Calculator,
  Binary,
  MessageSquareCode,
  Layers,
  Timer,
  LineChart,
  History
} from 'lucide-react';

// Card Structure : Polices augmentées
const Card = ({ title, subtitle, icon, color, borderColor, children, isFocus = false }) => (
  <div className={`relative h-full flex flex-col p-6 rounded-xl border ${borderColor} bg-[#1a1a1a] backdrop-blur-md shadow-xl overflow-hidden ${isFocus ? 'ring-1 ring-[#FFE600]/30 bg-[#FFE600]/5' : ''}`}>

    {/* Header */}
    <div className="flex items-center gap-4 mb-5 shrink-0 border-b border-white/10 pb-4">
      <div className={`p-3 rounded-lg ${color.replace('text-', 'bg-')}/10`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div>
        <h3 className={`font-black text-[16px] uppercase leading-none ${color}`}>{title}</h3>
        <p className="text-[15px] text-white font-bold mt-2">{subtitle}</p>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col gap-4">
      {children}
    </div>
  </div>
);

const Slide7 = () => {
  return (
    <div className="w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-10 py-8 font-sans overflow-hidden relative">

      {/* HEADER */}
      <div className="flex justify-between items-end border-b border-white/10 pb-5 mx-2 shrink-0 h-[80px] mb-8">
        <div>
          <div className="text-[#FFE600] text-[10px] font-bold tracking-[4px] uppercase mb-1"></div>
          <h1 className="text-3xl font-bold">Comparatif des <span className="text-[#FFE600]">Modèles IA</span></h1>
        </div>
        <div className="flex gap-2">
          {/* Espace vide */}
        </div>
      </div>

      {/* --- GRID CONTENT --- */}
      <div className="grid grid-cols-3 gap-6 px-2 h-[500px] items-start">

        {/* COL 1: BASELINE (Modèles Statistiques) */}
        <div className="opacity-90 h-full flex flex-col">

          <Card
            title="Baseline"
            subtitle="Modèles Statistiques"
            icon={<LineChart />}
            color="text-orange-400"
            borderColor="border-orange-500/30"
          >
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator size={16} className="text-orange-400" />
                  <span className="text-[15px] font-bold text-white">Méthodes de Calcul</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex flex-col gap-1">
                    <span className="text-[15px] font-bold text-orange-400 flex items-center gap-2">
                      1. Sampling Forecaster
                    </span>
                    <p className="text-[14px] text-white leading-snug pl-4 border-l border-orange-400/30">
                      Agrège des <b>échantillons historiques</b> (ex: même heure hier) pour définir une plage de valeurs probables.
                    </p>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-[15px] font-bold text-orange-400 flex items-center gap-2">
                      2. Extrapolation
                    </span>
                    <p className="text-[14px] text-white leading-snug pl-4 border-l border-orange-400/30">
                      Projette la tendance immédiate vers le futur ($y = ax + b$).
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-black/20 p-4 rounded-lg border border-white/5 mt-auto">
                <span className="text-[14px] text-white uppercase font-bold block mb-1">Limite Principale</span>
                <p className="text-[14px] text-white leading-snug">
                  Ces modèles supposent une répétition stricte. <b>Incapables d'anticiper</b> les anomalies complexes ou non-linéaires.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* COL 2: DEEP LEARNING (SÉPARÉ) */}
        <div className="h-full flex flex-col">

          <Card
            title="Modèles Deep Learning"
            subtitle="Mémoire Séquentielle"
            icon={<BrainCircuit />}
            color="text-blue-400"
            borderColor="border-blue-500/30"
          >
            <div className="flex-1 flex flex-col gap-4">

              {/* BLOC LSTM */}
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 flex-1 flex flex-col justify-center relative overflow-hidden">

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[15px] font-black text-white">LSTM</span>
                </div>
                <p className="text-[14px] text-white leading-snug relative z-10">
                  Architecture complexe (3 portes). Idéale pour capturer des <b>dépendances longues</b> dans l'historique des métriques.
                </p>
              </div>

              {/* BLOC GRU */}
              <div className="bg-indigo-500/10 p-4 rounded-lg border border-indigo-500/20 flex-1 flex flex-col justify-center relative overflow-hidden">

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[15px] font-black text-white">Gated Reccurent Unit (GRU)</span>
                </div>
                <p className="text-[14px] text-white leading-snug relative z-10">
                  Version optimisée (2 portes). Plus légère et rapide à entraîner, parfaite pour l'inférence en <b>temps réel</b> sur nos flux de données.
                </p>
              </div>

            </div>
          </Card>
        </div>
        {/* COL 3: HYBRIDE (NLP) */}

        <div className="h-full flex flex-col z-10">



          <Card

            title="Hybride GRU + Natural Language Processing (NLP)"

            subtitle="Fusion Multimodale"

            icon={<GitMerge />}

            color="text-[#FFE600]"

            borderColor="border-[#FFE600]"

            isFocus={true}

          >

            <div className="flex-1 flex flex-col gap-3">



              {/* Explication NLP */}

              <div className="bg-black/40 p-4 rounded-lg border border-[#FFE600]/20">

                <div className="flex items-center gap-2 mb-3">

                  <MessageSquareCode size={16} className="text-[#FFE600]" />

                  <span className="text-[15px] font-bold text-white uppercase">Traitement NLP des Logs</span>

                </div>

                <ul className="space-y-3">

                  <li className="flex gap-3 text-[14px] text-white">

                    <span className="text-[#FFE600] font-bold text-[14px]">1.</span>

                    <span><b>Tokenisation :</b> Nettoyage des logs (suppression dates/IPs) pour garder le sens sémantique.</span>

                  </li>

                  <li className="flex gap-3 text-[14px] text-white">

                    <span className="text-[#FFE600] font-bold text-[14px]">2.</span>

                    <span><b>Embedding :</b> Transformation du texte en vecteur numérique dense.</span>

                  </li>

                </ul>

              </div>



              {/* Explication Fusion */}

              <div className="bg-black/40 p-4 rounded-lg border border-white/10 mt-1">

                <div className="flex items-center gap-2 mb-2">

                  <Binary size={16} className="text-blue-400" />

                  <span className="text-[15px] font-bold text-white uppercase">Fusion & Impact</span>

                </div>

                <p className="text-[14px] text-white leading-snug mb-3">

                  Le vecteur de logs est <b>concaténé</b> avec les métriques numériques avant d'entrer dans le GRU.

                </p>



              </div>



            </div>

          </Card>

        </div>



      </div>
      <div className="absolute bottom-0 left-0 w-full px-20 pb-8">
        <div className="pt-4 border-t border-white/15 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white/60">
          <div>Numéro d’équipe : <span className="text-white">#PFE25-R-474</span></div>
          <div className="text-sm font-black text-white">
            07 <span className="text-[#FFE600]">/</span> 10
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7;

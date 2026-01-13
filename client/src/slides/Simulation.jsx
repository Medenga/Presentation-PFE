import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, 
  Title, Tooltip, Legend, Filler 
} from 'chart.js';
import { Activity, Zap, AlertTriangle, Database, Clock, Brain, ShieldCheck, RefreshCw, ArrowLeft, Play } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Simulation = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('overview');
  const [isSimulating, setIsSimulating] = useState(false);
  const [step, setStep] = useState(0);
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 40 }, (_, i) => `${i}:00`),
    datasets: [
      { label: 'Latence (ms)', data: [], borderColor: '#ffffff', borderWidth: 1, fill: true, tension: 0.4, yAxisID: 'yLatency' },
      { label: 'Score IA (Risque)', data: [], borderColor: '#FFE600', borderWidth: 3, tension: 0.4, yAxisID: 'yAI' }
    ]
  });

  const fullData = useRef({
    latency: Array.from({ length: 40 }, (_, i) => i > 32 ? 350 + Math.random()*50 : 120 + Math.random()*30),
    aiScore: Array.from({ length: 40 }, (_, i) => i > 23 ? 0.8 + Math.random()*0.1 : 0.1 + Math.random()*0.1)
  });

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setStep(0);
    setChartData(prev => ({
      ...prev,
      datasets: prev.datasets.map(ds => ({ ...ds, data: [] }))
    }));
  };

  useEffect(() => {
    if (isSimulating && step < 40) {
      const timer = setTimeout(() => {
        setChartData(prev => ({
          ...prev,
          datasets: [
            { ...prev.datasets[0], data: [...prev.datasets[0].data, fullData.current.latency[step]] },
            { ...prev.datasets[1], data: [...prev.datasets[1].data, fullData.current.aiScore[step]] }
          ]
        }));
        setStep(step + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (step >= 40) {
      setIsSimulating(false);
    }
  }, [isSimulating, step]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-10 font-urbanist relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-10 bg-[#FFE600] blur-[100px] rounded-full" />

      {/* Header */}
      <header className="flex justify-between items-end border-b border-white/10 pb-8 mb-8">
        <div>
          <div className="flex items-center gap-3 text-[#FFE600] font-black text-xs uppercase tracking-widest mb-2">
            <div className="h-1 w-10 bg-[#FFE600]" /> PFE FINAL PRESENTATION
          </div>
          <h1 className="text-4xl font-black uppercase italic">Analyse Prédictive de Performance</h1>
        </div>
        <button onClick={() => navigate(-1)} className="bg-[#FFE600] text-black px-6 py-2 font-black text-xs uppercase flex items-center gap-2 hover:bg-white transition-all">
          <ArrowLeft size={16} strokeWidth={0.5} /> Retour
        </button>
      </header>

      {/* Tabs */}
      <div className="flex gap-8 mb-10 border-b border-white/5">
        {['overview', 'tech'].map(t => (
          <button 
            key={t}
            onClick={() => setTab(t)}
            className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all ${tab === t ? 'text-[#FFE600] border-b-2 border-[#FFE600]' : 'text-white/40'}`}
          >
            {t === 'overview' ? 'Visualiseur Temps-Réel' : 'Détails Techniques'}
          </button>
        ))}
      </div>

      {tab === 'overview' ? (
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <div className="bg-black/40 border border-white/10 p-8 rounded-xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-8">
                <h2 className="flex items-center gap-3 font-bold uppercase tracking-tight">
                  <Activity className="text-[#FFE600]" size={20} /> Analyse Prédictive vs Seuillage
                </h2>
                <button 
                  onClick={runSimulation} 
                  disabled={isSimulating}
                  className="bg-[#FFE600] text-black px-6 py-2 font-black text-xs uppercase flex items-center gap-2 disabled:opacity-50"
                >
                  {isSimulating ? <RefreshCw className="animate-spin" size={14} strokeWidth={0.5} /> : <Play size={14} strokeWidth={0.5} fill="black" />}
                  Lancement de l'analyse
                </button>
              </div>
              
              <div className="h-[300px]">
                <Line 
                  data={chartData} 
                  options={{
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { grid: { display: false }, ticks: { color: '#666' } },
                      yLatency: { position: 'left', max: 500, ticks: { color: '#666' } },
                      yAI: { position: 'right', max: 1, ticks: { color: '#FFE600' } }
                    }
                  }} 
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <AlertBox 
                  active={step > 23} 
                  type="predictive" 
                  title="Détection Prédictive" 
                  value="ALERTE T-5 MIN" 
                  desc="Modèle LSTM : Anomalie identifiée (92% Confiance)"
                />
                <AlertBox 
                  active={step > 32} 
                  type="reactive" 
                  title="Seuil Réactif" 
                  value="SLA BREACH" 
                  desc="Alerte Prometheus : Latence > 500ms"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <KpiCard icon={<Clock />} label="Lead Time Moyen" val="4.2 MIN" />
              <KpiCard icon={<Brain />} label="F1-Score" val="0.89" />
              <KpiCard icon={<ShieldCheck />} label="Réduction Bruit" val="-22%" />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-[#FFE600] font-black text-xs uppercase mb-6 flex items-center gap-2"><Database size={16}/> Protocole</h3>
              <div className="space-y-6 border-l border-white/10 ml-2">
                <TimelineStep title="Simulation Chaos" desc="Injection de latence réseau (Pumba)." />
                <TimelineStep title="Collecte Métriques" desc="Scrape Prometheus (5s intervals)." />
                <TimelineStep title="Inférence IA" desc="LSTM : Prédiction séries temporelles." />
              </div>
            </div>
            <div className="bg-[#FFE600] text-black p-6 rounded-xl font-bold italic">
              L'approche transforme l'audit en une force proactive, anticipant les défaillances via la détection de signaux faibles.
            </div>
          </aside>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-black/60 border border-white/10 p-10 rounded-xl">
             <h3 className="text-xl font-black mb-8 uppercase flex items-center gap-3">Schéma du Banc d'Essai</h3>
             <div className="flex flex-col items-center gap-4">
                <div className="w-full grid grid-cols-3 gap-2">
                   {['FRONT-END', 'CATALOG', 'CHECKOUT'].map(s => <div key={s} className="p-4 border border-white/10 text-center text-[10px] font-black">{s}</div>)}
                </div>
                <div className="w-px h-10 bg-[#FFE600]" />
                <div className="w-full flex gap-4">
                   <div className="flex-1 p-4 bg-[#FFE600]/10 border border-[#FFE600]/30 text-center uppercase text-[10px] font-black italic">Prometheus</div>
                   <div className="flex-1 p-4 bg-[#FFE600]/10 border border-[#FFE600]/30 text-center uppercase text-[10px] font-black italic">Core IA (LSTM)</div>
                </div>
             </div>
          </div>
          <div className="space-y-6">
             <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="text-[#FFE600] font-black text-xs uppercase mb-4 tracking-widest">Variables d'Étude</h3>
                <p className="text-sm text-white/60 leading-relaxed italic border-l-2 border-[#FFE600] pl-4">
                  "Démontrer que le Deep Learning surpasse les seuils statiques pour garantir la continuité de service en milieu distribué."
                </p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AlertBox = ({ active, type, title, value, desc }) => (
  <div className={`p-5 border-l-4 transition-all duration-500 ${active ? (type === 'predictive' ? 'bg-[#FFE600]/10 border-[#FFE600] animate-pulse' : 'bg-red-900/20 border-red-500') : 'bg-white/5 border-white/20'}`}>
    <div className={`flex items-center gap-2 text-[10px] font-black uppercase mb-2 ${active ? 'text-white' : 'text-white/20'}`}>
      {type === 'predictive' ? <Zap size={14}/> : <AlertTriangle size={14}/>} {title}
    </div>
    <p className={`text-2xl font-black ${active ? (type === 'predictive' ? 'text-[#FFE600]' : 'text-red-500') : 'text-white/10'}`}>
      {active ? value : (type === 'predictive' ? 'VEILLE IA...' : 'STABLE')}
    </p>
    {active && <p className="text-[9px] text-white/40 uppercase mt-2 tracking-tighter">{desc}</p>}
  </div>
);

const KpiCard = ({ icon, label, val }) => (
  <div className="bg-black/40 border border-white/5 p-5 rounded-xl hover:border-[#FFE600]/50 transition-all group">
    <div className="flex justify-between items-start mb-2">
      <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">{label}</span>
      <span className="text-[#FFE600]/40 group-hover:text-[#FFE600]">{icon}</span>
    </div>
    <div className="text-2xl font-black">{val}</div>
  </div>
);

const TimelineStep = ({ title, desc }) => (
  <div className="pl-6 relative mb-6">
    <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-[#FFE600] rounded-full shadow-[0_0_10px_#FFE600]" />
    <div className="text-sm font-bold uppercase tracking-tight">{title}</div>
    <div className="text-[11px] text-white/40 font-light italic">{desc}</div>
  </div>
);

export default Simulation;
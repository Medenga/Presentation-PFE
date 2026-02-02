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
      { label: 'Latence (ms)', data: [], borderColor: '#ffffff', borderWidth: 2, fill: true, tension: 0.4, yAxisID: 'yLatency', backgroundColor: 'rgba(255,255,255,0.05)' },
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
    <div className="min-h-screen bg-[#313130] text-white p-6 font-['Helvetica',sans-serif] relative overflow-auto">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-10 bg-[#FFE600] blur-[100px] rounded-full" />

      {/* Header */}
      <header className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-3 text-[#FFE600] font-black text-sm uppercase tracking-widest mb-2">
            <div className="h-1 w-10 bg-[#FFE600]" /> PFE FINAL PRESENTATION
          </div>
          <h1 className="text-5xl font-bold">Analyse prédictive de performance</h1>
        </div>
        <button onClick={() => navigate(-1)} className="bg-[#FFE600] text-black px-8 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-white transition-all">
          <ArrowLeft size={18} strokeWidth={0.5} /> Retour
        </button>
      </header>

      {/* Tabs */}
      <div className="flex gap-8 mb-6 border-b border-white/5">
        {['overview', 'tech'].map(t => (
          <button 
            key={t}
            onClick={() => setTab(t)}
            className={`pb-4 text-sm font-black uppercase tracking-[0.2em] transition-all ${tab === t ? 'text-[#FFE600] border-b-2 border-[#FFE600]' : 'text-white/40'}`}
          >
            {t === 'overview' ? 'Visualiseur Temps-Réel' : 'Détails Techniques'}
          </button>
        ))}
      </div>

      {tab === 'overview' ? (
        <div className="grid grid-cols-3 gap-6 pb-6">
          <div className="col-span-2 space-y-3">
            <div className="bg-black/40 border border-white/10 p-4 rounded-xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="flex items-center gap-3 font-bold uppercase tracking-tight text-base">
                  <Activity className="text-[#FFE600]" size={20} /> Analyse Prédictive vs Seuillage
                </h2>
                <button 
                  onClick={runSimulation} 
                  disabled={isSimulating}
                  className="bg-[#FFE600] text-black px-6 py-2 font-black text-xs uppercase flex items-center gap-2 disabled:opacity-50"
                >
                  {isSimulating ? <RefreshCw className="animate-spin" size={16} strokeWidth={0.5} /> : <Play size={16} strokeWidth={0.5} fill="black" />}
                  Lancement de l'analyse
                </button>
              </div>
              
              <div className="h-[160px] mb-4">
                <Line 
                  data={chartData} 
                  options={{
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: { 
                      legend: { display: false },
                      tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#FFE600',
                        bodyColor: '#fff',
                        borderColor: '#FFE600',
                        borderWidth: 1
                      }
                    },
                    scales: {
                      x: { 
                        grid: { display: false, color: 'rgba(255,255,255,0.05)' }, 
                        ticks: { color: '#999', font: { size: 11 } } 
                      },
                      yLatency: { 
                        position: 'left', 
                        max: 500, 
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#999', font: { size: 11 } } 
                      },
                      yAI: { 
                        position: 'right', 
                        max: 1, 
                        grid: { display: false },
                        ticks: { color: '#FFE600', font: { size: 11 } } 
                      }
                    }
                  }} 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
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
            
            <div className="grid grid-cols-3 gap-3">
              <KpiCard icon={<Clock />} label="Lead Time Moyen" val="4.2 MIN" />
              <KpiCard icon={<Brain />} label="F1-Score" val="0.89" />
              <KpiCard icon={<ShieldCheck />} label="Réduction Bruit" val="-22%" />
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1">
              <h3 className="text-[#FFE600] font-black text-base uppercase mb-6 flex items-center gap-2"><Database size={20}/> Protocole</h3>
              <div className="space-y-5 border-l border-white/10 ml-2">
                <TimelineStep title="Simulation Chaos" desc="Injection de latence réseau (Pumba)." />
                <TimelineStep title="Collecte Métriques" desc="Scrape Prometheus (5s intervals)." />
                <TimelineStep title="Inférence IA" desc="LSTM : Prédiction séries temporelles." />
              </div>
            </div>
            <div className="bg-[#FFE600] text-black p-4 rounded-xl font-bold italic text-sm leading-relaxed">
              L'approche transforme l'audit en une force proactive, anticipant les défaillances via la détection de signaux faibles.
            </div>
          </aside>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
          <div className="bg-black/60 border border-white/10 p-10 rounded-xl">
             <h3 className="text-2xl font-black mb-8 uppercase flex items-center gap-3">Schéma du Banc d'Essai</h3>
             <div className="flex flex-col items-center gap-4">
                <div className="w-full grid grid-cols-3 gap-2">
                   {['FRONT-END', 'CATALOG', 'CHECKOUT'].map(s => <div key={s} className="p-4 border border-white/10 text-center text-sm font-black">{s}</div>)}
                </div>
                <div className="w-px h-10 bg-[#FFE600]" />
                <div className="w-full flex gap-4">
                   <div className="flex-1 p-4 bg-[#FFE600]/10 border border-[#FFE600]/30 text-center uppercase text-sm font-black italic">Prometheus</div>
                   <div className="flex-1 p-4 bg-[#FFE600]/10 border border-[#FFE600]/30 text-center uppercase text-sm font-black italic">Core IA (LSTM)</div>
                </div>
             </div>
          </div>
          <div className="space-y-6">
             <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="text-[#FFE600] font-black text-sm uppercase mb-4 tracking-widest">Variables d'Étude</h3>
                <p className="text-lg text-white/70 leading-relaxed italic border-l-2 border-[#FFE600] pl-4">
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
  <div className={`p-4 border-l-4 rounded transition-all duration-500 h-[100px] flex flex-col justify-between ${active ? (type === 'predictive' ? 'bg-[#FFE600]/10 border-[#FFE600] animate-pulse' : 'bg-red-900/20 border-red-500') : 'bg-white/5 border-white/20'}`}>
    <div>
      <div className={`flex items-center gap-2 text-xs font-black uppercase mb-2 ${active ? 'text-white' : 'text-white/30'}`}>
        {type === 'predictive' ? <Zap size={14}/> : <AlertTriangle size={14}/>} {title}
      </div>
      <p className={`text-lg font-black ${active ? (type === 'predictive' ? 'text-[#FFE600]' : 'text-red-500') : 'text-white/10'}`}>
        {active ? value : (type === 'predictive' ? 'VEILLE IA...' : 'STABLE')}
      </p>
    </div>
    {active && <p className="text-xs text-white/60 uppercase tracking-tight leading-tight">{desc}</p>}
  </div>
);

const KpiCard = ({ icon, label, val }) => (
  <div className="bg-black/40 border border-white/5 p-4 rounded-xl hover:border-[#FFE600]/50 transition-all group">
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs font-black text-white/40 uppercase tracking-widest">{label}</span>
      <span className="text-[#FFE600]/40 group-hover:text-[#FFE600]">{React.cloneElement(icon, { size: 18 })}</span>
    </div>
    <div className="text-2xl font-black">{val}</div>
  </div>
);

const TimelineStep = ({ title, desc }) => (
  <div className="pl-6 relative mb-5 last:mb-0">
    <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-[#FFE600] rounded-full shadow-[0_0_10px_#FFE600]" />
    <div className="text-base font-bold uppercase tracking-tight">{title}</div>
    <div className="text-sm text-white/50 font-light italic">{desc}</div>
  </div>
);

export default Simulation;
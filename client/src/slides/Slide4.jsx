import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Database, Cpu, Search } from 'lucide-react';

const Slide4 = () => {
  const objectives = [
    {
      id: "01",
      title: "Dataset Dédié",
      icon: <Database size={48} />,
      desc: "Génération de données via un **banc d'essai** système/app.",
    },
    {
      id: "02",
      title: "Benchmark Modèles",
      icon: <Cpu size={48} />,
      desc: "Comparaison **ML**, **DL** et **Hybride** pour la performance.",
    },
    {
      id: "03",
      title: "XAI (SHAP/LIME)",
      icon: <Search size={48} />,
      desc: "Justification des alertes et fin de l'effet **boîte noire**.",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-pres-grey text-white flex flex-col px-20 pt-12 pb-24 overflow-hidden font-sans"
    >
      <div className="flex-grow flex flex-col items-center">
        {/* TITRE - Identique à l'original */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] px-5 py-2 rounded-full text-[13px] font-black uppercase tracking-[3px] mb-6">
            <Microscope size={16} />
            Question de recherche
          </div>
          <h1 className="text-white text-[35px] font-extrabold leading-tight max-w-4xl mx-auto">
            Le passage de la statistique au Deep Learning permet-il d'atteindre une exhaustivité de détection compatible avec les exigences de l'audit ?
          </h1>
        </div>

        {/* OBJECTIFS - Grille de 3 colonnes */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-[1100px] mx-auto">
          {objectives.map((obj, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white/10 border border-white/15 rounded-[32px] p-10 relative flex flex-col items-center text-center"
            >
              <div className="text-[#FFE600] mb-6 opacity-80">{obj.icon}</div>
              
              <div className="bg-[#FFE600] px-4 py-1 rounded-md text-black font-black text-[13px] mb-5">
                OBJ {obj.id}
              </div>

              <h3 className="text-[26px] font-bold mb-4 uppercase tracking-tight text-white leading-tight">
                {obj.title}
              </h3>
              
              <p className="text-[19px] text-gray-300 leading-snug" 
                 dangerouslySetInnerHTML={{ __html: obj.desc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#FFE600]">$1</strong>') }}>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-8">
        <div className="pt-4 border-t border-white/15 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white/70">
          <div>Numéro d'équipe : <span className="text-white">#PFE25-R-474</span></div>
          <div className="text-sm font-black text-white">04 <span className="text-[#FFE600]">/</span> 10</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide4;
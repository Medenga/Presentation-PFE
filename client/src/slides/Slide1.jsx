import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Slide1 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: '1280px', height: '720px' }} // On déplace les dimensions ici
      className="relative text-slate-900 flex flex-col px-20 py-10 overflow-hidden font-urbanist shadow-2xl mx-auto bg-pres-grey"
    >
      {/* BACKGROUND DECORATION */}
      {/* Remplacement des w-[400px] par des classes équivalentes ou propres 
      <div className="absolute -top-10 -right-5 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] z-0" />
      <div className="absolute -bottom-10 -left-5 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] z-0" />*/}

      {/* HEADER */}
      {/* HEADER - Version Fixe avec Absolute */}
      <div className="absolute top-0 left-0 w-full  pt-1 z-20">
        
      </div>

      {/* MAIN CONTENT - Utilisation de 'grow' qui est le standard Tailwind actuel */}
      <div className="grow flex flex-col justify-center items-center text-center z-10">
        <div className="text-ey-yellow text-xs font-bold tracking-[0.25em] uppercase mb-2">
          Projet de Fin d'Études • 2025-2026
        </div>
        
        <h1 className="text-5xl font-extrabold leading-tight max-w-5xl text-white">
            Application de l'analyse prédictive à l’audit de performance des systèmes d’information
        </h1>

        <div className="w-20 h-1.5 bg-ey-yellow my-8 rounded-full shadow-sm" />

        {/* TEAM CARDS */}
        <div className="flex gap-6 mt-4">
          <div className="m-auto bg-white/20 backdrop-blur-sm border border-slate-200 p-4 rounded-2xl shadow-sm hover:border-ey-yellow transition-all duration-300 h-25 flex items-center">
            <div>
              <div className="text-[12px] text-black font-extrabold uppercase tracking-wider">Pôle Cybersécurité</div>
              <div className="text-white text-sm mt-1.5">Massioudath BANKOLE <br /> Mendenga TAKOUGNADI-A</div>
            </div>
          </div>
          <div className="m-auto bg-white/20 backdrop-blur-sm border border-slate-200 p-4 rounded-2xl shadow-sm hover:border-ey-yellow transition-all duration-300 h-25 flex items-center">
            <div>
              <div className="text-[12px] text-black font-extrabold uppercase tracking-wider">Pôle Data & IA</div>
              <div className="text-white text-sm mt-1.5">Redha IBBOU  •  Naïm MEYA <br/> Walid LECHHAB  •  Nicolas PEREIRA</div>
            </div>
          </div>
          <div className="m-auto bg-white/20 backdrop-blur-sm border border-slate-200 p-4 rounded-2xl shadow-sm hover:border-ey-yellow transition-all duration-300 h-25 flex items-center">
            <div>
              <div className="items-center justify-center w-full">
                <div className='flex items-center justify-center'>
                    {/* Box ECE */}
                    <div className="flex items-center gap-2 text-sm font-extrabold tracking-widest uppercase">
                      <img 
                        src=".././public/img2.png" 
                        alt="ECE Paris" 
                        className="h-10 w-auto object-contain pl-3 pr-1 pt-1" 
                      />
                    </div>
                    <p className='text-xs text-white'>x</p>
                  {/* Box EY */}
                    <div className="flex items-center gap-2 text-sm font-extrabold tracking-widest uppercase">
                      <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" 
                          alt="EY" 
                          className="h-9 w-auto pl-2 pr-3 pb-1" 
                      />
                    </div>
                </div>
                <p className='text-xs text-white pt-2'>En partenariat avec notre école l'ECE et l'entreprise EY Consulting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      {/* FOOTER HUD - Version Fixe avec Absolute */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10 z-20">
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
          <div className="text-white">Numéro d'équipe: #PFE25-R-474</div>
          <div className="text-white text-xs font-black">
            01 <span className="text-ey-yellow">/</span> 10
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide1;
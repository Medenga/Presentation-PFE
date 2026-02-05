import React from 'react';
import { motion } from 'framer-motion';

const Slide1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: '1280px', height: '720px' }}
      className="relative flex flex-col px-20 py-10 overflow-hidden font-sans shadow-2xl mx-auto bg-pres-grey"
    >
      {/* MAIN CONTENT */}
      <div className="grow flex flex-col justify-center items-center text-center z-10">
        <div className="font-urbanist text-ey-yellow text-base font-bold tracking-[0.25em] uppercase mb-3">
          Projet de Fin d'Études • 2025-2026
        </div>

        <h1 className="text-6xl font-extrabold leading-tight max-w-5xl text-white">
          Application de l&apos;analyse prédictive à l&apos;audit de performance des systèmes d&apos;information
        </h1>

        <div className="w-20 h-1.5 bg-ey-yellow my-8 rounded-full" />

        {/* TEAM CARDS */}
        <div className="grid grid-cols-3 gap-6 mt-6 w-full max-w-6xl">
          
          {/* CYBER */}
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-2xl shadow-sm min-h-[180px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-ey-yellow font-extrabold uppercase tracking-wider mb-3">
                Pôle Cybersécurité
              </div>
              <div className="text-white text-base leading-relaxed">
                Massioudath BANKOLE<br />
                Mendenga TAKOUGNADI-A
              </div>
            </div>
          </div>

          {/* DATA & IA */}
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-2xl shadow-sm min-h-[180px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-ey-yellow font-extrabold uppercase tracking-wider mb-3">
                Pôle Data & IA
              </div>
              <div className="text-white text-base leading-relaxed">
                Redha IBBOU<br />
                Naïm MEYA<br />
                Walid LECHHAB<br />
                Nicolas PEREIRA
              </div>
            </div>
          </div>

          {/* PARTENARIAT */}
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-2xl shadow-sm min-h-[180px] flex flex-col justify-center items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <img
                src=".././public/img2.png"
                alt="ECE Paris"
                className="h-12 w-auto object-contain"
              />
              <span className="text-white font-bold text-lg">×</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg"
                alt="EY"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white text-base leading-relaxed max-w-xs">
              En partenariat avec notre école l&apos;ECE et l&apos;entreprise EY Consulting.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="font-urbanist pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            01 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide1;

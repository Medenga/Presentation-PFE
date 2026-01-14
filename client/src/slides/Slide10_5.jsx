import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Slide10_5 = () => {
  const navigate = useNavigate();

  // 5 emplacements pour captures (tu mettras tes URLs plus tard)
  const screenshots = useMemo(
    () => [
      { id: "shot-1", src: null, label: "Capture 1" },
      { id: "shot-2", src: null, label: "Capture 2" },
      { id: "shot-3", src: null, label: "Capture 3" },
      { id: "shot-4", src: null, label: "Capture 4" },
      { id: "shot-5", src: null, label: "Capture 5" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const goNext = () => setIndex((i) => (i + 1) % screenshots.length);

  const current = screenshots[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#0d0d0d] text-white flex flex-col p-[60px_80px] overflow-hidden font-urbanist"
    >
      {/* Fine line top */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#FFE600]/90" />

      {/* Header */}
      <div className="flex justify-between items-center z-10 w-full mb-8">
        <div className="h-[50px] bg-white/[0.05] border border-white/10 rounded-lg px-5 flex items-center backdrop-blur-md text-white font-extrabold text-[14px] gap-2 uppercase tracking-widest">
          <GraduationCap size={18} /> ECE PARIS
        </div>

        <div className="h-[50px] bg-white rounded-lg px-5 flex items-center shadow-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg"
            alt="EY"
            className="h-[35px]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        {/* Title block */}
        <div className="border-l-4 border-[#FFE600] pl-6 text-left mb-10">
          {/* Button "Démonstration" */}
          <button
            onClick={() => navigate("/demonstration")} // route future
            className="inline-flex items-center h-[34px] px-4 rounded-md
                       bg-[#FFE600] text-black text-[12px] font-black uppercase
                       tracking-[0.28em] shadow-[0_0_20px_rgba(255,230,0,0.15)]
                       hover:scale-[1.03] transition-transform mb-2"
          >
            Démonstration
          </button>

          {/* New title */}
          <h1 className="text-[50px] font-light uppercase tracking-tighter">
            Présentation des <span className="font-bold text-[#FFE600]">résultats</span>
          </h1>
        </div>

        {/* Viewer + arrows */}
        <div className="relative flex items-center justify-center gap-8 -translate-y-12">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="group h-[56px] w-[56px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center hover:border-[#FFE600]/40 hover:bg-[#FFE600]/10 transition-all"
            aria-label="Capture précédente"
          >
            <ChevronLeft className="opacity-80 group-hover:opacity-100" />
          </button>

          {/* Square viewer */}
          <div className="relative">
            <div className="w-[360px] h-[360px] rounded-xl border border-white/10 bg-white/[0.03] shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.99 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Placeholder tant que src est null */}
                  {!current.src ? (
                    <div className="flex flex-col items-center justify-center text-white/60">
                      <div className="h-[70px] w-[70px] rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-4">
                        <ImageIcon />
                      </div>
                      <div className="text-[12px] font-extrabold uppercase tracking-[3px]">
                        {current.label}
                      </div>
                      <div className="text-[11px] mt-2 opacity-70">
                        Emplacement capture d&apos;écran
                      </div>
                    </div>
                  ) : (
                    <img
                      src={current.src}
                      alt={current.label}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Small badge index */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-[2px]">
              <span className="text-[#FFE600]">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              / {String(screenshots.length).padStart(2, "0")}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="group h-[56px] w-[56px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center hover:border-[#FFE600]/40 hover:bg-[#FFE600]/10 transition-all"
            aria-label="Capture suivante"
          >
            <ChevronRight className="opacity-80 group-hover:opacity-100" />
          </button>
        </div>

        {/* (Supprimé) Utilise les flèches... */}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center opacity-50 text-[10px] font-extrabold uppercase tracking-[2px]">
        {/* (Supprimé) Live Demonstration Interface */}
        <div className="ml-auto text-[#FFE600]">05 / 06</div>
      </div>
    </motion.div>
  );
};

export default Slide10_5;
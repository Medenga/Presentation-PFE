import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BenchmarkFullTable = () => {
  const models = ["GRU + NLP", "LSTM", "GRU", "Baseline"];

  const metrics = [
    { key: "f1", label: "F1-Score" },
    { key: "precision", label: "Précision" },
    { key: "recall", label: "Rappel" },
    { key: "lead", label: "Lead Time" },
  ];

  const data = {
    "GRU + NLP": { f1: 0.66, precision: 0.53, recall: 0.67, lead: "~11 min" },
    LSTM: { f1: 0.57, precision: 0.74, recall: 0.47, lead: "~15 min" },
    GRU: { f1: 0.6, precision: 0.64, recall: 0.56, lead: "~14 min" },
    Baseline: { f1: 0.34, precision: 0.65, recall: 0.23, lead: "~30 min" },
  };

  const highlightModel = "GRU + NLP";
  const format = (v) => (typeof v === "number" ? String(v) : v);

  return (
    <div className="w-full h-full p-6 flex items-center justify-center font-sans">
      <div className="w-full h-full bg-white rounded-2xl overflow-hidden border border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
        <div className="h-[54px] bg-gradient-to-r from-[#0B73C9] to-[#2FA3E1] flex items-center px-6">
          <div className="text-white font-extrabold uppercase tracking-[0.26em] text-[12px]">
            Benchmark des modèles
          </div>
        </div>

        <div className="h-[calc(100%-54px)] p-5">
          <div className="h-full rounded-xl overflow-hidden border border-black/10">
            <table className="w-full h-full table-fixed">
              <thead>
                <tr className="bg-[#167CCF] text-white">
                  <th className="px-4 py-4 text-left text-[14px] font-extrabold uppercase tracking-[0.22em] w-[26%]">
                    Métriques
                  </th>
                  {models.map((m) => (
                    <th
                      key={m}
                      className={[
                        "px-3 py-4 text-center text-[14px] font-extrabold uppercase tracking-[0.18em]",
                        m === highlightModel ? "bg-[#FFD400] text-black" : "",
                      ].join(" ")}
                    >
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="text-black">
                {metrics.map((metric, rowIdx) => {
                  const zebra = rowIdx % 2 === 0 ? "bg-white" : "bg-[#F4FAFF]";
                  return (
                    <tr
                      key={metric.key}
                      className={["border-b border-black/10 last:border-b-0", zebra].join(" ")}
                    >
                      <td className="px-4 py-5 text-left font-extrabold text-[16px] text-black/85 whitespace-nowrap">
                        {metric.label}
                      </td>

                      {models.map((m) => {
                        const isHighlight = m === highlightModel;
                        const cellBase = "px-3 py-5 text-center text-[16px] tabular-nums";
                        const cellBg = isHighlight ? "bg-[#FFF4B3]" : "";
                        const cellText = isHighlight ? "text-black font-extrabold" : "text-black/80 font-semibold";
                        return (
                          <td key={m + metric.key} className={[cellBase, cellBg, cellText].join(" ")}>
                            {format(data[m][metric.key])}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparativeRadarLikeImage = () => {
  const labels = [
    "F1-Score",
    "Précision",
    "Rappel",
    "Anticipation",
    "Fiabilité (vs FP)",
    "Exhaustivité (vs FN)",
    "Interprétabilité",
  ];

  const series = [
    {
      name: "LSTM",
      stroke: "#1f77b4",
      fill: "rgba(31,119,180,0.10)",
      dash: null,
      values: [0.58, 0.75, 0.40, 0.75, 0.90, 0.75, 0.40],
    },
    {
      name: "GRU + NLP",
      stroke: "#2ca02c",
      fill: "rgba(44,160,44,0.10)",
      dash: null,
      values: [0.60, 0.55, 0.65, 0.55, 0.75, 0.70, 0.55],
    },
    {
      name: "GRU Standard",
      stroke: "#ff7f0e",
      fill: "rgba(255,127,14,0.05)",
      dash: "7 5",
      values: [0.62, 0.65, 0.55, 0.70, 0.30, 0.25, 0.30],
    },
    {
      name: "Baseline (Statistique)",
      stroke: "rgba(70,70,70,0.95)",
      fill: "rgba(120,120,120,0.05)",
      dash: "2 5",
      values: [0.34, 0.60, 0.25, 0.85, 0.55, 0.10, 0.75],
    },
  ];

  const W = 640;
  const H = 420;

  const cx = 230;
  const cy = 230;
  const R = 145;

  const toPoint = (i, v) => {
    const angle = -Math.PI / 2 + (i * (2 * Math.PI)) / labels.length;
    const r = R * v;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };

  const polygonPath = (values) => {
    const pts = values.map((v, i) => toPoint(i, v));
    return `M ${pts.map(([x, y]) => `${x} ${y}`).join(" L ")} Z`;
  };

  const rings = [
    { v: 0.25, label: "25%" },
    { v: 0.5, label: "50%" },
    { v: 0.75, label: "75%" },
    { v: 1, label: "100%" },
  ];

  const legendX = 420;
  const legendY = 78;
  const legendW = 200;
  const legendH = 120;

  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div className="w-full h-full bg-white rounded-2xl border border-black/10 overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
        <div className="pt-5 pb-2 text-center font-extrabold text-[22px] tracking-[0.12em] text-black">
          ANALYSE COMPARATIVE DES MODELES
        </div>

        <div className="w-full h-[calc(100%-64px)] flex items-center justify-center">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
            {rings.map((rv) => (
              <path
                key={rv.v}
                d={polygonPath(new Array(labels.length).fill(rv.v))}
                fill="none"
                stroke="rgba(0,0,0,0.18)"
                strokeWidth="1.2"
              />
            ))}

            {rings.map((rv) => {
              const [x, y] = toPoint(0, rv.v);
              return (
                <text
                  key={rv.label}
                  x={x + 8}
                  y={y - 6}
                  fill="rgba(0,0,0,0.45)"
                  fontSize="12"
                >
                  {rv.label}
                </text>
              );
            })}

            {labels.map((lab, i) => {
              const [x, y] = toPoint(i, 1);
              const [lx, ly] = toPoint(i, 1.18);
              return (
                <g key={lab}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="rgba(0,0,0,0.18)"
                    strokeWidth="1.2"
                  />
                  <text
                    x={lx}
                    y={ly}
                    fill="rgba(0,0,0,0.75)"
                    fontSize="14"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {lab}
                  </text>
                </g>
              );
            })}

            {series.map((s) => (
              <g key={s.name + "-fill"}>
                <path d={polygonPath(s.values)} fill={s.fill} stroke="none" />
              </g>
            ))}

            {series.map((s) => (
              <g key={s.name + "-stroke"}>
                <path
                  d={polygonPath(s.values)}
                  fill="none"
                  stroke={s.stroke}
                  strokeWidth="3.2"
                  strokeDasharray={s.dash || undefined}
                  strokeLinejoin="round"
                />
              </g>
            ))}

            <g transform={`translate(${legendX}, ${legendY})`}>
              <rect
                x="0"
                y="0"
                width={legendW}
                height={legendH}
                fill="rgba(255,255,255,0.96)"
                stroke="rgba(0,0,0,0.18)"
              />
              {series.map((s, idx) => (
                <g key={s.name + "-legend"} transform={`translate(14, ${24 + idx * 24})`}>
                  <line
                    x1="0"
                    y1="0"
                    x2="34"
                    y2="0"
                    stroke={s.stroke}
                    strokeWidth="4"
                    strokeDasharray={s.dash || undefined}
                  />
                  <text x="44" y="5" fill="rgba(0,0,0,0.82)" fontSize="14">
                    {s.name}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Slide8 = () => {
  const navigate = useNavigate();

  const slides = useMemo(
    () => [
      {
        id: "shot-1",
        label: "Tableau comparatif",
        kind: "component",
        render: () => <BenchmarkFullTable />,
      },
      {
        id: "shot-2",
        label: "Radar comparatif",
        kind: "component",
        render: () => <ComparativeRadarLikeImage />,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const current = slides[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-[1280px] h-[720px] bg-[#313130] text-white flex flex-col p-[60px_80px] overflow-hidden font-sans"
    >
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#FFE600]/90" />

      <div className="flex-grow flex flex-col justify-center items-center text-center pb-24">
        <div className="border-l-4 border-[#FFE600] pl-6 text-left mb-8 self-start">
          <h1 className="text-[50px] font-bold tracking-tighter">
            Présentation des <span className="text-[#FFE600]">résultats</span>
          </h1>
        </div>

        <div className="relative flex items-center justify-center gap-10 -translate-y-8">
          <button
            onClick={goPrev}
            className="group h-[56px] w-[56px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center hover:border-[#FFE600]/40 hover:bg-[#FFE600]/10 transition-all"
            aria-label="Capture précédente"
          >
            <ChevronLeft className="opacity-80 group-hover:opacity-100" />
          </button>

          <div className="relative">
            <div className="w-[820px] h-[460px] rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_45px_rgba(0,0,0,0.65)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.99 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {current.kind === "component" ? (
                    current.render()
                  ) : (
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
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-black/45 border border-white/10 backdrop-blur-md text-[12px] font-extrabold uppercase tracking-[3px]">
              <span className="text-[#FFE600]">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              / {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          <button
            onClick={goNext}
            className="group h-[56px] w-[56px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center hover:border-[#FFE600]/40 hover:bg-[#FFE600]/10 transition-all"
            aria-label="Capture suivante"
          >
            <ChevronRight className="opacity-80 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-20 pb-10">
        <div className="font-urbanist pt-4 border-t border-white/30 flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-white">
          <div>Numéro d&apos;équipe: #PFE25-R-474</div>
          <div className="text-sm font-black">
            08 <span className="text-ey-yellow">/</span> 13
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide8;
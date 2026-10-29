/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
// src/components/MapaBrasil.jsx
import { useState, useEffect } from "react";

const HIGHLIGHTED = ["BRPE", "BRSP", "BRMT", "BRBA", "BRRS"];

const stateMarkers = [
  {
    id: "PE", label: "Pernambuco", x: 84.5, y: 32.5,
    cities: ["Jaboatão dos Guararapes", "Cabo de Santo Agostinho", "Caruaru", "Garanhuns", "Vitória de Santo Antão", "Pesqueira", "Olinda", "Paulista"],
  },
  {
    id: "SP", label: "São Paulo", x: 56.0, y: 68.5,
    cities: ["São Paulo Capital (Consórcio LOCAT)"],
  },
  { id: "MT", label: "Mato Grosso", x: 33.0, y: 43.0, cities: ["Cuiabá"] },
  // { id: "RJ", label: "Rio de Janeiro", x: 64.5, y: 64.0, cities: ["Rio de Janeiro"] },
  { id: "BA", label: "Bahia", x: 63.5, y: 46.0, cities: ["Jequié"] },
  { id: "RS", label: "Rio Grande do Sul", x: 48.5, y: 82.0, cities: ["Canela", "Novo Hamburgo"] },
];

function processBrSvg(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "image/svg+xml");
  const svg = doc.querySelector("svg");
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.setAttribute("style", "width:100%;height:auto;display:block;");
  svg.querySelectorAll("path[id]").forEach((path) => {
    const id = path.getAttribute("id");
    const active = HIGHLIGHTED.includes(id);
    path.setAttribute("fill", active ? "#038242" : "#d1d5db");
    path.setAttribute("data-active", active ? "true" : "false");
    path.setAttribute("stroke", "#ffffff");
    path.setAttribute("stroke-width", "0.8");
    path.style.transition = "fill 0.2s";
    
  });
  return svg.outerHTML;
}

function processBoSvg(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "image/svg+xml");
  const svg = doc.querySelector("svg");
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.setAttribute("style", "width:100%;height:auto;display:block;");
  svg.querySelectorAll("path").forEach((path) => {
    path.setAttribute("fill", "#c3cd86");
    path.setAttribute("data-country", "BO");
    path.setAttribute("stroke", "#ffffff");
    path.setAttribute("stroke-width", "1");
    path.style.transition = "fill 0.2s";
    
  });
  return svg.outerHTML;
}

export default function MapaBrasil({ className = "" }) {
  const [brHtml, setBrHtml] = useState(null);
  const [boHtml, setBoHtml] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([
      fetch("/images/mapasvg/br.svg", { signal: controller.signal }).then((r) => r.text()),
      fetch("/images/mapasvg/bo.svg", { signal: controller.signal }).then((r) => r.text()),
    ]).then(([br, bo]) => { setBrHtml(processBrSvg(br)); setBoHtml(processBoSvg(bo)); })
      .catch((error) => { if (error.name !== "AbortError") console.error(error); });
    return () => controller.abort();
  }, []);

  const locations = [...stateMarkers, { id: "BO", label: "Bolívia", cities: ["Santa Cruz de la Sierra"] }];
  const current = locations.find((location) => location.id === selected);

  return <div className={className}>
    <div className="relative select-none" aria-hidden="true">
      {brHtml ? <div dangerouslySetInnerHTML={{ __html: brHtml }} /> : <div className="w-full bg-white/10 rounded-lg" style={{ aspectRatio: "1000/912" }} />}
      {boHtml && <div className="absolute rounded-xl overflow-hidden border-2 border-[#c3cd86] bg-gray-50" style={{ bottom: "6%", left: "2%", width: "20%" }}><div dangerouslySetInnerHTML={{ __html: boHtml }} /><div className="text-center py-1 text-xs font-bold bg-[#c3cd86] text-[#034422]">BOLÍVIA</div></div>}
      {brHtml && stateMarkers.map(({ id, x, y }) => <span key={id} className="absolute rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs border-2 border-white bg-[#034422] text-white shadow-lg" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>{id}</span>)}
    </div>
    <div className="mt-5">
      <p className="text-sm text-white/80 mb-3">Selecione uma região para ver as localidades:</p>
      <div className="flex flex-wrap gap-2" aria-label="Regiões de atuação">{locations.map(({ id, label }) => <button key={id} type="button" aria-pressed={selected === id} onClick={() => setSelected(selected === id ? null : id)} className={`min-h-11 px-4 rounded-lg border text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${selected === id ? "bg-[#c3cd86] border-[#c3cd86] text-[#034422]" : "border-white/40 text-white hover:bg-white/10"}`}>{label}</button>)}</div>
      {current && <div className="mt-4 rounded-xl bg-white/10 p-4 text-white" aria-live="polite"><h4 className="font-bold mb-2">{current.label}</h4><ul className="text-sm text-white/90 space-y-1">{current.cities.map((city) => <li key={city}>{city}</li>)}</ul></div>}
    </div>
  </div>;
}

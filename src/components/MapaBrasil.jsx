/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
// src/components/MapaBrasil.jsx
import { useState, useEffect } from "react";

const HIGHLIGHTED = ["BRPE", "BRSP" /*"BRMT"*/,"BRRJ" , "BRBA", "BRRS"];

const stateMarkers = [
  {
    id: "PE", label: "Pernambuco", x: 84.5, y: 32.5,
    cities: ["Jaboatão dos Guararapes", "Cabo de Santo Agostinho", "Caruaru", "Garanhuns", "Vitória de Santo Antão", "Pesqueira", "Olinda", "Paulista"],
  },
  {
    id: "SP", label: "São Paulo", x: 56.0, y: 68.5,
    cities: ["São Paulo Capital (Consórcio LOCAT)"],
  },
  // { id: "MT", label: "Mato Grosso", x: 33.0, y: 43.0, cities: [] },
  { id: "RJ", label: "Rio de Janeiro", x: 64.5, y: 64.0, cities: ["Rio de Janeiro"] },
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
    path.style.cursor = active ? "pointer" : "default";
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
    path.style.cursor = "pointer";
  });
  return svg.outerHTML;
}

export default function MapaBrasil({ className = "" }) {
  const [brHtml, setBrHtml] = useState(null);
  const [boHtml, setBoHtml] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/images/mapasvg/br.svg").then((r) => r.text()),
      fetch("/images/mapasvg/bo.svg").then((r) => r.text()),
    ])
      .then(([brText, boText]) => {
        setBrHtml(processBrSvg(brText));
        setBoHtml(processBoSvg(boText));
      })
      .catch(console.error);
  }, []);

  return (
    <div className={`relative select-none ${className}`}>
      <style>{`
        [data-active="false"]:hover { fill: #9ca3af !important; }
        [data-active="true"]:hover  { fill: #025c2e !important; }
        [data-country="BO"]:hover   { fill: #a8b85a !important; }

        [data-active="true"] {
          filter: drop-shadow(0 0 6px rgba(3,130,66,0.45));
        }
        [data-country="BO"] {
          filter: drop-shadow(0 0 5px rgba(195,205,134,0.35));
        }

        @keyframes mapPulse {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.35; }
          70%  { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
          100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
        }
        @keyframes boPulse {
          0%   { box-shadow: 0 0 0 0 rgba(195,205,134,0.55); }
          70%  { box-shadow: 0 0 0 8px rgba(195,205,134,0); }
          100% { box-shadow: 0 0 0 0 rgba(195,205,134,0); }
        }
      `}</style>

      {/* Mapa do Brasil */}
      {brHtml ? (
        <div dangerouslySetInnerHTML={{ __html: brHtml }} />
      ) : (
        <div
          className="w-full bg-gray-100 animate-pulse rounded-lg"
          style={{ aspectRatio: "1000/912" }}
        />
      )}

      {/* Inset: Bolivia */}
      {boHtml && (
        <div
          className="absolute rounded-xl shadow-lg border-2"
          style={{
            bottom: "6%",
            left: "2%",
            width: "20%",
            borderColor: "#c3cd86",
            background: "#f9fafb",
            zIndex: hoveredState === "BO" ? 50 : 20,
            animation: "boPulse 2.8s ease-in-out infinite",
          }}
          onMouseEnter={() => setHoveredState("BO")}
          onMouseLeave={() => setHoveredState(null)}
        >
          <div className="rounded-t-xl overflow-hidden" dangerouslySetInnerHTML={{ __html: boHtml }} />

          {/* Marcador: Santa Cruz de la Sierra */}
          <div
            style={{
              position: "absolute",
              left: "72%",
              top: "52%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            {/* Pulso */}
            <div
              style={{
                position: "absolute",
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#c3cd86",
                opacity: 0.35,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            {/* Ponto central */}
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#c3cd86",
                border: "1.5px solid #034422",
                position: "relative",
              }}
            />
          </div>

          <div
            className="absolute inset-0 flex items-end justify-end p-1"
            style={{ pointerEvents: "none" }}
          >
            <span
              className="rounded-full w-7 h-7 flex items-center justify-center font-black text-[9px] shadow border-2 border-white"
              style={{ background: "#c3cd86", color: "#034422" }}
            >
              BO
            </span>
          </div>
          <div
            className="text-center py-1 text-[9px] font-bold tracking-wide"
            style={{ background: "#c3cd86", color: "#034422" }}
          >
            BOLIVIA
          </div>

          {/* Tooltip da Bolívia */}
          {hoveredState === "BO" && (
            <div
              style={{
                position: "absolute",
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginBottom: 8,
                background: "#034422",
                color: "#ffffff",
                borderRadius: 10,
                padding: "8px 12px",
                width: 200,
                zIndex: 60,
                boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
                pointerEvents: "none",
                border: "1.5px solid #c3cd86",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 11,
                  color: "#c3cd86",
                  marginBottom: 5,
                  borderBottom: "1px solid rgba(195,205,134,0.4)",
                  paddingBottom: 4,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Bolívia
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li style={{ fontSize: 11, padding: "2px 0", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "#c3cd86", fontSize: 8 }}>●</span>
                  Santa Cruz de la Sierra
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Badges dos estados brasileiros */}
      {brHtml &&
        stateMarkers.map(({ id, label, x, y, cities }) => (
          <div
            key={id}
            className="absolute flex flex-col items-center"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: hoveredState === id ? 50 : 30,
            }}
            onMouseEnter={() => setHoveredState(id)}
            onMouseLeave={() => setHoveredState(null)}
          >
            {/* Pulso animado */}
            <div
              className="rounded-full absolute"
              style={{
                width: 48,
                height: 48,
                background: "#038242",
                opacity: 0.35,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "mapPulse 2.2s ease-out infinite",
              }}
            />
            {/* Badge */}
            <div
              className="relative rounded-full w-8 h-8 flex items-center justify-center font-black text-[10px] shadow-lg border-2 border-white"
              style={{ background: "#034422", color: "#ffffff", cursor: cities && cities.length > 0 ? "pointer" : "default" }}
            >
              {id}
            </div>

            {/* Tooltip de filiais */}
            {hoveredState === id && cities && cities.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  ...(x > 60
                    ? { right: "calc(100% + 12px)" }
                    : { left: "calc(100% + 12px)" }),
                  background: "#034422",
                  color: "#ffffff",
                  borderRadius: 10,
                  padding: "8px 12px",
                  width: 220,
                  zIndex: 60,
                  boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
                  pointerEvents: "none",
                  border: "1.5px solid #c3cd86",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 11,
                    color: "#c3cd86",
                    marginBottom: 5,
                    borderBottom: "1px solid rgba(195,205,134,0.4)",
                    paddingBottom: 4,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {cities.map((city) => (
                    <li
                      key={city}
                      style={{ fontSize: 11, padding: "2px 0", display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <span style={{ color: "#c3cd86", fontSize: 8 }}>●</span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

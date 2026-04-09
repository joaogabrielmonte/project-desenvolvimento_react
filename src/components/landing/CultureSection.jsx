/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useState, useEffect, useCallback } from "react";
import { Users, Shield, CheckCircle, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  { src: "/images/equipe-locar.jpg", alt: "Nossa Equipe Locar" },
  { src: "/images/garanhunsagentes.jpg", alt: "Agentes Locar em Garanhuns" },
  { src: "/images/agentedecoletalocar.jpg", alt: "Agente de Coleta Locar" },
];

const values = [
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Equipe Especializada",
    description: "Profissionais qualificados e em constante capacitação técnica.",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Segurança em Primeiro Lugar",
    description: "Protocolos rigorosos de segurança e saúde ocupacional.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
    title: "Certificações",
    description: "Equipe certificada pelos principais órgãos ambientais.",
  },
];

const CultureSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % carouselImages.length), []);
  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="carreiras" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Carrossel */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl select-none will-change-transform">
            {carouselImages.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              aria-label="Próximo"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para imagem ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-white w-6" : "bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faça Parte do Nosso{" "}
              <span style={{ color: "#038242" }}>Time</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Com mais de 4.000 colaboradores, nosso maior patrimônio é a nossa
              gente. Investimos em um ambiente de trabalho seguro e com
              qualificação contínua.
            </p>

            <ul className="space-y-6 mb-10">
              {values.map((item) => (
                <li key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open(
                  "https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/",
                  "_blank"
                )
              }
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Trabalhe Conosco
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
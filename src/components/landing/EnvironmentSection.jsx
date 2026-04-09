/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useState, useEffect, useCallback } from "react";
import { Award, Briefcase, CheckCircle, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  { src: "/images/caminhoeslocar.jpeg", alt: "Frota Locar" },
  { src: "/images/ambiental-secundaria.jpg", alt: "Educação Ambiental" },
  { src: "/images/lixeiraslocar.jpg", alt: "Gestão de Resíduos" },
  { src: "/images/coletalocar.jpg", alt: "Coleta Sustentável" },
];

const EnvironmentSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % carouselImages.length), []);
  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="meio-ambiente"
      className="py-20 bg-gradient-to-br from-[#034422] to-[#081c30] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto (Esquerda) + Carrossel (Direita) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compromisso com o{" "}
              <span style={{ color: "#c3cd86" }}>Meio Ambiente</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Nossa missão é proteger o meio ambiente através de práticas
              sustentáveis e inovação tecnológica, garantindo um futuro melhor
              para as próximas gerações.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Investimos pesado em tecnologia de ponta para destinação adequada
              de resíduos e em programas de educação ambiental, transformando o
              lixo em recurso e protegendo nossos ecossistemas.
            </p>
          </div>

          {/* Carrossel */}
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl select-none will-change-transform">
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

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />

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
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Award className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">35</div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Anos de Experiência
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Briefcase className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Empresas Atendidas
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <CheckCircle className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Destinação Adequada
            </div>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Clock className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Suporte Emergencial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;

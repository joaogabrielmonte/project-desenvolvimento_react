import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* IMAGEM DE FUNDO */}
      <img
        src="/images/fundo.jpg"
        alt="Operação da empresa"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.5) saturate(0.9)",
        }}
      />

      {/* OVERLAY VERDE CORPORATIVO */}
      <div className="absolute inset-0 bg-[#071f14]/65" />

      {/* GRADIENTE ESCURECIMENTO */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* VINHETA SUAVE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]" />

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-white">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ textShadow: "0px 6px 20px rgba(0,0,0,0.5)" }}
          >
            MAIS DE 35 ANOS DE UMA POLÍTICA DE <br />
            <span style={{ color: "#c3cd86" }}>
              DESENVOLVIMENTO SUSTENTÁVEL
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
            style={{ textShadow: "0px 3px 10px rgba(0,0,0,0.4)" }}
          >
            Uma empresa familiar que respeita o meio ambiente e as futuras
            gerações, oferecendo soluções sustentáveis e tecnológicas para o
            descarte responsável de resíduos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("servicos")}
              className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Nossos Serviços
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-white opacity-50 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
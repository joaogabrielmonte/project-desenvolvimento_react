import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import SustainableSection from "../SustainableSection";

const HeroSection = ({ scrollToSection }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
    <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-green-400 to-[#0e8344]" />
    <div className="absolute inset-0 bg-black/20" />

    <div className="relative w-full px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          MAIS DE 35 ANOS DE UMA POLÍTICA DE <br />
          <SustainableSection />
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
          Uma empresa familiar que respeita o meio ambiente e as futuras gerações, oferecendo soluções sustentáveis e tecnológicas para o descarte responsável de resíduos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("servicos")}
            className="px-8 py-4 bg-white text-[#0e8344] font-semibold rounded-xl hover:bg-green-50 transition-all"
          >
            Nossos Serviços <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0e8344] transition-all"
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-white" />
    </div>
  </section>
);

export default HeroSection;

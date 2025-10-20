import React from "react";
import { Leaf } from "lucide-react";

const EnvironmentSection = () => {
  return (
    <section
      id="meio-ambiente"
      className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compromisso com o <span className="text-green-300">Meio Ambiente</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Nossa missão é proteger o meio ambiente através de práticas sustentáveis e inovação tecnológica, garantindo um futuro melhor para as próximas gerações.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">15+</div>
                <div className="text-sm text-green-100">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">1000+</div>
                <div className="text-sm text-green-100">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">99%</div>
                <div className="text-sm text-green-100">Destinação Adequada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
                <div className="text-sm text-green-100">Suporte Emergencial</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Leaf className="w-32 h-32 text-green-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;

import React from "react";
import { Leaf } from "lucide-react";

const EnvironmentSection = () => {
  return (
    <section
      id="meio-ambiente"
      className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compromisso com o{" "}
              <span className="text-green-300">Meio Ambiente</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Nossa missão é proteger o meio ambiente através de práticas
              sustentáveis e inovação tecnológica, garantindo um futuro melhor
              para as próximas gerações.
            </p>

            {/* Cards de estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { valor: "15+", label: "Anos de Experiência" },
                { valor: "1000+", label: "Empresas Atendidas" },
                { valor: "99%", label: "Destinação Adequada" },
                { valor: "24/7", label: "Suporte Emergencial" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {item.valor}
                  </div>
                  <div className="text-sm text-green-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco de imagens */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full overflow-hidden">
            <div className="w-56 h-56 sm:w-64 sm:h-64 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <Leaf className="w-20 h-20 sm:w-28 sm:h-28 text-green-300" />
            </div>
            <div className="w-40 h-40 sm:w-56 sm:h-56 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <Leaf className="w-16 h-16 sm:w-24 sm:h-24 text-green-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;

import React from "react";
import { Leaf } from "lucide-react";

const EnvironmentSection = () => {
  return (
    <section
      id="meio-ambiente"
      className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifique-se que o grid NÃO cause overflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
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
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {item.valor}
                  </div>
                  <div className="text-sm text-green-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem / Ícone */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Leaf className="w-24 h-24 sm:w-32 sm:h-32 text-green-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;

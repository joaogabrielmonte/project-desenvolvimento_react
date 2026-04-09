/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React from "react";
import { Award, Briefcase, CheckCircle, Clock } from "lucide-react";

const EnvironmentSection = () => {
  return (
    <section
      id="meio-ambiente"
      className="py-20 bg-gradient-to-br from-[#034422] to-[#081c30] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto (Esquerda) + Imagens (Direita) */}
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

          {/* Imagens */}
          <div className="relative flex flex-col items-center md:block h-auto md:h-96">
            {/* Imagem principal */}
            <img
              src="/images/ambiental-principal.jpg"
              alt="Operação de Aterro Sanitário"
              className="w-80 sm:w-96 md:w-full h-64 sm:h-72 md:h-full object-cover rounded-2xl shadow-2xl"
            />

            {/* Imagem secundária */}
            <img
              src="/images/ambiental-secundaria.jpg"
              alt="Projeto de Educação Ambiental"
              className="
              w-44 h-44 sm:w-48 sm:h-48 object-cover rounded-xl shadow-lg border-4 border-gray-800
              mt-6
              md:mt-0
              md:absolute md:-bottom-8 md:-right-8
              md:transform-none
              mx-auto md:mx-0
              relative left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0
            "
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-28 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
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

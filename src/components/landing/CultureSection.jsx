/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React from "react";
// 1. Adicionar ArrowRight para consistência com o botão do Hero
import { Users, Shield, CheckCircle, Briefcase, ArrowRight } from "lucide-react";

// 2. Mover os 3 pontos para um array de dados, para facilitar a listagem
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
  return (
    // Fundo cinza claro para contrastar com a seção escura anterior
    <section id="carreiras" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. NOVO LAYOUT DE 2 COLUNAS */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna 1: Imagem (Substitua pela sua) */}
          <div className="w-full">
            <img
              // !! IMPORTANTE: Substitua por uma foto real da sua equipe ou operação !!
              src="/images/equipe-locar.jpg" 
              alt="Nossa Equipe Locar"
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Coluna 2: Conteúdo */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faça Parte do Nosso{" "}
              {/* 4. Voltamos para a cor verde principal, para consistência */}
              <span style={{ color: "#038242" }}>Time</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Com mais de 4.000 colaboradores, nosso maior patrimônio é a nossa
              gente. Investimos em um ambiente de trabalho seguro e com
              qualificação contínua.
            </p>

            {/* 5. A LISTA DE VALORES (Substitui os 3 cards) */}
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

            {/* 6. Botão CTA (Call to Action) */}
            <button
              onClick={() =>
                window.open(
                  "https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/",
                  "_blank"
                )
              }
              // Botão mais alinhado com o do Hero
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
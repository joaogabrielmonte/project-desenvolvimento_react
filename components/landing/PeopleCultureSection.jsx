import React from "react";
import { Users, Shield, CheckCircle, Briefcase } from "lucide-react";

const PeopleCultureSection = () => {
  return (
    <section id="pessoas & Cultura" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pessoas & <span style={{ color: "#c3cd86" }}>Cultura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe é nosso maior patrimônio. Investimos no desenvolvimento profissional e pessoal de cada colaborador, criando um ambiente de trabalho inclusivo e inovador.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <Users className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipe Especializada</h3>
            <p className="text-gray-600">Profissionais qualificados e em constante capacitação técnica.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança em Primeiro</h3>
            <p className="text-gray-600">Protocolos rigorosos de segurança e saúde ocupacional.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificações</h3>
            <p className="text-gray-600">Equipe certificada pelos principais órgãos ambientais.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              window.open(
                "https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/",
                "_blank"
              )
            }
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
          >
            <Briefcase className="w-5 h-5 mr-2 inline" />
            Ver Vagas Disponíveis
          </button>
        </div>
      </div>
    </section>
  );
};

export default PeopleCultureSection;

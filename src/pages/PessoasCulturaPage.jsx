import React from "react";
import { Users, Briefcase, Mail, ArrowRight } from "lucide-react";

const PessoasCulturaPage = () => {
  return (
    // Adicionamos padding-top para o Navbar fixo
    <div className="bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção de Cabeçalho */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Cor do ícone atualizada para verde */}
          <Users className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pessoas & <span style={{ color: "#038242" }}>Cultura</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Planejar, gerenciar e manter o processo de gestão de pessoas é de fundamental importância para a empresa, porque ela é composta de pessoas.
          </p>
        </div>

        {/* Layout de 2 colunas */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Coluna 1: Conteúdo de Texto (ocupa 3 de 5 colunas) */}
          <div className="md:col-span-3 text-gray-700 space-y-4 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">  Pessoas & <span style={{ color: "#038242" }}>Cultura</span></h2>
            <p>
              Muito mais do que entrevistar, selecionar e contratar funcionários, temos a preocupação em conhecer as necessidades e expectativas com um olhar humano, pensando no bem estar de todos, no crescimento e desenvolvimento profissional de cada funcionário.
            </p>
            <p>
              Nosso departamento de Recursos + Humanos existe para humanizar as relações entre os funcionários e a empresa, aproximar a administração da operação, lutar por benefícios, descobrir e reter talentos, recrutar pessoas mais eficientes, ouvir as necessidades de todos e qualificar chefias.
            </p>
            <div className="flex items-center pt-4">
                {/* Cor do ícone e link atualizada para verde */}
                <Mail className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <a href="mailto:recursosmaishumanos@locar.srv.br" className="font-semibold text-green-700 hover:underline">
                  recursosmaishumanos@locar.srv.br
                </a>
            </div>
          </div>

          {/* Coluna 2: Card de Vagas (ocupa 2 de 5 colunas) */}
          <div className="md:col-span-2 bg-gray-50 p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trabalhe Conosco</h3>
            <p className="text-gray-700 mb-6">
              Envie seu currículo para o nosso banco de talentos ou confira as vagas abertas em nosso portal.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <a href="mailto:curriculum@locar.srv.br" className="font-semibold text-green-700 hover:underline">
                  curriculum@locar.srv.br
                </a>
              </div>
              
              <button
                onClick={() => window.open("https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/", "_blank")}
                className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-green-600 rounded-lg transition-colors hover:bg-green-700"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Ver Vagas Abertas
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PessoasCulturaPage;


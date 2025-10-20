// src/pages/GrupoPage.jsx

import React from "react";
import { Users, Truck } from "lucide-react"; // Ícones para os stats

// Vamos definir os dados das 3 empresas que você mencionou
const groupCompanies = [
  {
    name: "Locar Gestão de Resíduos",
    description: "Responsável pelos resíduos sólidos urbanos.",
    logo: "/images/locar.png",
    color: "#038242", // Verde da Locar
  },
  {
    name: "GTR Ambiental",
    description: "Responsável pelos resíduos industriais.",
    logo: "/images/logo-gtr.png",
    color: "#038242", // Verde da GTR
  },
  {
    name: "I9 Paulista",
    description: "Concessão dos resíduos sólidos da cidade do Paulista/PE por 25 anos.",
    logo: "/images/logo-i9.png",
    color: "#182d70", // Azul da I9
  },
];

const GrupoPage = () => {
  return (
    // Adicionamos um padding-top para a página não ficar "atrás" do Navbar
    // e um fundo cinza claro para diferenciar da homepage
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Layout de 2 colunas: 3/5 para o texto, 2/5 para as logos */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Coluna 1: Texto e Stats */}
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span style={{ color: "#038242" }}>História</span>
            </h1>

            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                O Grupo Locar surgiu nos anos 90. Especializado em limpeza 
                urbana e gestão de resíduos sólidos urbanos e industriais, 
                destacou-se em Pernambuco como pioneira neste segmento.
              </p>
              <p>
                Hoje, o Grupo Locar atua em diversos municípios de Pernambuco, 
                Rio de Janeiro, Mato Grosso e São Paulo e tornou-se referência 
                nacional no setor.
              </p>
            </div>

            {/* Seção de Stats (números) */}
            <div className="mt-10 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Estrutura
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                  <Users className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="text-3xl font-bold text-green-700">4.000+</div>
                    <p className="text-gray-600">Colaboradores</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                  <Truck className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="text-3xl font-bold text-green-700">400+</div>
                    <p className="text-gray-600">Caminhões na Frota</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-6">
                Com uma equipe técnica robusta e uma frota moderna, o Grupo Locar, 
                em cada município que atua, leva a estrutura compatível com o porte 
                do serviço necessário. Além de recrutar mão-de-obra da própria região, 
                mantém um gerenciamento individualizado para cada cidade e supervisão operacional.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nosso <span style={{ color: "#c3cd86" }}>Compromisso</span>
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
               <p>
                A GTR Ambiental nasceu do desejo de fazer gestão e transporte de 
                resíduos industriais de uma forma diferenciada, onde a qualidade 
                na prestação do serviço anda sempre em sintonia com o cliente e a 
                busca da sustentabilidade está presente em todos os processos.
              </p>
              <p>
                São mais de 20 anos de uma política de desenvolvimento sustentável, 
                respeitando o meio ambiente e as futuras gerações, oferecendo serviços 
                para todas as áreas de manutenção ambiental, desde a limpeza e 
                conservação das cidades e indústrias à destinação correta do lixo, 
                contribuindo para minimizar os impactos sofridos ao meio ambiente.
              </p>
            </div>

          </div>

          {/* Coluna 2: Empresas (Logos) */}
          <div className="md:col-span-2">
            <div className="sticky top-28"> {/* Faz as logos "seguirem" o scroll */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empresas do Grupo
              </h2>
              <div className="space-y-6">
                {groupCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-start bg-white p-5 rounded-xl shadow-lg border-l-4"
                    style={{ borderLeftColor: company.color }}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 object-contain flex-shrink-0 mr-5"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {company.name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {company.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GrupoPage;
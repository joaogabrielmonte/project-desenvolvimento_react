import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
// 1. Importar o novo CompanyModal
import CompanyModal from "./CompanyModal"; 

// 2. ATUALIZAR 'companies' para incluir a 'description' de cada um
// (Eu peguei os textos daquela sua página /grupo que fizemos)
const companies = [
  {
    name: "Locar Gestão",
    sector: "Resíduos Sólidos Urbanos",
    logo: "/images/locar.png",
    color: "#038242",
    description: "A Locar Gestão de Resíduos é a empresa do grupo especializada em limpeza urbana e gestão de resíduos sólidos urbanos, atuando como pioneira no segmento em Pernambuco desde os anos 90.",
  },
  {
    name: "GTR Ambiental",
    sector: "Resíduos Industriais",
    logo: "/images/logo-gtr.png",
    color: "#038242",
    description: "A GTR Ambiental nasceu do desejo de fazer gestão e transporte de resíduos industriais de uma forma diferenciada, onde a qualidade na prestação do serviço anda sempre em sintonia com o cliente e a busca da sustentabilidade está presente em todos os processos.",
  },
  {
    name: "I9 Paulista",
    sector: "Concessão Municipal",
    logo: "/images/logo-i9.png",
    color: "#182d70",
    description: "A I9 Paulista é a empresa responsável pela concessão dos resíduos sólidos da cidade do Paulista/PE por um período de 25 anos, garantindo a gestão completa e de longo prazo para o município.",
  },
  {
    name: "I9 Jequié",
    sector: "Resíduos Municipal",
    logo: "/images/i9-jequie.png",
    color: "#182d70",
    description: "A I9 Jequié é a empresa responsável pela concessão dos resíduos sólidos da cidade de Jequié/BA, oferecendo soluções eficientes e sustentáveis para a gestão dos resíduos municipais.",
  }
];

const GrupoSection = () => {
  // 3. MUDAR O ESTADO
  // Em vez de true/false, vamos guardar QUAL empresa foi selecionada (ou null)
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <section id="grupo" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grupo <span style={{ color: "#038242" }}>LOCAR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um grupo consolidado no mercado ambiental, oferecendo soluções
            integradas para gestão de resíduos, consultoria ambiental e
            tecnologia sustentável.
          </p>
        </div>

        {/* O Grid estático de 3 cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto-fit">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all hover:shadow-xl"
              style={{ borderTop: `4px solid ${company.color}` }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-20 w-auto mx-auto mb-6 object-contain"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {company.name}
              </h3>
              {/* O 'sector' agora é a descrição curta */}
              <p className="text-gray-600 text-center mb-8 flex-grow">
                {company.sector}
              </p>

              {/* 4. MUDAR O ONCLICK
                Agora, o clique guarda o objeto 'company' inteiro no estado
              */}
              <button
                onClick={() => setSelectedCompany(company)}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-green-600 rounded-lg transition-colors hover:bg-green-700"
              >
                Saiba Mais {/* Mudei o texto do botão */}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Renderizar o novo Modal, passando a empresa selecionada */}
      <CompanyModal 
        company={selectedCompany} 
        onClose={() => setSelectedCompany(null)} 
      />
    </section>
  );
};

export default GrupoSection;
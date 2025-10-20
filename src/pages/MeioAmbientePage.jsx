import React from "react";
import { Leaf, Droplets, BookOpen, Users, Recycle, TreePine } from "lucide-react";

// Dados para os cards de ações sustentáveis
const sustainableActions = [
  {
    icon: <Droplets />,
    title: "Uso de Biodiesel",
    description: "Utilização de biodiesel em 100% da nossa frota de veículos.",
  },
  {
    icon: <TreePine />,
    title: "Reflorestamento",
    description: "Cultivo e plantio de árvores para reflorestamento e compensação ambiental.",
  },
  {
    icon: <Recycle />,
    title: "Reciclagem Interna",
    description: "Reciclagem de fardamentos antigos e uso de vassouras feitas de garrafas PET.",
  },
];

const MeioAmbientePage = () => {
  return (
    // Adicionamos padding-top para o Navbar fixo
    <div className="bg-gray-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção de Cabeçalho */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Leaf className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso Compromisso <span style={{ color: "#038242" }}>Socioambiental</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Desde o início de suas atividades, a Locar reafirma, a cada nova ação e serviço, seu compromisso com o meio ambiente e as futuras gerações.
          </p>
        </div>

        {/* Layout de 2 colunas: Consciência e Responsabilidade */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Coluna 1: Consciência Ambiental */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Consciência Ambiental
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Uma de nossas preocupações constantes é investir em técnicas que busquem a sustentabilidade, para atender as necessidades de seus clientes sem comprometer os recursos naturais. Além disso, possuímos todas as licenças ambientais para a execução de nossos serviços.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Nossas Ações</h3>
            <div className="space-y-6">
              {sustainableActions.map((action) => (
                <div key={action.title} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 text-green-700 rounded-lg p-3">
                    {React.cloneElement(action.icon, { className: "w-6 h-6" })}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{action.title}</h4>
                    <p className="text-gray-600">{action.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Responsabilidade Social */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Responsabilidade Social
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Investimos em programas de educação ambiental, oficinas e palestras para alunos de escolas públicas e comunidades carentes nos municípios onde atuamos, contribuindo para a formação de cidadãos mais conscientes de seu papel na preservação ambiental.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-start">
                <BookOpen className="w-10 h-10 text-blue-700 flex-shrink-0 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">Projeto Educar</h3>
                  <p className="text-gray-700 mt-2">
                    Em todas as nossas unidades, mantemos o Projeto Educar, que oferece curso de alfabetização de adultos voltado para os nossos funcionários, reforçando nosso compromisso com o desenvolvimento humano e social.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MeioAmbientePage;

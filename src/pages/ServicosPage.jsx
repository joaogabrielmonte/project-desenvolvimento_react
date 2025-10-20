import React, { useState } from "react";
import {
  Recycle,
  Truck,
  Shield,
  Leaf,
  Building2,
  FileText,
  Users,
  CheckCircle,
} from "lucide-react";

// Dados completos dos serviços
const services = [
  {
    icon: <Recycle />,
    title: "Coleta de Resíduos Sólidos",
    description: `Coletar o lixo significa recolher o lixo acondicionado por quem o produz para encaminhá-lo, mediante transporte adequado, a uma estação de transferência, tratamento ou disposição final. O objetivo é evitar a proliferação de vetores causadores de doenças.`,
    features: [
      "Domiciliares", "Containerizada", "Comerciais", "Públicos", 
      "Podas de árvores", "Porta a porta", "Volumosos", "Construção civil", 
      "Seletiva", "Hospitalar",
    ],
  },
  {
    icon: <Truck />,
    title: "Varrição de Vias",
    description: `Varrição ou varredura é a principal atividade de limpeza de logradouros públicos. Inclui remoção de areia, folhas, papéis e outros detritos, dependendo da arborização, trânsito de veículos e circulação de pedestres.`,
    features: [
      "Limpeza urbana", "Prevenção de acúmulo de lixo", "Segurança e higiene pública",
    ],
  },
  {
    icon: <Shield />,
    title: "Capinação e Pintura de Meio Fio",
    description: `Atividade essencial em ruas, passeios sem asfalto e margens de rios e canais. Realizamos capinação manual e pintura de meio-fio, garantindo a limpeza e a manutenção visual das vias urbanas.`,
    features: [
      "Capinação manual", "Pintura de meio-fio", "Limpeza de áreas externas",
    ],
  },
  {
    icon: <Leaf />,
    title: "Limpeza de Feiras e Praias",
    description: `Após o término das feiras, a retirada do lixo deve ser rápida para desobstruir o trânsito. A limpeza de praias pode ser manual ou mecânica, removendo resíduos de banhistas e detritos trazidos pela maré.`,
    features: [
      "Feiras livres", "Praias", "Horários programados", "Equipamentos manuais e mecânicos",
    ],
  },
  {
    icon: <Building2 />,
    title: "Unidade de Transferência de Resíduos",
    description: `Unidade específica para descarrego temporário de resíduos, com desnível entre pavimentos, permitindo que caminhões façam a descarga diretamente em veículos de maior capacidade para otimizar o transporte.`,
    features: [
      "Descarrego eficiente", "Redução de transporte direto", "Organização logística",
    ],
  },
  {
    icon: <FileText />,
    title: "Operação de Aterro Sanitário",
    description: `Gerenciamento completo do aterro sanitário, incluindo projeto, remediação, construção e operação, garantindo a destinação ambientalmente correta e segura dos resíduos sólidos.`,
    features: ["Projeto", "Remediação", "Construção e Operação"],
  },
  {
    icon: <Users />,
    title: "Projeto de Educação Ambiental",
    description: `Trabalho de envolvimento, aprendizagem e mudança de comportamento da população através de cursos, debates e participação de profissionais experientes para promover a conscientização.`,
    features: [
      "Cursos educativos", "Debates", "Engajamento comunitário", "Mudança de comportamento",
    ],
  },
];

const ServicosPage = () => {
  // Estado para controlar qual serviço está ativo/selecionado
  const [activeService, setActiveService] = useState(services[0]);

  return (
    // Adicionamos padding-top para o Navbar fixo
    <div className="bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção de Cabeçalho com o texto que você forneceu */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span style={{ color: "#038242" }}>Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A Locar oferece um serviço completo e moderno de gestão de resíduos gerados por municípios, indústrias e comércio, que conta com gerenciamento técnico, administrativo, operacional, fiscalização e apoio logístico.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            Com experiência e conhecimento, nosso departamento técnico cuida dos projetos e da implantação dos procedimentos operacionais, garantindo uma prestação de serviço baseada no planejamento e no controle de qualidade.
          </p>
        </div>

        {/* Novo layout lateral (abas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Coluna 1: O menu lateral com os serviços */}
          <div className="md:col-span-1 flex flex-col space-y-2">
            {services.map((service) => (
              <button
                key={service.title}
                onClick={() => setActiveService(service)}
                className={`flex items-center p-4 rounded-lg transition-all text-left w-full ${
                  activeService.title === service.title
                    ? "bg-green-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {React.cloneElement(service.icon, { className: 'w-6 h-6 mr-4 flex-shrink-0' })}
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Coluna 2: O conteúdo do serviço selecionado */}
          <div className="md:col-span-2 sticky top-28">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    {React.cloneElement(activeService.icon, { className: 'w-8 h-8' })}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 ml-4">{activeService.title}</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{activeService.description}</p>
                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-md font-semibold text-gray-700 mb-3">Principais Atividades:</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {activeService.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;


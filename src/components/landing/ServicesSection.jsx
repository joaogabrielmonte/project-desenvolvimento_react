import React, { useState } from "react"; // Importar o useState
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

// Os dados dos serviços (sem alteração)
const services = [
  {
    icon: <Recycle className="w-6 h-6" />, // Ícone um pouco menor para o menu
    title: "Coleta de Resíduos Sólidos",
    description: `Coletar o lixo significa recolher o lixo acondicionado por quem o produz para encaminhá-lo, mediante transporte adequado, a uma estação de transferência, tratamento ou disposição final. O objetivo é evitar a proliferação de vetores causadores de doenças, como ratos, baratas e moscas.`,
    features: [
      "Domiciliares", "Containerizada", "Comerciais", "Públicos", 
      "Podas de árvores", "Porta a porta", "Volumosos", "Construção civil", 
      "Seletiva", "Hospitalar",
    ],
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Varrição de Vias",
    description: `Varrição ou varredura é a principal atividade de limpeza de logradouros públicos. Inclui remoção de areia, folhas, papéis, pontas de cigarro, dependendo da arborização, trânsito de veículos, estado do calçamento e circulação de pedestres.`,
    features: [
      "Limpeza urbana", "Prevenção de acúmulo de lixo", "Segurança e higiene pública",
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Capinação e Pintura de Meio Fio",
    description: `Atividade essencial em ruas, passeios sem asfalto e margens de rios e canais. Realizamos capinação manual e pintura de meio-fio, garantindo limpeza e manutenção das vias.`,
    features: [
      "Capinação manual", "Pintura de meio-fio", "Limpeza de áreas externas",
    ],
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Limpeza de Feiras e Praias",
    description: `Após o término das feiras, a retirada do lixo deve ser rápida para desobstruir o trânsito e evitar fermentação da matéria orgânica. A limpeza de praias pode ser manual ou mecânica, removendo resíduos de banhistas e detritos trazidos pela maré.`,
    features: [
      "Feiras livres", "Praias", "Horários programados", "Equipamentos manuais e mecânicos",
    ],
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Unidade de Transferência", // Título encurtado
    description: `Unidade específica para descarrego temporário de resíduos, com desnível entre pavimentos, permitindo que caminhões façam a descarga diretamente em veículos de transferência.`,
    features: [
      "Descarrego eficiente", "Redução de transporte direto", "Organização logística",
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Operação de Aterro Sanitário",
    description: `Gerenciamento completo do aterro sanitário, incluindo projeto, remediação, construção e operação, garantindo destinação ambientalmente correta dos resíduos.`,
    features: ["Projeto", "Remediação", "Construção e Operação"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Educação Ambiental", // Título encurtado
    description: `Trabalho de envolvimento, aprendizagem e mudança de comportamento da população através de cursos, debates e participação de profissionais experientes.`,
    features: [
      "Cursos educativos", "Debates", "Engajamento comunitário", "Mudança de comportamento",
    ],
  },
];

const ServicesSection = () => {
  // 1. Criar um estado para guardar o serviço ATIVO
  // Começa com o primeiro item da lista
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título (sem alteração) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span style={{ color: "#038242" }}>Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para gestão responsável de resíduos com
            tecnologia avançada e equipe especializada.
          </p>
        </div>

        {/* 2. NOVO LAYOUT DE GRID (1/3 para menu, 2/3 para conteúdo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Coluna 1: O MENU DE BOTÕES */}
          <div className="md:col-span-1 flex flex-col space-y-2">
            {services.map((service) => (
              <button
                key={service.title}
                onClick={() => setActiveService(service)} // 3. Atualiza o serviço ativo
                className={`flex items-center p-4 rounded-lg transition-all text-left ${
                  activeService.title === service.title
                    // Estilo do botão ATIVO
                    ? "bg-green-600 text-white shadow-lg"
                    // Estilo do botão INATIVO
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {service.icon}
                <span className="ml-4 font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Coluna 2: O CONTEÚDO DO SERVIÇO ATIVO */}
          <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 sticky top-28">
            {/* 4. O conteúdo aqui é dinâmico, baseado no 'activeService' */}
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeService.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {activeService.description}
            </p>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Principais Atividades:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {activeService.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from "react";
import { CheckCircle, Recycle, Truck, Shield, Leaf, Building2, FileText, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Coleta de Resíduos Sólidos",
      description: "Coletar o lixo significa recolher o lixo acondicionado por quem o produz...",
      features: ["Domiciliares", "Containerizada", "Comerciais", "Públicos"],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Varrição de Vias",
      description: "Varrição ou varredura é a principal atividade de limpeza de logradouros públicos...",
      features: ["Limpeza urbana", "Prevenção de acúmulo de lixo", "Segurança e higiene pública"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Capinação e Pintura de Meio Fio",
      description: "Atividade essencial em ruas, passeios sem asfalto e margens de rios e canais...",
      features: ["Capinação manual", "Pintura de meio-fio", "Limpeza de áreas externas"],
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Limpeza de Feiras e Praias",
      description: "Após o término das feiras, a retirada do lixo deve ser rápida...",
      features: ["Feiras livres", "Praias", "Horários programados", "Equipamentos manuais e mecânicos"],
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Unidade de Transferência de Resíduos",
      description: "Unidade específica para descarrego temporário de resíduos...",
      features: ["Descarrego eficiente", "Redução de transporte direto", "Organização logística"],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Operação de Aterro Sanitário",
      description: "Gerenciamento completo do aterro sanitário...",
      features: ["Projeto", "Remediação", "Construção e Operação"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Projeto de Educação Ambiental",
      description: "Trabalho de envolvimento, aprendizagem e mudança de comportamento...",
      features: ["Cursos educativos", "Debates", "Engajamento comunitário", "Mudança de comportamento"],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span style={{ color: "#038242" }}>Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para gestão responsável de resíduos com tecnologia avançada e equipe especializada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

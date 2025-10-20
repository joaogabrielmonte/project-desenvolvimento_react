import React from "react";
import { X } from "lucide-react";

// Este modal recebe a 'company' selecionada e a função 'onClose'
const CompanyModal = ({ company, onClose }) => {
  // Se nenhuma empresa está selecionada (company é null), não renderiza nada
  if (!company) {
    return null;
  }

  return (
    // 1. O Fundo Escuro (Backdrop)
    <div
      onClick={onClose} // Fecha ao clicar no fundo
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    >
      {/* 2. O Painel Branco (Modal) */}
      <div
        onClick={(e) => e.stopPropagation()} // Impede de fechar ao clicar DENTRO do painel
        className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-xl overflow-hidden flex flex-col"
      >
        {/* Botão de Fechar 'X' */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Conteúdo específico da empresa */}
        <div className="overflow-y-auto p-8 md:p-12">
          {/* Banner do Logo */}
          <div 
            className="w-full h-24 mb-8 flex items-center justify-center rounded-lg" 
            // Usa a cor da empresa (com 10% de opacidade) como fundo
            style={{ backgroundColor: company.color + '15' }} 
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {company.name}
          </h1>
          
          {/* Subtítulo (o 'sector' antigo) */}
          <p className="text-lg text-gray-600 text-center mb-6 font-medium" style={{ color: company.color }}>
            {company.sector}
          </p>
          
          {/* História/Descrição detalhada */}
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>{company.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;
import React, { useState, useEffect } from "react";
import { Building, MapPin } from "lucide-react";

const FiliaisPage = () => {
  const [filiais, setFiliais] = useState([]);

  useEffect(() => {
    fetch('/filiais.json')
      .then(res => res.json())
      .then(data => setFiliais(data))
      .catch(err => console.error("Erro ao carregar filiais:", err));
  }, []);

  return (
    <div className="bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Building className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossas <span style={{ color: "#038242" }}>Unidades</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Com sede em Recife, Pernambuco, a Locar Gestão de Resíduos possui filiais e pontos de apoio em outros estados e importantes cidades brasileiras para garantir a melhor logística e atendimento.
          </p>
        </div>

        {/* Grid com as filiais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filiais.map((filial) => (
            <div key={filial.id} className="bg-gray-50 p-6 rounded-2xl shadow-lg border-t-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{filial.name}</h2>
              <div className="flex items-start text-gray-600">
                <MapPin className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="leading-snug">
                  {filial.address}<br/>
                  {filial.neighborhood} - {filial.cityState}<br/>
                  {filial.cep}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiliaisPage;

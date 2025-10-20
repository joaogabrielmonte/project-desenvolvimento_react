import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const FiliaisSection = () => {
  const [filiais, setFiliais] = useState([]);

  useEffect(() => {
    fetch('/filiais.json')
      .then(res => res.json())
      .then(data => setFiliais(data))
      .catch(err => console.error("Erro ao carregar filiais:", err));
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nossa Presença Nacional
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos estrategicamente localizados para atender todo o Brasil com eficiência.
          </p>
        </div>
        
        {/* Lista compacta de cidades */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          {filiais.map(filial => (
            <div key={filial.id} className="flex items-center text-gray-700">
              <MapPin className="w-4 h-4 mr-2 text-green-600" />
              <span className="font-medium">{filial.cityState}</span>
            </div>
          ))}
        </div>

        {/* Botão para a página completa */}
        <div className="text-center">
            <Link 
                to="/filiais"
                className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow transition-transform hover:scale-105"
            >
                Ver todos os endereços
                <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FiliaisSection;


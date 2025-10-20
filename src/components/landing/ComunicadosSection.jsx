import React, { useEffect, useState } from "react";
// 1. Importar Link e ícones
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const ComunicadosSection = () => {
  const [comunicados, setComunicados] = useState([]);

  useEffect(() => {
    fetch("./comunicados.json")
      .then((res) => res.json())
      // 2. Pegamos o JSON e cortamos para mostrar SÓ OS 3 PRIMEIROS
      .then((data) => setComunicados(data.slice(0, 3)))
      .catch((err) => console.error("Erro ao carregar comunicados:", err));
  }, []); // O '[]' garante que isso roda só uma vez

  return (
    // 3. Seção com 'bg-white' para alternar com a seção 'bg-gray-50' anterior
    <section id="comunicados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span style={{ color: "#038242" }}>Comunicados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantenha-se informado sobre as últimas notícias e comunicados
            internos da Locar.
          </p>
        </div>

        {/* 4. Grid de 3 colunas para os 3 comunicados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {comunicados.map((c) => (
            <div
              key={c.id}
              // 5. Cards com 'bg-gray-50' (cinza claro) para contrastar
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col"
            >
              <div className="flex-shrink-0">
                <FileText className="w-8 h-8 text-green-600 mb-3" />
              </div>
              <h3 className="text-xl font-semibold text-green-700">{c.titulo}</h3>
              {/* flex-grow empurra o botão e data para baixo */}
              <p className="text-gray-600 mt-2 flex-grow">{c.descricao}</p>
              <p className="text-sm text-gray-400 mt-4">
                Publicado em: {new Date(c.data).toLocaleDateString("pt-BR")}
              </p>
              <a
                href={c.arquivo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition self-start"
              >
                Ver Documento
              </a>
            </div>
          ))}
        </div>

        {/* 6. Botão "Ver Todos" que leva para a página de comunicados */}
        <div className="text-center">
          <Link
            to="/comunicados" // A nova rota que vamos criar
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
          >
            Ver Todos os Comunicados
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ComunicadosSection;
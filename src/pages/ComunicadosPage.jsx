import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";

const ComunicadosPage = () => {
  const [comunicados, setComunicados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./comunicados.json")
      .then((res) => res.json())
      .then((data) => {
        setComunicados(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar comunicados:", err);
        setIsLoading(false);
      });
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center p-10">
          <p className="text-gray-500">Carregando comunicados...</p>
        </div>
      );
    }

    if (comunicados.length === 0) {
      return (
        <div className="text-center bg-white p-10 rounded-xl shadow border border-gray-100">
          <Info className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">
            Nenhum comunicado no momento
          </h3>
          <p className="text-gray-500 mt-2">
            Por favor, volte mais tarde para ver as últimas atualizações.
          </p>
        </div>
      );
    }

    return (
      <div className="grid gap-6 md:grid-cols-2">
        {comunicados.map((c) => (
          <div
            key={c.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-green-700">{c.titulo}</h2>
            <p className="text-gray-600 mt-2">{c.descricao}</p>
            <p className="text-sm text-gray-400 mt-4">
              Publicado em: {new Date(c.data).toLocaleDateString("pt-BR")}
            </p>
            <a
              href={c.arquivo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Ver Documento
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 pt-28 pb-16 min-h-screen"> 
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Comunicados Internos
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default ComunicadosPage;

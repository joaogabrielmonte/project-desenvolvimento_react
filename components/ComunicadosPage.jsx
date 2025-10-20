import React, { useEffect, useState } from "react";

const ComunicadosPage = () => {
  const [comunicados, setComunicados] = useState([]);

  useEffect(() => {
    fetch("./comunicados.json")
      .then((res) => res.json())
      .then((data) => setComunicados(data))
      .catch((err) => console.error("Erro ao carregar comunicados:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Comunicados Internos
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {comunicados.map((c) => (
            <div
              key={c.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-green-700">{c.titulo}</h2>
              <p className="text-gray-600 mt-2">{c.descricao}</p>
              <p className="text-sm text-gray-400 mt-1">
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
      </div>
    </div>
  );
};

export default ComunicadosPage;

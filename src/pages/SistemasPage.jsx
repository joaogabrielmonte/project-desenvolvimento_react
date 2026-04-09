/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React from "react";
import { ExternalLink } from "lucide-react";

// Dados dos sistemas, agora dentro da página
const sistemas = [
  {
    name: "GirosPlus",
    url: "https://sistemas.locar.srv.br/girosplus",
    image: "/images/sistemas/sistema-giros.png",
    desc: "Gestão integrada de processos e serviços.",
  },
  {
    name: "Censo RH",
    url: "https://sistemas.locar.srv.br/censo",
    image: "/images/sistemas/censo-Rh.png",
    desc: "Acompanhamento de colaboradores e dados de RH.",
  },
  {
    name: "Locar Universidade",
    url: "https://universidade-corporativa-grupo-locar.memberkit.com.br",
    image: "/images/sistemas/locar-universidade.png",
    desc: "Plataforma de treinamentos e capacitação online.",
  },
  {
    name: "Microsoft 365",
    url: "https://m365.cloud.microsoft/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png",
    desc: "E-mail, Teams, Word, Excel e demais ferramentas Microsoft.",
  },
];

const SistemasPage = () => {
  return (
    <div className="bg-white pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span style={{ color: "#038242" }}>Sistemas</span>
          </h1>
          <p className="text-xl text-gray-600">
            Acesse nossas plataformas para gestão, treinamento e recursos humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sistemas.map((sistema) => (
            <a
              key={sistema.name}
              href={sistema.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-50 p-6 rounded-2xl shadow-lg border border-transparent hover:border-green-500 hover:shadow-xl transition-all"
            >
              <img
                src={sistema.image}
                alt={sistema.name}
                className="h-24 w-auto mx-auto mb-4 object-contain"
              />
              <h2 className="text-2xl font-bold text-center text-gray-800 group-hover:text-green-600 transition-colors">
                {sistema.name}
              </h2>
              <p className="text-gray-600 text-center mt-2">{sistema.desc}</p>
              <div className="flex items-center justify-center mt-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold">Acessar Plataforma</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SistemasPage;

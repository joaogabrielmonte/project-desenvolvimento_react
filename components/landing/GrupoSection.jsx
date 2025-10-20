import React from "react";
import CompaniesCarouselContinuous from "../CompaniesCarouselContinuous";

const GrupoSection = () => {
  const companies = [
    {
      name: "Locar Gestão",
      sector: "Gestão de Resíduos",
      color: "#038242",
      logo: "/images/locar.png",
    },
    {
      name: "I9 Paulista",
      sector: "Residuo Industrial",
      color: "#182d70",
      logo: "/images/logo-i9.png",
    },
    {
      name: "GTR Ambiental",
      sector: "Soluções Tecnológicas",
      color: "#038242",
      logo: "/images/logo-gtr.png",
    },
  ];

  return (
    <section id="grupo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grupo <span style={{ color: "#038242" }}>LOCAR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um grupo consolidado no mercado ambiental, oferecendo soluções
            integradas para gestão de resíduos, consultoria ambiental e
            tecnologia sustentável.
          </p>
        </div>

        <CompaniesCarouselContinuous companies={companies} />
      </div>
    </section>
  );
};

export default GrupoSection;

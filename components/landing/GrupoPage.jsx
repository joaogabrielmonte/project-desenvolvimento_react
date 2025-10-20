import React from "react";
import CompaniesCarouselContinuous from "../CompaniesCarouselContinuous";

const GrupoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Grupo <span style={{ color: "#038242" }}>LOCAR</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Um grupo consolidado no mercado ambiental, oferecendo soluções
          integradas para gestão de resíduos, consultoria ambiental e
          tecnologia sustentável.
        </p>
        <CompaniesCarouselContinuous
          companies={[
            { name: "Locar Gestão", sector: "Gestão de Resíduos", color: "#038242", logo: "/images/locar.png" },
            { name: "I9 Paulista", sector: "Resíduo Industrial", color: "#182d70", logo: "/images/logo-i9.png" },
            { name: "GTR Ambiental", sector: "Soluções Tecnológicas", color: "#038242", logo: "/images/logo-gtr.png" },
          ]}
        />
      </div>
    </div>
  );
};

export default GrupoPage;

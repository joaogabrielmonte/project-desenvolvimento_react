import React from "react";

// Seções do site
import Header from "./landing/Header.jsx";
import HeroSection from "./landing/HeroSection.jsx";
import ServicesSection from "./landing/ServicesSection.jsx";
import EnvironmentSection from "./landing/EnvironmentSection.jsx";
import PeopleCultureSection from "./landing/PeopleCultureSection.jsx";
import ComunicadosSection from "./landing/ComunicadosSection.jsx";
import ContactSection from "./landing/ContactSection.jsx";
import Footer from "./landing/Footer.jsx";

const LocarLanding = () => {
  return (
    <div className="font-sans antialiased">
      {/* Cabeçalho e navegação */}
      <Header />

      {/* Seção Hero */}
      <HeroSection />

      {/* Seção de serviços */}
      <ServicesSection />

      {/* Seção Meio Ambiente */}
      <EnvironmentSection />

      {/* Seção Pessoas & Cultura */}
      <PeopleCultureSection />

      {/* Seção Comunicados */}
      <ComunicadosSection />

      {/* Seção Contato */}
      <ContactSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default LocarLanding;

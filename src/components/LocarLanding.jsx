import React, { useState } from "react";
// Importe as seções
import HeroSection from "./landing/HeroSection.jsx";
import GrupoSection from "./landing/GrupoSection.jsx";
import ServicesSection from "./landing/ServicesSection.jsx";
import EnvironmentSection from "./landing/EnvironmentSection.jsx";
import CultureSection from "./landing/CultureSection.jsx";
import ComunicadosSection from "./landing/ComunicadosSection.jsx";

const LocarLanding = () => {
  // Lógica de scroll para os botões do Hero
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Passe a função de scroll APENAS para os componentes 
          da homepage que precisam dela (como o Hero) */}
      <HeroSection scrollToSection={scrollToSection} />
      
      <GrupoSection />
      <ServicesSection />
      <EnvironmentSection />
      <CultureSection />

      {/* A seção de comunicados agora é importada corretamente */}
      <ComunicadosSection />

      {/* A seção de contato foi movida para o Layout para garantir a ordem correta */}
    </>
  );
};

export default LocarLanding;


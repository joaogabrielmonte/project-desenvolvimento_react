/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React from "react";
// Importe as seções
import HeroSection from "./landing/HeroSection.jsx";
import GrupoSection from "./landing/GrupoSection.jsx";
import ServicesSection from "./landing/ServicesSection.jsx";
import EnvironmentSection from "./landing/EnvironmentSection.jsx";
import CultureSection from "./landing/CultureSection.jsx";
import ComunicadosSection from "./landing/ComunicadosSection.jsx";


const LocarLanding = () => {
  // Lógica de scroll para os botões do Hero

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* O Hero não precisa de reveal — já está visível no carregamento */}
      <HeroSection scrollToSection={scrollToSection} />
      
      <GrupoSection />

      <ServicesSection />

      <EnvironmentSection />

      <CultureSection />

      <ComunicadosSection />
    </>
  );
};

export default LocarLanding;


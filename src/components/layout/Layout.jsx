/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FiliaisSection from "../landing/FiliaisSection";
import { Contact } from "lucide-react";
import ContactSection from "../landing/ContactSection";
import CookieBanner from "../CookieBanner";

// Os dados que o Navbar precisa
const sistemas = [
  {
    name: "GirosPlus",
    url: "https://sistemas.locar.srv.br/girosplus",
    image: "/images/sistemas/sistema-giros.png",
    desc: "Gestão integrada de processos e serviços.",
  },
  // {
  //   name: "Censo RH",
  //   url: "https://sistemas.locar.srv.br/censo",
  //   image: "/images/sistemas/censo-Rh.png",
  //   desc: "Acompanhamento de colaboradores e dados de RH.",
  // },
  {
    name: "Universidade Corporativa",
    url: "https://universidade-corporativa-grupo-locar.memberkit.com.br", 
    image: "/images/sistemas/locar-universidade.png",
    desc: "Plataforma de treinamentos e capacitação online.",
  },
  {
    name: "Microsoft 365",
    url: "https://portal.office.com/",
    image: "/images/sistemas/microsoft-365.png",
    desc: "E-mail, Teams, Word, Excel e demais ferramentas Microsoft.",
  },
];

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSistemasOpen, setIsSistemasOpen] = useState(false);
  
  // Ouve a localização para fechar o menu em mudança de rota
  const location = useLocation();

  useEffect(() => {
    // Fecha o menu mobile quando a rota muda
    setIsMenuOpen(false);
    // Rola para o topo da nova página
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lógica de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Adicionado flexbox para garantir que o footer fique no final
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isSistemasOpen={isSistemasOpen}
        setIsSistemasOpen={setIsSistemasOpen}
        sistemas={sistemas}
      />

      {/* O conteúdo da página cresce para preencher o espaço */}
      <main className="flex-grow">
        <div key={location.key} className="page-transition">
          <Outlet />
        </div>
      </main>

      

      {/* Oculta na /filiais, /ouvidoria, /grupo e /denuncia */}
      {/* FiliaisSection desativada temporariamente */}
      {location.pathname !== '/contato' && location.pathname !== '/ouvidoria' && location.pathname !== '/denuncia' && <ContactSection />}
     

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;


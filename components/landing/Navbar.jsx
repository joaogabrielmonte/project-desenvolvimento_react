import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Briefcase, LogIn } from "lucide-react";

const Navbar = ({ scrollToSection, sistemas }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSistemasOpen, setIsSistemasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "home",
    "grupo",
    "servicos",
    "meio-ambiente",
    "pessoas & Cultura",
    "contato",
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <img src="/images/locar.png" alt="Logo" className="w-20 h-20" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm font-medium capitalize ${
                activeSection === item
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {item === "meio-ambiente" ? "Meio Ambiente" : item === "servicos" ? "Serviços" : item}
            </button>
          ))}

          {/* Sistemas Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSistemasOpen(!isSistemasOpen)}
              className="flex items-center px-4 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              Sistemas
              <ChevronDown className={`w-4 h-4 ml-2 ${isSistemasOpen ? "rotate-180" : ""}`} />
            </button>
            {isSistemasOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-lg border border-gray-200 z-50">
                {sistemas.map((s, idx) => (
                  <button key={idx} onClick={() => window.open(s.url, "_blank")}>
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vagas */}
          <button
            onClick={() =>
              window.open(
                "https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/",
                "_blank"
              )
            }
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Vagas
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React from "react";
import {
  ChevronDown,
  Menu,
  X,
  LogIn,
  Briefcase,
} from "lucide-react";

// Recebe todos os estados e funções do LocarLanding como props
const Navbar = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  isSistemasOpen,
  setIsSistemasOpen,
  sistemas,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/images/grupolocar.png"
              alt="Grupo Locar"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "home",
              "grupo",
              "servicos",
              "meio-ambiente",
              "pessoas & Cultura",
              "contato",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors capitalize ${
                  activeSection === item
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item === "meio-ambiente"
                  ? "Meio Ambiente"
                  : item === "servicos"
                  ? "Serviços"
                  : item}
              </button>
            ))}

            {/* Botões Sistemas e Vagas */}
            <div className="flex items-center space-x-2">
              {/* Dropdown Sistemas */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSistemasOpen(!isSistemasOpen)}
                  className="flex items-center px-4 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  Sistemas
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform ${
                      isSistemasOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isSistemasOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-lg border border-gray-200 z-50">
                    <div className="p-4 grid grid-cols-1 gap-4">
                      {sistemas.map((s, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => window.open(s.url, "_blank")}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors"
                        >
                          <img
                            src={s.image}
                            alt={s.name}
                            className="w-10 h-10 object-contain"
                          />
                          <div className="text-left">
                            <p className="text-sm font-medium text-gray-700">
                              {s.name}
                            </p>
                            <p className="text-xs text-gray-500">{s.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Botão Vagas */}
              <button
                onClick={() =>
                  window.open(
                    "https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/",
                    "_blank"
                  )
                }
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Vagas
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {[
              "home",
              "grupo",
              "servicos",
              "meio-ambiente",
              "pessoas & Cultura",
              "contato",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 capitalize"
              >
                {item === "meio-ambiente"
                  ? "Meio Ambiente"
                  : item === "servicos"
                  ? "Serviços"
                  : item}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <button
                type="button"
                onClick={() => setIsSistemasOpen(true)} // Ajuste: pode ser melhor navegar para uma página de sistemas no mobile
                className="flex items-center w-full px-4 py-2 text-green-700 bg-green-50 rounded-lg"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sistemas
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/",
                    "_blank"
                  )
                }
                className="flex items-center w-full px-4 py-2 text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Vagas
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
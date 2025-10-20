import React, { useState } from "react";
import { ChevronDown, Menu, X, Briefcase, LogIn } from "lucide-react";

const Header = ({ scrollToSection, activeSection, sistemas }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSistemasOpen, setIsSistemasOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "grupo", label: "Grupo" },
    { id: "servicos", label: "Serviços" },
    { id: "meio-ambiente", label: "Meio Ambiente" },
    { id: "pessoas-cultura", label: "Pessoas & Cultura" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/locar.png"
              alt="Logo Locar"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium capitalize ${
                  activeSection === item.id
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.label}
              </button>
            ))}

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 capitalize"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <button
                type="button"
                onClick={() => setIsSistemasOpen(!isSistemasOpen)}
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

export default Header;

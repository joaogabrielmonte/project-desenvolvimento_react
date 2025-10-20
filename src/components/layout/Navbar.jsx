import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, LogIn, Briefcase } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home", id: "home" },
  { path: "/grupo", label: "Grupo", id: "grupo" },
  { path: "/servicos", label: "Serviços", id: "servicos" },
  { path: "/meio-ambiente", label: "Meio Ambiente", id: "meio-ambiente" },
  { path: "/pessoas-cultura", label: "Pessoas & Cultura", id: "pessoas-cultura" },
  { path: "/contato", label: "Contato", id: "contato" },
];

const Navbar = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  isSistemasOpen,
  setIsSistemasOpen,
  sistemas,
}) => {
  const location = useLocation();
  const activePath = location.pathname;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // detecta mobile
  const isMenuDark = isScrolled || activePath !== "/";

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
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-16.5 h-16.5 flex items-center justify-center">
              <img
                src="/images/locar.png"
                alt="Logo Locar"
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-sm font-medium transition-colors capitalize ${
                  isMenuDark
                    ? activePath === link.path
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                    : activePath === link.path
                    ? "text-white font-semibold"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center space-x-2">
              {/* SISTEMAS - comportamento diferente em desktop e mobile */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    if (isMobile) {
                      window.location.href = "/sistemas"; // 👉 redireciona no mobile
                    } else {
                      setIsSistemasOpen(!isSistemasOpen); // 👉 dropdown no desktop
                    }
                  }}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isMenuDark
                      ? "text-green-700 bg-green-50 hover:bg-green-100"
                      : "text-white border border-white/50 hover:bg-white/10"
                  }`}
                >
                  Sistemas
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform ${
                      isSistemasOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN - só aparece no desktop */}
                {!isMobile && isSistemasOpen && (
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

              {/* BOTÃO VAGAS */}
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

          {/* MENU MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isMenuDark
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* DROPDOWN MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 capitalize"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 space-y-2">
              {/* SISTEMAS MOBILE → redireciona */}
              <Link
                to="/sistemas"
                className="flex items-center w-full px-4 py-2 text-green-700 bg-green-50 rounded-lg"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sistemas
              </Link>

              {/* VAGAS */}
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

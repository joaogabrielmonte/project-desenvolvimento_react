import React from "react";
import { LogIn, Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <img src="/images/locar.png" alt="Locar Gestão de Resíduos" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400">Soluções sustentáveis para um mundo melhor.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Coleta de Resíduos</li>
              <li>Tratamento</li>
              <li>Consultoria Ambiental</li>
              <li>Logística Reversa</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Grupo</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Locar Gestão e Residuos</li>
              <li>GTR Ambiental</li>
              <li>I9 Paulista</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Acesso Rápido</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.open("https://sistema.locar.srv.br", "_blank")}
                  className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sistema de Acesso
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      "https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/",
                      "_blank"
                    )
                  }
                  className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Portal de Vagas
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Execut Tecnologia Ltda. — Desenvolvido por{" "}
          <a href="mailto:desenvolvimento@execut.net.br" className="text-blue-400 hover:underline">
            Execut Tecnologia
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/landing/Footer.jsx
import React from "react";
import { LogIn, Briefcase, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Coluna 1: Logo e Endereço */}
          <div>
            <div className="mb-6">
              <img
                src="/images/locar.png"
                alt="Locar Gestão de Resíduos"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Soluções sustentáveis para um mundo melhor.
            </p>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>
                  ESTRADA DAS UBAIAS, N 540 8 ANDAR<br />
                  CASA FORTE - RECIFE -PE - CEP: 52061-080
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>81 2127.2525</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:atendimento@locar.srv.br" 
                  className="hover:text-green-400 transition-colors"
                >
                  atendimento@locar.srv.br
                </a>
              </div>
            </div>

            {/* Logos integradas ao corpo do footer */}
            <div className="flex items-center gap-6 mt-6">
              <img
                src="/images/ouvidoria-01.png"
                alt="Ouvidoria"
                className="h-8 w-auto"
              />
              <div className="flex items-center gap-2">
                <img
                  src="/images/bndes.png"
                  alt="BNDES"
                  className="h-6 w-auto"
                />
                <span className="text-gray-400 text-xs uppercase">Financiamento</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Coleta de Resíduos</li>
              <li>Tratamento</li>
              <li>Consultoria Ambiental</li>
              <li>Logística Reversa</li>
            </ul>
          </div>

          {/* Coluna 3: Grupo */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Grupo</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Locar Gestão e Resíduos</li>
              <li>GTR Ambiental</li>
              <li>I9 Paulista</li>
            </ul>
          </div>

          {/* Coluna 4: Acesso Rápido */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Acesso Rápido</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    window.open("https://sistema.locar.srv.br", "_blank")
                  }
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

        {/* Copyright */}
        <div className="mt-12 pt-8 text-center text-gray-400 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} Execut Tecnologia Ltda. — Desenvolvido por{" "}
          <a
            href="mailto:desenvolvimento@execut.net.br"
            className="text-blue-400 hover:underline"
          >
            Execut Tecnologia
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

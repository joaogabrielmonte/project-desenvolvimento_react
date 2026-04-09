/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  09/04/2026
 * @version    1.0
 */
import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "locar_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Pequeno delay para não disputar com a animação do Hero
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-label="Aviso de cookies"
      aria-modal="false"
    >
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Ícone */}
        <div className="flex-shrink-0 bg-green-600/20 rounded-xl p-3">
          <Cookie className="w-6 h-6 text-green-400" />
        </div>

        {/* Texto */}
        <div className="flex-1 text-sm text-gray-300 leading-relaxed">
          Utilizamos cookies para melhorar sua experiência de navegação. Ao continuar,
          você concorda com nossa{" "}
          <a
            href="/politica-privacidade"
            className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors"
          >
            Política de Privacidade
          </a>
          .
        </div>

        {/* Botões */}
        <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none px-5 py-2 text-sm font-semibold bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
          >
            Aceitar
          </button>
        </div>

        {/* Fechar (X) */}
        <button
          onClick={decline}
          aria-label="Fechar"
          className="absolute top-3 right-3 sm:relative sm:top-auto sm:right-auto text-gray-500 hover:text-white transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

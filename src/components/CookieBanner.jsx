import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "locar_privacy_notice_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try { setVisible(!localStorage.getItem(STORAGE_KEY)); }
    catch { setVisible(true); }
  }, []);
  const acknowledge = () => {
    try { localStorage.setItem(STORAGE_KEY, "acknowledged"); } catch { /* A navegação continua disponível. */ }
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <aside aria-label="Aviso de privacidade" className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="flex-1 text-sm text-gray-200 leading-relaxed">Usamos o armazenamento local para lembrar que você leu este aviso. O mapa do Google só é carregado quando você solicitar. Saiba mais na nossa <Link to="/politica-privacidade" className="text-green-300 underline underline-offset-2">Política de Privacidade</Link>.</p>
        <button type="button" onClick={acknowledge} className="px-5 py-2 font-semibold bg-green-600 hover:bg-green-500 text-white rounded-lg">Entendi</button>
      </div>
    </aside>
  );
}

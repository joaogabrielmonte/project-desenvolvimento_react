import React from "react";
import { Link } from "react-router-dom";
// Usaremos um ícone diferente para erro genérico
import { ServerCrash, Home } from "lucide-react";

const ErrorPage = () => {
  return (
    // Layout similar ao 404, centralizado
    <div className="bg-white pt-28 pb-16 min-h-screen flex items-center justify-center text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServerCrash className="w-20 h-20 mx-auto text-red-500 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Oops! Algo deu errado.
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Erro Inesperado
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Ocorreu um problema ao processar sua solicitação. Por favor, tente
          novamente mais tarde ou entre em contato com o suporte se o problema
          persistir.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

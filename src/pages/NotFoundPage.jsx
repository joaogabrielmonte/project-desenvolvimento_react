import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-28 pb-20 min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl mx-auto px-6 sm:px-8"
      >
        {/* Ícone animado */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <AlertTriangle className="w-20 h-20 mx-auto text-yellow-500 mb-6 drop-shadow-lg" />
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-3">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Página Não Encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          O endereço que você tentou acessar não existe ou foi movido.  
          Retorne à página inicial para continuar navegando.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
        >
          <Home className="w-5 h-5 mr-2" />
          Voltar à Página Inicial
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

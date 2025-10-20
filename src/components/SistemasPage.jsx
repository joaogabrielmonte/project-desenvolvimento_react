// SistemasPage.jsx
import React from "react";
import { ArrowRightCircle } from "lucide-react";



const SistemasPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            Sistemas Grupo Locar
          </span>
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {sistemas.map((sistema, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden flex flex-col"
            >
              <div className="bg-gray-50 flex items-center justify-center h-48">
                <img
                  src={sistema.image}
                  alt={sistema.name}
                  className="max-h-40 object-contain"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {sistema.name}
                  </h2>
                  <p className="text-gray-600 text-center mb-4">
                    {sistema.desc}
                  </p>
                </div>
                <button
                  onClick={() => window.open(sistema.url, "_blank")}
                  className="mt-auto flex items-center justify-center px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all shadow-md"
                >
                  Acessar {sistema.name}
                  <ArrowRightCircle className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SistemasPage;

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span style={{ color: "#c3cd86" }}>Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para implementar soluções sustentáveis na sua empresa? Nossa equipe está à disposição para ajudar você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-400 mr-4" />
                <div>
                  <p className="text-gray-300">Telefone</p>
                  <p className="text-white font-semibold">(11) 4002-8922</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-400 mr-4" />
                <div>
                  <p className="text-gray-300">E-mail</p>
                  <p className="text-white font-semibold">contato@locar.srv.br</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-400 mr-4" />
                <div>
                  <p className="text-gray-300">Endereço</p>
                  <p className="text-white font-semibold">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Descreva suas necessidades"
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 resize-none"
              />
              <button
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all"
                onClick={() =>
                  alert("Formulário enviado! Em breve entraremos em contato.")
                }
              >
                Enviar Solicitação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

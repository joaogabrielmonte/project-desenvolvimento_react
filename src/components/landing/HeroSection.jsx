import React from "react";
// Removi a importação do SustainableSection
import { ChevronDown, ArrowRight } from "lucide-react";

// Recebe a função de scroll
const HeroSection = ({ scrollToSection }) => {
  return (
    // A tag <section> estava dividida no seu código, juntei ela aqui
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* FUNDO ATUALIZADO:
        Trocamos o gradiente por um mais sóbrio e profissional.
        Um verde-escuro corporativo (cor da Locar) para um azul-noite/preto.
        Isso remete a "ambiental" (terra e água) e é menos "explosivo".
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#034422] to-[#081c30]" />
      
      {/* EFEITO 3D SUTIL (OPCIONAL):
        Um padrão de grid pontilhado muito sutil por cima
        para dar uma sensação de "espaço" ou "tecnologia".
      */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Conteúdo centralizado (z-10 para ficar na frente) */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-white">
          {/* TEXTO ATUALIZADO (EFEITO 3D):
            - Substituímos o [SustainableSection] por texto estático.
            - Adicionamos text-shadow (efeito 3D) para "levantar" o texto do fundo.
          */}
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ textShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
          >
            MAIS DE 35 ANOS DE UMA POLÍTICA DE <br />
            {/* Texto estático é mais profissional que uma animação */}
            <span style={{ color: "#c3cd86" }}> {/* Cor "oliva" do seu site */}
              DESENVOLVIMENTO SUSTENTÁVEL
            </span>
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
            style={{ textShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)" }}
          >
            Uma empresa familiar que respeita o meio ambiente e as futuras
            gerações, oferecendo soluções sustentáveis e tecnológicas para o
            descarte responsável de resíduos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("servicos")}
              className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Nossos Serviços
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-colors"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-white opacity-50" />
      </div>
    </section>
  );
};

export default HeroSection;
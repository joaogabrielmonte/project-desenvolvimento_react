import React from "react";
// 1. Vamos adicionar mais ícones para os stats
import { Award, Briefcase, CheckCircle, Clock } from "lucide-react";

const EnvironmentSection = () => {
  return (
    <section
      id="meio-ambiente"
      // 2. Mudei o gradiente para o mesmo do Hero, para criar consistência
      className="py-20 bg-gradient-to-br from-[#034422] to-[#081c30] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Parte 1: Texto (Esquerda) e Fotos (Direita) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compromisso com o{" "}
              {/* Usando a cor "oliva" do seu site */}
              <span style={{ color: "#c3cd86" }}>Meio Ambiente</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Nossa missão é proteger o meio ambiente através de práticas
              sustentáveis e inovação tecnológica, garantindo um futuro melhor
              para as próximas gerações.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Investimos pesado em tecnologia de ponta para destinação 
              adequada de resíduos e em programas de educação ambiental, 
              transformando o lixo em recurso e protegendo nossos ecossistemas.
            </p>
          </div>

          {/* Coluna da Direita: Fotos (Substitua pelas suas) */}
          {/* 3. Substituímos o ícone de Folha por fotos reais */}
          <div className="relative h-96">
            {/* Foto Principal */}
            <img
              // !! SUBSTITUA PELA SUA IMAGEM !! (ex: aterro, usina)
              src="/images/ambiental-principal.jpg" 
              alt="Operação de Aterro Sanitário"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Foto Menor Sobreposta */}
            <img
              // !! SUBSTITUA PELA SUA IMAGEM !! (ex: coleta, educação)
              src="/images/ambiental-secundaria.jpg" 
              alt="Projeto de Educação Ambiental"
              className="absolute -bottom-8 -right-8 w-48 h-48 object-cover rounded-xl shadow-lg border-4 border-gray-800"
            />
          </div>
        </div>

        {/* Parte 2: Os 4 Stats (Agora com Destaque) */}
        {/* 4. Demos uma seção própria para os números */}
        <div className="mt-28 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Award className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">
              35
            </div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Anos de Experiência
            </div>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Briefcase className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">
              1000+
            </div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Empresas Atendidas
            </div>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <CheckCircle className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">
              99%
            </div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Destinação Adequada
            </div>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Clock className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">
              24/7
            </div>
            <div className="text-sm text-green-100 uppercase tracking-wider">
              Suporte Emergencial
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: "#022b16" }}
    >
      {/* Imagem de fundo — fade + zoom suave ao carregar */}
      <img
        src="/images/fotoprincipal.jpg"
        alt=""
        fetchpriority="high"
        decoding="async"
        onLoad={() => setImgLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          opacity: imgLoaded ? 1 : 0,
          transform: imgLoaded ? "scale(1) translateZ(0)" : "scale(1.04) translateZ(0)",
          transition: "opacity 0.85s ease-out, transform 1.1s ease-out",
          willChange: "opacity, transform",
        }}
        aria-hidden="true"
      />

      {/* Overlay horizontal */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(2,20,10,0.92) 0%, rgba(2,26,14,0.82) 38%, rgba(2,26,14,0.30) 65%, rgba(2,26,14,0.05) 100%)",
        }}
      />
      {/* Overlay vertical suave só no topo pra navbar legível */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,20,10,0.55) 0%, transparent 25%)",
        }}
      />

      {/* Conteúdo — coluna esquerda, metade da tela */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pb-20 lg:pb-28">
        <div className="max-w-xl lg:max-w-2xl">

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-black uppercase tracking-tight leading-[0.98] mb-7 text-white"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.01em" }}
        >
          Mais de 35 anos<br />
          de uma política de<br />
          <span className="text-[#c3cd86]">desenvolvimento<br />sustentável</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-white/55 text-base sm:text-lg leading-relaxed max-w-md mb-10 font-light"
        >
          Uma empresa familiar que respeita o meio ambiente e as futuras
          gerações, oferecendo soluções sustentáveis e tecnológicas para o
          descarte responsável de resíduos.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex items-center gap-6 flex-wrap"
        >
          <button
            onClick={() => scrollToSection("servicos")}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#c3cd86] text-[#022b16] font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-colors"
          >
            Nossos Serviços <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-white/55 text-sm font-medium border-b border-white/20 pb-px hover:text-white hover:border-white/60 transition-colors"
          >
            Entre em contato
          </button>
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator — centro inferior */}
      <motion.button
        onClick={() => scrollToSection("grupo")}
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium group-hover:text-white/60 transition-colors">
          Conheça mais
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
        </motion.div>
      </motion.button>

    </section>
  );
};

export default HeroSection;

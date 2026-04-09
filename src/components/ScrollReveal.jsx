/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useEffect, useRef } from "react";

/**
 * Envolve qualquer conteúdo e o anima quando ele entra na tela.
 *
 * Props:
 *  - direction: "up" | "left" | "right"  (padrão: "up")
 *  - delay: atraso em ms antes de iniciar a animação (padrão: 0)
 *  - className: classes extras para o wrapper
 */
const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);

  const directionClass =
    direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${directionClass} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;

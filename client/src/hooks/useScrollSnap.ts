import { useEffect } from "react";

interface UseScrollSnapOptions {
  enabled?: boolean;
  type?: "mandatory" | "proximity";
}

export function useScrollSnap(options: UseScrollSnapOptions = {}) {
  const { enabled = true, type = "mandatory" } = options;

  useEffect(() => {
    if (!enabled) return;

    const html = document.documentElement;
    
    // Adiciona a classe para ativar scroll snapping
    html.classList.add("scroll-snap");
    
    // Ajusta o tipo de scroll snap baseado no tamanho da tela
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Em dispositivos móveis, usar proximity
        html.style.scrollSnapType = "y proximity";
      } else {
        // Em desktop, usar mandatory
        html.style.scrollSnapType = `y ${type}`;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      html.classList.remove("scroll-snap");
      html.style.scrollSnapType = "";
    };
  }, [enabled, type]);
}


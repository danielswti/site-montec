import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface Processo {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProcessosGridProps {
  processos: Processo[];
}

export default function ProcessosGrid({ processos }: ProcessosGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Número de itens visíveis por vez (responsivo)
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width < 768) return 1; // mobile
    if (width < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Atualizar itemsPerView ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = processos.length;
  const maxIndex = totalItems - 1;

  // Navegação
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-scroll infinito contínuo
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      goToNext();
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [isHovered, goToNext]);

  // Duplicar processos para simular loop infinito
  const slides = [...processos, ...processos, ...processos];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {slides.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <Link href={item.link}>
                <div className="group relative overflow-hidden rounded-lg bg-white card-shadow-lg hover-lift cursor-pointer transition-all duration-300 aspect-square">
                  {/* Imagem com proporção 1:1 */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2C3D]/95 via-[#0D2C3D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Conteúdo - sempre visível */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-sm md:text-base font-bold mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Setas em baixo */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {/* Botão Anterior */}
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Indicador de posição */}
        <div className="text-sm text-muted-foreground font-medium">
          {(currentIndex % totalItems) + 1} / {totalItems}
        </div>

        {/* Botão Próximo */}
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

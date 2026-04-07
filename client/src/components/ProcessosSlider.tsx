import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface Processo {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProcessosSliderProps {
  processos: Processo[];
}

export default function ProcessosSlider({ processos }: ProcessosSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Número de itens visíveis por vez
  const itemsPerView = 4; // Será ajustado para 1, 2 ou 3 em telas menores
  const totalItems = processos.length;
  const maxIndex = totalItems - 1; // Usado para navegação simples

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }, [maxIndex, isTransitioning]);

  // Auto-scroll em loop contínuo infinito
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(goToNext, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, goToNext]);

  // Lógica para resetar a transição após a animação CSS
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Duração da transição CSS

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Para simular o loop infinito, duplicamos os slides
  const slides = [...processos, ...processos];
  const offset = currentIndex * (100 / totalItems);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          key="processos-slider"
          className="flex gap-6"
          style={{
            width: `${totalItems * 2 * (100 / itemsPerView)}%`, // 2x o tamanho para o loop
            transform: `translateX(-${offset}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {slides.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / (totalItems * 2) * itemsPerView}%` }}
            >
              <Link href={item.link}>
                <div 
                  className="group relative overflow-hidden rounded-lg bg-white card-shadow-lg hover-lift cursor-pointer h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2C3D]/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {/* Botão Anterior */}
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Botão Próximo */}
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

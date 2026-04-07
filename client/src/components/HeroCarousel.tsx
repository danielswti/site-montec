import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface Slide {
  id: number;
  title: string;
  slogan: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  scrollToId?: string;
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides: Slide[] = [
    {
      id: 1,
      title: "32 anos de história",
      slogan: "Excelência que atravessa gerações",
      description: "Desde 1993 entregando qualidade, segurança e confiança na fabricação metálica",
      ctaText: "Conheça Nossa História",
      ctaLink: "/institucional/nossa-historia",
      image: "/banner-montec.png",
    },
    {
      id: 2,
      title: "Soluções completas",
      slogan: "Engenharia aplicada ao aço",
      description: "Soluções industriais para construção civil, agronegócio, mineração e setor metalúrgico.",
      ctaText: "Conheça Nossas Soluções",
      ctaLink: "/#nossas-solucoes",
      scrollToId: "nossas-solucoes",
      image: "/hero-engenharia-aco.jpeg",
    },
    {
      id: 3,
      title: "Processos certificados",
      slogan: "Precisão como padrão",
      description: "Do corte a laser ao acabamento final, controle total em cada etapa da produção.",
      ctaText: "Conheça Nossos Processos",
      ctaLink: "/#nossos-processos",
      scrollToId: "nossos-processos",
      image: "/HEROBANNER3.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCtaClick = (e: React.MouseEvent, scrollToId?: string) => {
    if (scrollToId) {
      e.preventDefault();
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Auto-play
// A imagem do slide 3 foi atualizada para /HEROBANNER3.jpg em 2025-10-28
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div
      ref={carouselRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${slide.image}")`,
                  transform: `translateY(${scrollY * 0.5}px)`,
                }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#0D2C3D]/95 via-[#0D2C3D]/80 to-[#1D6FA5]/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                />
              </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="text-accent font-bold text-xl md:text-2xl mb-4 text-center">
                    {slide.title}
                  </h2>
                  <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-center">
                    {slide.slogan}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-8 text-center">
                    {slide.description}
                  </p>
                  <div className="flex justify-center">
                    {slide.scrollToId ? (
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg"
                        onClick={(e) => handleCtaClick(e, slide.scrollToId)}
                      >
                        {slide.ctaText}
                      </Button>
                    ) : (
                      <Link href={slide.ctaLink}>
                        <Button
                          size="lg"
                          className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg"
                        >
                          {slide.ctaText}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ease-out group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ease-out group"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
      </button>

    </div>
  );
}


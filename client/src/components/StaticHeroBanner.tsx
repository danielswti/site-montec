import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface StaticHeroBannerProps {
  title: string;
  slogan: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
}

export default function StaticHeroBanner({
  title,
  slogan,
  description,
  ctaText,
  ctaLink,
  image,
}: StaticHeroBannerProps) {
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const bannerTop = bannerRef.current.offsetTop;
        const bannerHeight = bannerRef.current.offsetHeight;
        const scrollPosition = window.scrollY;

        // Calcula o parallax apenas quando o banner está visível
        if (scrollPosition < bannerTop + bannerHeight) {
          const offset = Math.max(0, scrollPosition - bannerTop);
          setScrollY(offset);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={bannerRef}
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
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
            <motion.h2
              className="text-accent font-bold text-xl md:text-2xl mb-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.h2>
            <motion.h1
              className="text-white font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            >
              {slogan}
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              {description}
            </motion.p>
            {ctaText && ctaLink && (
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                <Link href={ctaLink}>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg"
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}


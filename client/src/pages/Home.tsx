import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroCarousel from "@/components/HeroCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import ProcessosGrid from "@/components/ProcessosGrid";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import {
  Factory,
  Wrench,
  Award,
  TrendingUp,
  Users,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";


export default function Home() {
  const aboutSection = useScrollAnimation({ threshold: 0.2 });
  const solutionsSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useParallax(0.3);

  const solutions = [
    {
      icon: Factory,
      title: "Construção Civil e Mineração",
      description:
        "Soluções para construção civil e mineração com componentes de alta resistência.",
      image: "/BANNERSOLUÇÃOCONSTRUÇÃOCIVILEMINEIRAÇÃO.jpg",
      link: "/solucoes/construcao-mineracao",
    },
    {
      icon: Wrench,
      title: "Máquinas Agrícolas",
      description:
        "Fabricação de componentes e peças para máquinas e implementos agrícolas.",
      image: "/maquinas-agricolas-nova.png",
      link: "/solucoes/maquinas-agricolas",
    },
    {
      icon: TrendingUp,
      title: "Movimentação e Empilhadeiras",
      description:
        "Peças e estruturas para equipamentos de movimentação de materiais e empilhadeiras.",
      image: "/Movimentaçãoeempilhadeiras.JPG",
      link: "/solucoes/movimentacao-empilhadeiras",
    },
  ];

  const valores = [
    { icon: Award, title: "Qualidade", description: "Excelência em todos os processos" },
    { icon: Users, title: "Foco no Cliente", description: "Atendimento personalizado e eficiente" },
    { icon: TrendingUp, title: "Inovação", description: "Tecnologia de ponta e modernização contínua" },
    { icon: CheckCircle, title: "Excelência", description: "Padrões internacionais de qualidade" },
    { icon: MapPin, title: "Transparência", description: "Comunicação clara e honesta" },
    { icon: Factory, title: "Sustentabilidade", description: "Responsabilidade ambiental e social" },
  ];

  const processos = [
    {
      title: "Corte a Laser",
      description: "Tecnologia de precisão para cortes complexos",
      image: "/cortealaser.jpg",
      link: "/processos/corte-laser",
    },
    {
      title: "Corte CNC de Alta Tecnologia",
      description: "Tecnologia computadorizada para cortes precisos, rápidos e padronizados",
      image: "/corte-cnc-de-alta-tecnologia.jpeg",
      link: "/processos/corte-cnc",
    },
    {
      title: "Conformação de Chapas",
      description: "Processos avançados de dobra e calandragem",
      image: "/conformacao-metalica.jpeg",
      link: "/processos/conformacao-chapas",
    },
    {
      title: "Montagem e Solda",
      description: "Serviços especializados de montagem e soldagem",
      image: "/montagem-solda-nova.jpeg",
      link: "/processos/montagem-solda",
    },
    {
      title: "Pintura Industrial",
      description: "Acabamento de alto padrão e proteção duradoura",
      image: "/pintura-industrial-nova.jpeg",
      link: "/processos/pintura",
    },
    {
      title: "Usinagem",
      description: "Fabricação de peças com precisão e qualidade",
      image: "/usinagem.jpg",
      link: "/processos/usinagem",
    },
    {
      title: "Laboratório de Qualidade",
      description: "Controle e testes de qualidade dos produtos",
      image: "/laboratorio-qualidade-nova.jpeg",
      link: "/processos/laboratorio-qualidade",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Sobre Nós Section */}
      <section ref={aboutSection.ref} className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12" animation="fadeInUp" duration={0.8}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Sobre a Montec Mococa</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fundada em julho de 1993 por José Antonio Vicente, a Montec Mococa nasceu com o propósito de unir tecnologia, precisão e qualidade na fabricação de componentes metálicos. Hoje, é uma referência nacional na prestação de serviços industriais, atuando em Mococa/SP.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12" animation="fadeInUp" duration={0.8}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os valores que guiam nossas ações e definem nossa cultura empresarial
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  duration={0.8}
                  delay={index * 0.15}
                >
                  <Card className="hover-lift overflow-hidden transition-all duration-700 bg-white card-shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-12 h-12 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 text-center">{valor.title}</h3>
                      <p className="text-muted-foreground text-center">{valor.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soluções Section */}
      <section ref={solutionsSection.ref} className="py-20">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12" animation="fadeInUp" duration={0.8}>
            <h2 id="nossas-solucoes" className="text-4xl font-bold text-foreground mb-4">Nossas Soluções</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções em fabricação metálica. Atuamos com corte, dobra, solda e fabricação de estruturas e componentes metálicos para os principais setores da indústria. Processos eficientes, tecnologia de produção e controle de qualidade asseguram precisão, durabilidade e desempenho em cada entrega.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                duration={0.8}
                delay={index * 0.15}
              >
                <Card className="hover-lift overflow-hidden transition-all duration-700 bg-white card-shadow-lg pt-0 gap-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 text-center">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center">{solution.description}</p>
                  <Button variant="link" className="text-primary p-0 h-auto" asChild>
                    <Link href={solution.link}>
                      Saiba mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Processos Section */}
      <section id="nossos-processos" className="py-20">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12" animation="fadeInUp" duration={0.8}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Processos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Equipamentos modernos e processos certificados para garantir a melhor qualidade
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" duration={0.8}>
            <ProcessosGrid processos={processos} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section com Parallax */}
      <section
        ref={ctaSection.ref}
        className="relative py-16 md:py-24 overflow-hidden min-h-[280px] md:min-h-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/montec-fachada.jpg')",
            transform: `translateY(${ctaSection.offset * 0.3}px)`,
          }}
        >
          <div className="absolute inset-0 bg-[#0D2C3D]/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center justify-center min-h-0">
          <AnimatedSection animation="fadeInUp" duration={0.8} className="w-full max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Pronto para Iniciar Seu Projeto?
            </h2>
            <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar a transformar suas ideias em
              realidade
            </p>
          </AnimatedSection>
          <AnimatedSection className="flex flex-col sm:flex-row gap-4 justify-center w-full" animation="fadeInUp" duration={0.8} delay={0.2}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300"
              asChild
            >
              <Link href="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300"
              asChild
            >
              <Link href="/trabalhe-conosco">Trabalhe Conosco</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, CheckCircle, Shield, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function MaquinasAgricolas() {
  const heroParallax = useParallax(0.5);
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Alta disponibilidade operacional",
      description: "Componentes feitos para manter a máquina em atividade",
    },
    {
      icon: Shield,
      title: "Durabilidade que protege o investimento",
      description: "Mais tempo de uso, menos paradas e menor custo de reposição",
    },
    {
      icon: CheckCircle,
      title: "Padrão industrial em cada detalhe",
      description: "Controle dimensional e acabamento que garantem encaixe e eficiência",
    },
    {
      icon: Users,
      title: "Atendimento próximo e técnico",
      description: "Suporte direto com quem entende do setor agrícola",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Soluções para o Agronegócio"
        slogan="Máquinas Agrícolas"
        description="Peças e subconjuntos metálicos de alta resistência para o campo."
        image="/maquinas-agricolas.jpeg"
      />



      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              A Montec atende o setor agrícola com a fabricação de peças e subconjuntos metálicos
              que elevam o padrão de resistência e desempenho das máquinas. Cada componente é
              produzido com foco em durabilidade, estabilidade e acabamento técnico, garantindo
              eficiência mesmo nas condições mais severas de trabalho. Mais do que fabricar peças,
              entregamos soluções que transformam força em produtividade, contribuindo para o
              desempenho e a confiabilidade no campo.
            </p>
          </div>
        </div>
      </section>

      <section ref={benefitsSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Por que escolher a Montec</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confiança de quem fabrica para quem produz: qualidade reconhecida por quem vive o
              campo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  benefitsSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/maquinas-agricolas.jpeg"
                  alt="Máquinas Agrícolas"
                  className="rounded-lg shadow-2xl hover-lift"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Componentes para o Agronegócio
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fabricamos peças e conjuntos metálicos de médio e grande porte para tratores,
                  colheitadeiras, plantadeiras e implementos agrícolas. Nossa expertise garante
                  componentes que resistem às demandas do campo.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Peças para tratores e colheitadeiras</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Implementos agrícolas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Subconjuntos metálicos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Precisão não é detalhe, é propósito.</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento e conheça nossas soluções para o setor agrícola
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
            asChild
          >
            <a href="/contato">
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}


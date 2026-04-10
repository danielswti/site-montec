import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Forklift, CheckCircle, Shield, TrendingUp, Award, ArrowRight } from "lucide-react";

export default function MovimentacaoEmpilhadeiras() {
  const heroParallax = useParallax(0.5);
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Performance industrial comprovada",
      description: "Peças confiáveis que sustentam a operação 24 horas por dia",
    },
    {
      icon: Shield,
      title: "Redução de paradas e falhas",
      description: "Qualidade que mantém o fluxo produtivo constante",
    },
    {
      icon: CheckCircle,
      title: "Custo total de operação otimizado",
      description: "Durabilidade que reflete em menor manutenção e mais produtividade",
    },
    {
      icon: Award,
      title: "Tradição e credibilidade",
      description: "Escolha segura para quem exige excelência",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Soluções em Logística"
        slogan="Movimentação e Empilhadeiras"
        description="Componentes robustos para empilhadeiras e equipamentos de movimentação."
        image="/solucoes-movimentacao-hero-bg.webp"
      />



      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              A Montec fornece componentes e estruturas metálicas que sustentam a produtividade de
              operações industriais. Cada peça é fabricada com exatidão dimensional e acabamento
              impecável, assegurando confiabilidade em empilhadeiras, plataformas e equipamentos de
              transporte interno. Com know-how técnico e compromisso com resultados, a Montec é
              sinônimo de solidez e eficiência na fabricação metalúrgica.
            </p>
          </div>
        </div>
      </section>

      <section ref={benefitsSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Por que escolher a Montec</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Engenharia que gera resultado: experiência prática aplicada a cada componente
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
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Componentes para Movimentação Industrial
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Produzimos chassis e componentes para empilhadeiras elétricas e à combustão,
                  plataformas de elevação e equipamentos de transporte interno. Nossas soluções
                  garantem segurança e eficiência operacional.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Chassis para empilhadeiras</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Estruturas metálicas industriais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Componentes de transporte interno</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/solucoes-movimentacao-img-sobre.webp"
                  alt="Movimentação de Materiais"
                  className="rounded-lg shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A força do aço, a confiança da Montec.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento e conheça nossas soluções para movimentação de materiais
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


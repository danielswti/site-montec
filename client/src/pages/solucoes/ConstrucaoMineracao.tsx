import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HardHat, CheckCircle, Shield, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function ConstrucaoMineracao() {
  const heroParallax = useParallax(0.5);
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: CheckCircle,
      title: "Confiabilidade em grandes obras",
      description: "Prazos cumpridos e desempenho garantido em campo",
    },
    {
      icon: Users,
      title: "Parceria sólida",
      description: "Atendimento direto e acompanhamento técnico durante todo o projeto",
    },
    {
      icon: TrendingUp,
      title: "Qualidade que reduz custos",
      description: "Peças com durabilidade comprovada, menos manutenção e maior produtividade",
    },
    {
      icon: Shield,
      title: "Comprometimento total",
      description: "Cada entrega é tratada como prioridade industrial",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Soluções para o Setor Pesado"
        slogan="Construção Civil e Mineração"
        description="Peças e conjuntos metálicos robustos para ambientes extremos."
        image="/BANNERSOLUÇÃOCONSTRUÇÃOCIVILEMINEIRAÇÃO.jpg"
      />



      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Na construção civil e na mineração, desempenho e durabilidade não são opcionais. A
              Montec fabrica peças e conjuntos metálicos robustos, projetados para suportar
              condições extremas e garantir confiabilidade operacional. Com engenharia aplicada e
              controle rigoroso de qualidade, entregamos soluções que unem precisão, resistência e
              performance industrial, consolidando nossa atuação como parceira estratégica dos
              principais players do setor.
            </p>
          </div>
        </div>
      </section>

      <section ref={benefitsSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Por que escolher a Montec</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reputação construída no setor pesado: confiança reconhecida por empresas de
              referência
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
                  Soluções para o Setor Pesado
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fabricamos componentes estruturais, chassis, braços articulados, pás e
                  subconjuntos completos para máquinas de construção civil e mineração. Cada peça
                  é projetada para resistir às condições mais severas de operação.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Estruturas de grande porte</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Componentes para mineração</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Peças para construção civil</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/BANNERSOLUÇÃOCONSTRUÇÃOCIVILEMINEIRAÇÃO.jpg"
                  alt="Construção Civil e Mineração"
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
            Solicite um orçamento e conheça nossas soluções para construção civil e mineração
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


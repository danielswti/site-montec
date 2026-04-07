import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, CheckCircle, Shield, Target, ArrowRight } from "lucide-react";

export default function MontagemSolda() {
  const heroParallax = useParallax(0.5);
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: Shield,
      title: "Uniões seguras e duráveis",
      description: "Resistência comprovada em cada conjunto",
    },
    {
      icon: Target,
      title: "Precisão dimensional",
      description: "Peças perfeitamente alinhadas e estruturadas",
    },
    {
      icon: CheckCircle,
      title: "Acabamento superior",
      description: "Soldas limpas e com padrão visual industrial",
    },
    {
      icon: Wrench,
      title: "Redução de falhas",
      description: "Processos controlados por especialistas",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Processos de Fabricação"
        slogan="Montagem e Solda Industrial"
        description="Uniões seguras e precisas para componentes metálicos."
        image="/montagem-solda.png"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              A montagem e a soldagem são processos fundamentais na produção da Montec. Cada união
              é executada com controle técnico e alinhamento perfeito, garantindo resistência,
              estabilidade e acabamento de excelência. A precisão em cada solda reflete o
              compromisso com a durabilidade e a confiança que caracterizam nossos produtos.
            </p>
          </div>
        </div>
      </section>

      <section ref={benefitsSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Por que escolher a Montec</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Execução com garantia técnica: acompanhamento em todas as etapas
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

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A força do aço, a confiança da Montec.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento e conheça nossas soluções em montagem e solda
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


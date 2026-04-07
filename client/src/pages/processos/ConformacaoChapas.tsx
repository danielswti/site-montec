import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, CheckCircle, Shield, Target, ArrowRight } from "lucide-react";

export default function ConformacaoChapas() {
  const heroParallax = useParallax(0.5);
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });
  const processSection = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: Target,
      title: "Dobramento preciso",
      description: "Ângulos exatos e consistentes",
    },
    {
      icon: Shield,
      title: "Integridade garantida",
      description: "Conformação sem fissuras ou deformações",
    },
    {
      icon: CheckCircle,
      title: "Padronização total",
      description: "Peças idênticas em cada lote",
    },
    {
      icon: Layers,
      title: "Eficiência estrutural",
      description: "Resistência e rigidez asseguradas",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Processos de Fabricação"
        slogan="Conformação de Chapas Metálicas"
        description="Dobramento e calandragem de chapas com precisão e integridade estrutural."
        image="/chapa-metalica.jpeg"
      />



      {/* Descrição Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Na Montec, a conformação e a dobra de chapas metálicas são realizadas com controle
              total de ângulo, pressão e integridade material. Cada dobra é calculada para
              garantir estabilidade e repetibilidade, resultando em componentes estruturais com
              alto nível de exatidão e resistência.
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher a Montec */}
      <section ref={benefitsSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Por que escolher a Montec</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Controle técnico completo: conformação integrada à engenharia da Montec
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

      {/* Imagem de Processo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Tecnologia e Precisão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Utilizamos dobradeiras CNC de alta precisão que garantem repetibilidade e
                  qualidade em cada peça produzida. O controle computadorizado permite ajustes
                  finos e garante que cada dobra seja executada exatamente conforme o projeto.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Dobradeiras CNC de alta tonelagem</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Controle de ângulo e pressão</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Calandragem de perfis complexos</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/conformaçãodechapas.JPG"
                  alt="Conformação de chapas"
                  className="rounded-lg shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A força do aço, a confiança da Montec.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento e conheça nossas soluções em conformação de chapas
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


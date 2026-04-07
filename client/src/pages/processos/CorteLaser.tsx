import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, Target, TrendingUp, ArrowRight } from "lucide-react";

export default function CorteLaser() {
  const heroParallax = useParallax(0.5);
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });
  const processSection = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: Target,
      title: "Cortes precisos e limpos",
      description: "Alta definição e repetibilidade garantida",
    },
    {
      icon: Zap,
      title: "Velocidade de produção",
      description: "Agilidade sem perder qualidade",
    },
    {
      icon: CheckCircle,
      title: "Menos retrabalho",
      description: "Contornos perfeitos desde o primeiro corte",
    },
    {
      icon: TrendingUp,
      title: "Alta eficiência produtiva",
      description: "Aproveitamento ideal de matéria-prima",
    },
  ];



  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Processos de Fabricação"
        slogan="Corte a Laser de Alta Precisão"
        description="Tecnologia avançada para cortes limpos e exatos em diversos materiais."
        image="/cortealaser.jpg"
      />



      {/* Descrição Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              O corte a laser da Montec combina tecnologia e velocidade para gerar peças com
              contornos exatos e acabamento limpo. Cada recorte é executado com precisão
              milimétrica, sem rebarbas e com repetibilidade garantida, proporcionando máxima
              eficiência no início do processo produtivo.
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
              Qualidade que começa no primeiro passo: precisão desde o corte inicial
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

      {/* Processo Detalhado */}
      <section ref={processSection.ref} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Nosso Processo de Corte a Laser
            </h2>
            <div className="space-y-8">
              <Card
                className={`hover-lift transition-all duration-700 ${
                  processSection.isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Programação e Setup
                      </h3>
                      <p className="text-muted-foreground">
                        Cada projeto é programado com precisão, otimizando o aproveitamento da
                        chapa e garantindo a melhor eficiência de corte.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`hover-lift transition-all duration-700 delay-200 ${
                  processSection.isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Execução do Corte
                      </h3>
                      <p className="text-muted-foreground">
                        O laser de alta potência realiza cortes limpos e precisos, com velocidade
                        e qualidade constantes em toda a produção.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`hover-lift transition-all duration-700 delay-400 ${
                  processSection.isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Inspeção e Liberação
                      </h3>
                      <p className="text-muted-foreground">
                        Todas as peças passam por inspeção visual e dimensional antes de seguirem
                        para as próximas etapas do processo produtivo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            Solicite um orçamento e conheça nossas soluções em corte a laser
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


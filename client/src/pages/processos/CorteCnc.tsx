import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const cards = [
  {
    image: "/card-cnc-1.png",
    title: "Precisão Controlada",
    description:
      "Cortes executados com programação digital e tolerâncias rigorosas.",
  },
  {
    image: "/card-cnc-2.png",
    title: "Consistência do início ao fim",
    description: "Padrão constante de qualidade.",
  },
  {
    image: "/card-cnc-3.png",
    title: "Produção em grande escala",
    description: "Capacidade para produção em larga escala.",
  },
  {
    image: "/card-cnc-4.png",
    title: "Qualidade no Resultado",
    description: "Acabamento superior e consistente.",
  },
];

export default function CorteCnc() {
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Processos de Fabricação"
        slogan="Corte CNC de Alta Tecnologia"
        description="Tecnologia computadorizada para cortes precisos, rápidos e padronizados."
        image="/corte-cnc-de-alta-tecnologia.jpeg"
      />

      {/* Descrição Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Na Montec, o corte CNC é sinônimo de precisão e eficiência.
              Realizamos cortes computadorizados com alto nível de exatidão,
              garantindo repetibilidade, excelente aproveitamento de material e
              acabamento de qualidade. O resultado são peças produzidas com
              agilidade, padronização e desempenho superior para cada aplicação.
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher a Montec - 4 cards com imagem */}
      <section ref={benefitsSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Por que escolher a Montec
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Corte CNC com tecnologia, controle e máxima eficiência produtiva
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
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
                  <div className="w-18 h-18 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-6 bg-primary/10">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia e Precisão */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Tecnologia e Precisão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O corte CNC na Montec combina programação digital e equipamentos
                  de alta performance para garantir cortes exatos, repetíveis e
                  com ótimo aproveitamento de material. Cada projeto é executado
                  com controle total de velocidade, profundidade e acabamento.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">
                      Programação digital e tolerâncias rigorosas
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">
                      Repetibilidade e padronização
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">
                      Produção em larga escala com qualidade constante
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/corte-cnc-de-alta-tecnologia.jpeg"
                  alt="Corte CNC de alta tecnologia"
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
            Solicite um orçamento e conheça nossas soluções em corte CNC
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

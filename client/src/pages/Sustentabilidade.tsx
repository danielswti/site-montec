import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Recycle,
  Droplet,
  Sun,
  Users,
  Heart,
  TrendingUp,
  CheckCircle,
  Award,
} from "lucide-react";

export default function Sustentabilidade() {
  const heroParallax = useParallax(0.5);
  const compromissoSection = useScrollAnimation({ threshold: 0.2 });
  const initiativesSection = useScrollAnimation({ threshold: 0.2 });
  const goalsSection = useScrollAnimation({ threshold: 0.2 });
  const socialSection = useScrollAnimation({ threshold: 0.2 });

  const initiatives = [
    {
      title: "Coleta Seletiva Completa",
      description:
        "Abrangendo papel, plástico, metal, vidro, pilhas, baterias, lâmpadas, celulares e resíduos orgânicos",
    },
    {
      title: "Reciclagem de 85% dos Resíduos",
      description:
        "Programa abrangente de reciclagem que reduz significativamente a geração de resíduos",
    },
    {
      title: "Redução de 40% no Consumo de Água",
      description:
        "Sistemas de reuso, captação de água da chuva e tratamento de efluentes",
    },
    {
      title: "30% de Economia Energética",
      description:
        "Investimento em tecnologias limpas e processos produtivos mais eficientes",
    },
    {
      title: "Projetos Sociais e Ambientais",
      description:
        "Iniciativas que beneficiam a comunidade de Mococa e região",
    },
    {
      title: "Conformidade Ambiental",
      description:
        "Licenças da CETESB e cadastro no IBAMA, com compromisso de ir além das exigências legais",
    },
  ];

  const goals = [
    {
      year: "2026",
      title: "Energia Solar",
      description: "Implementar energia solar em 30% da planta industrial",
      icon: Sun,
    },
    {
      year: "2027",
      title: "Neutralidade de Carbono",
      description: "Alcançar neutralidade de carbono nas operações",
      icon: Leaf,
    },
    {
      year: "2030",
      title: "Certificação Ambiental",
      description: "Obter certificação ambiental internacional",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Sustentabilidade"
        slogan="Nosso Compromisso com o Futuro"
        description="Práticas sustentáveis para um impacto positivo no meio ambiente e na sociedade."
        image="/sustentabilidade-hero-bg.webp"
      />

      {/* Introdução */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sustentabilidade Montec Mococa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Na Montec Mococa, acreditamos que o sucesso só é verdadeiro quando é sustentável.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Por isso, adotamos práticas responsáveis em toda a nossa operação, com foco em eficiência de recursos, redução de impactos ambientais e compromisso com a comunidade local.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso objetivo é produzir com qualidade e consciência ambiental, garantindo um futuro mais limpo e equilibrado.
            </p>
          </div>
        </div>
      </section>

      {/* Compromisso com o Meio Ambiente */}
      <section ref={compromissoSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Compromisso com o Meio Ambiente
              </h2>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Montec atua em conformidade com as normas ambientais vigentes, possuindo licenças da CETESB e cadastro no IBAMA.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mais do que cumprir a legislação, buscamos ir além das exigências legais, implementando ações que refletem nosso respeito pela natureza.
              </p>
            </div>

            {/* Principais Iniciativas */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Principais Iniciativas:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {initiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg p-6 shadow-md hover-lift transition-all duration-700 ${
                      compromissoSection.isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {initiative.title}
                        </h4>
                        <p className="text-muted-foreground">{initiative.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metas de Sustentabilidade */}
      <section ref={goalsSection.ref} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Metas de Sustentabilidade
              </h2>
              <p className="text-lg text-muted-foreground">
                A Montec tem metas claras e mensuráveis para os próximos anos, consolidando seu compromisso com a responsabilidade ambiental:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {goals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <Card
                    key={index}
                    className={`hover-lift transition-all duration-700 ${
                      goalsSection.isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-accent font-bold text-3xl mb-4">{goal.year}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Eficiência e Inovação Sustentável */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Eficiência e Inovação Sustentável
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Investimos continuamente em tecnologia limpa e processos produtivos mais eficientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossos equipamentos modernos e sistemas integrados de gestão (CAD/CAM e ERP) contribuem para a otimização de recursos e a redução de desperdícios em todas as etapas da produção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsabilidade Social */}
      <section ref={socialSection.ref} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Responsabilidade Social
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`bg-primary/5 rounded-lg p-8 transition-all duration-700 ${
                  socialSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Compromisso Social
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A sustentabilidade da Montec vai além do meio ambiente. Apoiamos projetos sociais locais, promovendo educação, capacitação e qualidade de vida para nossos colaboradores e para a comunidade.
                </p>
              </div>

              <div
                className={`bg-accent/5 rounded-lg p-8 transition-all duration-700 delay-200 ${
                  socialSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Comunidade e Desenvolvimento
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Investimos em projetos que beneficiam a comunidade local, promovendo desenvolvimento social, educação e qualidade de vida para todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Compromisso - CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso Compromisso
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Sustentabilidade, para a Montec Mococa, é um compromisso diário.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              É pensar no futuro enquanto produzimos no presente, equilibrando crescimento industrial, respeito ambiental e responsabilidade social.
            </p>
            <p className="text-xl font-semibold text-accent">
              Montec Mococa – Produzindo com consciência, inovando com propósito.
            </p>
            <div className="mt-8">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

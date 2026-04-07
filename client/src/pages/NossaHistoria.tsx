import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Award, Users, TrendingUp, Target, Heart, Lightbulb } from "lucide-react";

export default function NossaHistoria() {
  const heroParallax = useParallax(0.5);
  const timelineSection = useScrollAnimation({ threshold: 0.2 });
  const valuesSection = useScrollAnimation({ threshold: 0.2 });

  const timeline = [
    {
      year: "1993",
      title: "Fundação da Montec Mococa",
      description:
        "José Antonio Vicente funda a empresa em Mococa/SP, com o propósito de unir tecnologia, precisão e qualidade na fabricação de componentes metálicos.",
    },
    {
      year: "2008",
      title: "Expansão da produção",
      description:
        "Com o crescimento da demanda e a consolidação no mercado, a Montec amplia sua estrutura produtiva e o número de colaboradores.",
    },
    {
      year: "2012",
      title: "Modernização tecnológica",
      description:
        "A empresa investe em corte a laser e usinagem CNC, elevando os padrões de precisão e produtividade.",
    },
    {
      year: "2017",
      title: "Certificação ISO 9001",
      description:
        "A Montec conquista a certificação internacional ISO 9001, auditada pela SGS, garantindo excelência em gestão e qualidade em todos os processos.",
    },
    {
      year: "2019",
      title: "Crescimento e consolidação",
      description:
        "A equipe atinge 150 colaboradores, marco do amadurecimento e da capacidade produtiva da empresa.",
    },
    {
      year: "2025",
      title: "32 anos de história, inovação e confiança",
      description:
        "A Montec celebra mais de três décadas de resiliência e sucesso, com foco em sustentabilidade, eficiência e tecnologia de ponta.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description:
        "Compromisso inabalável com os mais altos padrões de qualidade em todos os nossos processos e produtos.",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description:
        "Abordagem centrada no cliente, buscando sempre superar expectativas e construir relacionamentos duradouros.",
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description:
        "Investimento contínuo em tecnologia e processos inovadores para oferecer as melhores soluções.",
    },
    {
      icon: Target,
      title: "Excelência",
      description:
        "Busca constante pela excelência operacional e pela melhoria contínua em todas as áreas.",
    },
    {
      icon: Heart,
      title: "Transparência",
      description:
        "Relacionamentos baseados em confiança, ética e transparência em todas as nossas interações.",
    },
    {
      icon: Lightbulb,
      title: "Sustentabilidade",
      description:
        "Compromisso com práticas sustentáveis e responsabilidade ambiental em todas as operações.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner with Factory Image */}
      <StaticHeroBanner
        title="Nossa história"
        slogan="Desde 1993 com propósito e compromisso"
        description="Uma história construída com trabalho, respeito e dedicação à fabricação metálica."
        image="/fabrica-banner.jpg"
      />

      {/* História Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Título Estilizado */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Uma História de <span className="text-primary">Resiliência</span> e <span className="text-accent">Sucesso</span>
              </h2>
              <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Fundada em 1993 por José Antonio Vicente, a Montec Mococa nasceu do sonho de unir tecnologia, precisão e qualidade na fabricação de componentes metálicos. O que começou com poucos colaboradores e uma gestão familiar tornou-se, ao longo de três décadas, uma referência nacional em soluções industriais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Com foco em inovação e excelência, a Montec investiu continuamente em tecnologia e capacitação, conquistando a certificação ISO 9001 e consolidando-se como sinônimo de confiabilidade e eficiência.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mesmo diante dos desafios, a empresa se manteve firme, guiada por valores como qualidade, transparência e responsabilidade ambiental. Hoje, com mais de 150 colaboradores, infraestrutura moderna e práticas sustentáveis, a Montec continua crescendo, fiel ao seu propósito: entregar soluções que movem o progresso com ética e inovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Linha do Tempo – Montec Mococa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de três décadas de crescimento, inovação e conquistas
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 transition-all duration-1000 ${
                    timelineSection.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Conteúdo */}
                    <div className="w-full md:w-5/12 mb-4 md:mb-0">
                      <div
                        className={`bg-white p-6 rounded-lg shadow-lg hover-lift ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <div className="text-accent font-bold text-3xl mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                      </div>
                    </div>

                    {/* Ponto central */}
                    <div className="w-full md:w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10" />
                    </div>

                    {/* Espaço vazio */}
                    <div className="w-full md:w-5/12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section ref={valuesSection.ref} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossas ações e decisões todos os dias
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white border border-border rounded-lg p-8 hover-lift transition-all duration-700 ${
                  valuesSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a nós e descubra como podemos ajudar a transformar suas ideias em realidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
            >
              Entre em Contato
            </a>
            <a
              href="/trabalhe-conosco"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold rounded-lg transition-colors"
            >
              Trabalhe Conosco
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

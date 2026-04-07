import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Shield,
  FileCheck,
  BarChart3,
} from "lucide-react";

export default function Certificacoes() {
  const heroParallax = useParallax(0.5);
  const isoSection = useScrollAnimation({ threshold: 0.2 });
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });
  const processSection = useScrollAnimation({ threshold: 0.2 });
  const labSection = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: CheckCircle,
      title: "Qualidade Consistente",
      description:
        "Garantia de produtos e serviços que atendem constantemente aos padrões mais exigentes.",
    },
    {
      icon: Users,
      title: "Satisfação do Cliente",
      description:
        "Foco em entender, atender e superar as expectativas dos nossos clientes.",
    },
    {
      icon: TrendingUp,
      title: "Eficiência Operacional",
      description:
        "Processos otimizados que resultam em maior produtividade e menor desperdício.",
    },
    {
      icon: Target,
      title: "Melhoria Contínua",
      description:
        "Compromisso permanente com o aprimoramento e a inovação.",
    },
    {
      icon: Shield,
      title: "Reconhecimento Internacional",
      description:
        "Certificação auditada pela SGS, válida globalmente.",
    },
    {
      icon: BarChart3,
      title: "Gestão Eficiente",
      description:
        "Sistema de gestão sólido que garante controle, rastreabilidade e excelência em todas as etapas.",
    },
  ];

  const highlights = [
    "Controle rigoroso em todas as etapas produtivas",
    "Laboratório de qualidade equipado com tecnologia de ponta",
    "Melhoria contínua e foco em eficiência operacional",
    "Rastreabilidade total dos processos e produtos",
  ];

  const labResources = [
    "Ensaios dimensionais e geométricos",
    "Análise de materiais e propriedades mecânicas",
    "Inspeção visual e de acabamento",
    "Documentação técnica completa e rastreável",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Certificações"
        slogan="Qualidade reconhecida e compromisso diário"
        description="Seguimos padrões técnicos e boas práticas para garantir segurança, confiabilidade e respeito em cada entrega."
        image="/tubos-metal-banner.jpg"
      />

      {/* ISO 9001 Section */}
      <section ref={isoSection.ref} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Título Principal com Selos */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                ISO 9001
              </h2>
              <p className="text-2xl text-primary font-semibold mb-8">
                Certificação Internacional
              </p>
              {/* Selos de Certificação */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="w-40 h-40 flex items-center justify-center">
                  <img src="/ISO-SGS.png" alt="ISO 9001 SGS" className="w-full h-full object-contain" />
                </div>
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src="/Iso-9001-2015.png" alt="ISO 9001:2015" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Montec Mococa é certificada pela <strong>ISO 9001</strong>, auditada e validada pela <strong>SGS</strong>, o que garante padrões internacionais de qualidade, gestão eficiente e rastreabilidade de processos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Esse reconhecimento reforça nosso compromisso em fornecer produtos e serviços com excelência, confiabilidade e foco total na satisfação dos clientes.
              </p>
            </div>

            {/* Sobre a ISO 9001 */}
            <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Sobre a ISO 9001
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A ISO 9001 é uma norma internacional que define os requisitos para um Sistema de Gestão da Qualidade (SGQ).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa certificação confirma a capacidade da Montec de entregar resultados consistentes, cumprir prazos e manter processos controlados e otimizados, desde o recebimento da matéria-prima até a entrega final.
              </p>
            </div>

            {/* Certificado pela SGS */}
            <div className="bg-accent/5 border-l-4 border-accent p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Certificado pela SGS
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A auditoria e validação são realizadas pela SGS, líder mundial em inspeção, verificação, testes e certificação — assegurando que todos os nossos processos atendam aos mais altos padrões de qualidade internacional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheça nossa{" "}
                <a
                  href="/politicas/POLITICA-DE-QUALIDADE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Política de Qualidade (PDF)
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques do Sistema de Qualidade */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Destaques do Nosso Sistema de Qualidade
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section ref={benefitsSection.ref} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Benefícios da Certificação ISO 9001
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que a certificação significa para nossos clientes e parceiros
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratório de Qualidade Section */}
      <section ref={labSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nosso Laboratório de Qualidade
              </h2>
              <p className="text-xl text-muted-foreground">
                Contamos com um laboratório de qualidade de última geração, equipado para garantir a precisão e a conformidade de cada produto fabricado.
              </p>
            </div>

            {/* Principais Recursos */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Principais Recursos:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {labResources.map((resource, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{resource}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Qualidade que Você Pode Confiar */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Qualidade que Você Pode Confiar
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Na Montec Mococa, a certificação ISO 9001 é mais do que um selo: é o reflexo do nosso compromisso com a excelência, transparência e inovação contínua.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como nossa certificação garante a qualidade que move o progresso.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

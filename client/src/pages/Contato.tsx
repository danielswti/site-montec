import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import OuvidoriaModal from "@/components/OuvidoriaModal";
import { useParallax, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contato() {
  const heroParallax = useParallax(0.5);
  const formSection = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOuvidoriaOpen, setIsOuvidoriaOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.message || "Erro ao enviar mensagem. Tente novamente.");
        setIsSubmitting(false);
        return;
      }
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });
    } catch {
      toast.error("Erro ao enviar mensagem. Verifique sua conexão e tente novamente.");
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (19) 3656-6767",
      link: "tel:+551936566767",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@montecmococa.com.br",
      link: "mailto:contato@montecmococa.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Primo Quilice, 323, Mococa - SP",
      link: "https://maps.google.com/maps?q=Av.+Primo+Quilice,+323,+Mococa,+SP",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 07:30 às 17:30",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Fale Conosco"
        slogan="Estamos Prontos para Atendê-lo"
        description="Entre em contato para orçamentos, dúvidas ou parcerias."
        image="/atendimento.jpeg"
      />

      {/* Ouvidoria Modal */}
      <OuvidoriaModal isOpen={isOuvidoriaOpen} onClose={() => setIsOuvidoriaOpen(false)} />

      {/* Contact Info Cards */}
      <section className="py-12 bg-white relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section ref={formSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div
              className={`transition-all duration-1000 ${
                formSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Envie sua Mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          E-mail *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Telefone
                        </label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="assunto"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Assunto *
                      </label>
                      <Input
                        id="assunto"
                        name="assunto"
                        type="text"
                        required
                        value={formData.assunto}
                        onChange={handleChange}
                        placeholder="Sobre o que você gostaria de falar?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mensagem"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Mensagem *
                      </label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Descreva sua necessidade ou dúvida..."
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    {/* Ouvidoria Button */}
                    <Button
                      type="button"
                      onClick={() => setIsOuvidoriaOpen(true)}
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold flex items-center justify-center space-x-2"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Ouvidoria</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Mapa e Informações */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                formSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-0">
                    <div className="h-[400px] rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.5!2d-47.00156!3d-21.47194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9c5c5c5c5c5c5%3A0x0!2sAv.%20Primo%20Quilice%2C%20323%20-%20Ch%C3%A1cara%20S%C3%A3o%20Domingos%20Shop%2C%20Mococa%20-%20SP%2C%2013734-450!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Montec Mococa"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Visite Nossa Sede
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Estamos localizados em Mococa, São Paulo, em uma área de 80.000 m² com
                      instalações modernas e equipamentos de última geração.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground">Endereço</p>
                          <p className="text-muted-foreground">
                            Av. Primo Quilice, 323 - Chácara São Domingos Shop<br />
                            Mococa - SP, 13734-450, Brasil
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground">Horário de Atendimento</p>
                          <p className="text-muted-foreground">
                            Segunda a Sexta: 07:30 às 17:30<br />
                            Sábado e Domingo: Fechado
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


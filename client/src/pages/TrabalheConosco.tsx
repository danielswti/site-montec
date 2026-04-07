import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticHeroBanner from "@/components/StaticHeroBanner";
import { useParallax, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Heart, Award, Upload } from "lucide-react";
import { toast } from "sonner";

export default function TrabalheConosco() {
  const heroParallax = useParallax(0.5);
  const benefitsSection = useScrollAnimation({ threshold: 0.2 });
  const formSection = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    vaga: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [curriculoFile, setCurriculoFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      vaga: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>('input[name="curriculo"]');
    const file = fileInput?.files?.[0];
    if (!file) {
      toast.error("Anexe seu currículo (PDF ou DOC).");
      setIsSubmitting(false);
      return;
    }
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          const base64 = result.includes(",") ? result.split(",")[1] : result;
          resolve(base64 || "");
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const body = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        vaga: formData.vaga,
        mensagem: formData.mensagem,
        curriculo: { data: base64, name: file.name },
      };
      const res = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.message || "Erro ao enviar currículo. Tente novamente.");
        setIsSubmitting(false);
        return;
      }
      toast.success("Currículo enviado com sucesso! Entraremos em contato em breve.");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        vaga: "",
        mensagem: "",
      });
      setCurriculoFile(null);
      form.reset();
    } catch {
      toast.error("Erro ao enviar currículo. Verifique sua conexão e tente novamente.");
    }
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description:
        "Trabalhe em um ambiente que valoriza o trabalho em equipe e a colaboração entre departamentos.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Profissional",
      description:
        "Oportunidades de desenvolvimento e crescimento através de treinamentos e capacitações.",
    },
    {
      icon: Heart,
      title: "Qualidade de Vida",
      description:
        "Benefícios que promovem o bem-estar e a qualidade de vida dos colaboradores.",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description:
        "Cultura de reconhecimento e valorização do desempenho e dedicação dos profissionais.",
    },
  ];

  const vagas = [
    "Assistente Fiscal",
    "Assistente Comercial",
    "Analista Contábil",
    "Engenheiro de Produção",
    "Técnico em Mecânica",
    "Soldador",
    "Operador de Máquinas CNC",
    "Inspetor de Qualidade",
    "Auxiliar de Produção",
    "Analista de RH",
    "Comprador",
    "Outra",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Static Hero Banner */}
      <StaticHeroBanner
        title="Trabalhe Conosco"
        slogan="Construa Sua Carreira na Montec"
        description="Junte-se a uma equipe inovadora e faça a diferença no setor metalúrgico."
        image="/carreira-montec.jpeg"
      />



      {/* Sobre a Empresa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Por que trabalhar na Montec?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Com mais de 30 anos de história, a Montec Mococa é uma empresa sólida e em constante
              crescimento. Valorizamos nossos colaboradores e investimos em seu desenvolvimento
              profissional e pessoal. Aqui, você terá a oportunidade de trabalhar com tecnologia
              de ponta, em projetos desafiadores e ao lado de profissionais experientes.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section ref={benefitsSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Benefícios e Vantagens</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um pacote completo de benefícios para garantir seu bem-estar
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
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Formulário Section */}
      <section ref={formSection.ref} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div
              className={`transition-all duration-1000 ${
                formSection.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Envie seu Currículo
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Preencha o formulário abaixo e anexe seu currículo. Entraremos em contato
                      caso seu perfil esteja alinhado com nossas oportunidades.
                    </p>
                    <p className="text-base text-muted-foreground mt-4">
                      Ou envie seu currículo diretamente para: <a href="mailto:vagas@montecmococa.com.br" className="font-semibold text-primary hover:text-accent transition-colors">vagas@montecmococa.com.br</a>
                    </p>
                  </div>

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
                          Telefone *
                        </label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="vaga"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Vaga de Interesse *
                      </label>
                      <Select value={formData.vaga} onValueChange={handleSelectChange} required>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione a vaga de interesse" />
                        </SelectTrigger>
                        <SelectContent>
                          {vagas.map((vaga, index) => (
                            <SelectItem key={index} value={vaga}>
                              {vaga}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-foreground mb-2">
                        Currículo (PDF ou DOC) *
                      </span>
                      <label
                        htmlFor="curriculo"
                        className="block cursor-pointer"
                      >
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                          {curriculoFile ? (
                            <>
                              <p className="text-primary font-medium mb-1">
                                {curriculoFile.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {(curriculoFile.size / 1024).toFixed(1)} KB · Clique para trocar o arquivo
                              </p>
                            </>
                          ) : (
                            <>
                              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                              <p className="text-muted-foreground mb-2">
                                Clique para selecionar ou arraste seu currículo aqui
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)
                              </p>
                            </>
                          )}
                        </div>
                        <Input
                          id="curriculo"
                          name="curriculo"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="sr-only"
                          required
                          onChange={(e) => setCurriculoFile(e.target.files?.[0] ?? null)}
                        />
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="mensagem"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Mensagem (opcional)
                      </label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Conte-nos um pouco sobre você e suas expectativas..."
                        className="w-full min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Currículo"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Ao enviar seu currículo, você concorda com nossa política de privacidade e
                      tratamento de dados pessoais.
                    </p>
                  </form>
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
            Construa sua Carreira com a Gente
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Junte-se a uma equipe de profissionais dedicados e apaixonados pelo que fazem. Venha
            fazer parte da nossa história de sucesso!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}


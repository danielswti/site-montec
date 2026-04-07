import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground font-semibold mb-1">
              Montec Mococa
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Última atualização: Fevereiro de 2026
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              A Montec Mococa ("Montec") respeita a sua privacidade e está
              comprometida com a proteção dos dados pessoais tratados por meio
              de seu site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de
              Proteção de Dados – LGPD).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Ao utilizar nosso site, você declara estar ciente das práticas
              descritas nesta Política.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              1. DADOS PESSOAIS COLETADOS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Montec poderá coletar dados pessoais fornecidos voluntariamente
              pelo usuário por meio de formulários ou canais de contato, tais
              como:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Nome completo</li>
              <li>Nome da empresa</li>
              <li>CPF ou CNPJ (quando necessário para orçamento)</li>
              <li>Telefone</li>
              <li>E-mail</li>
              <li>Cidade e Estado</li>
              <li>Informações relacionadas a produtos ou serviços de interesse</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Também poderão ser coletadas automaticamente informações técnicas de
              navegação, como endereço IP, tipo de navegador, páginas acessadas
              e dados de uso, por meio de cookies ou ferramentas de análise.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              2. FINALIDADE DO TRATAMENTO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os dados pessoais são utilizados para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Responder solicitações e elaborar orçamentos</li>
              <li>Realizar atendimento comercial e técnico</li>
              <li>Manter relacionamento profissional</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Melhorar a experiência de navegação no site</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-12">
              A Montec não utiliza dados pessoais para finalidades ilícitas ou
              incompatíveis com as aqui descritas.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              3. BASE LEGAL
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O tratamento de dados pessoais é realizado com fundamento nas bases
              legais previstas na LGPD, conforme aplicável, incluindo:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-12">
              <li>
                Execução de contrato ou de procedimentos preliminares relacionados
                a orçamento
              </li>
              <li>Cumprimento de obrigação legal ou regulatória</li>
              <li>Legítimo interesse da Montec</li>
              <li>Consentimento do titular, quando necessário</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              4. COMPARTILHAMENTO DE DADOS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os dados pessoais poderão ser compartilhados, quando necessário,
              com:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Prestadores de serviços de tecnologia e hospedagem</li>
              <li>Ferramentas de comunicação e gestão comercial</li>
              <li>Autoridades públicas, quando exigido por lei</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-12">
              A Montec não comercializa dados pessoais.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              5. COOKIES
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O site poderá utilizar cookies e tecnologias semelhantes para
              melhorar a experiência de navegação e obter estatísticas de acesso.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              O usuário pode configurar seu navegador para recusar ou excluir
              cookies, ciente de que algumas funcionalidades do site poderão ser
              limitadas.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              6. ARMAZENAMENTO E SEGURANÇA
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Montec adota medidas técnicas e administrativas adequadas para
              proteger os dados pessoais contra acesso não autorizado, perda,
              alteração ou divulgação indevida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Os dados serão armazenados pelo tempo necessário para cumprir as
              finalidades descritas nesta Política ou conforme exigido por lei.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              7. DIREITOS DO TITULAR
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nos termos da LGPD, o titular dos dados pode solicitar:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-12">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados pessoais</li>
              <li>
                Correção de dados incompletos, inexatos ou desatualizados
              </li>
              <li>
                Eliminação de dados desnecessários ou tratados em desconformidade
                com a lei
              </li>
              <li>Revogação do consentimento, quando aplicável</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              8. CONTATO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para exercer seus direitos ou esclarecer dúvidas relacionadas ao
              tratamento de dados pessoais, entre em contato:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <strong>Montec Mococa</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              E-mail para assuntos de privacidade:{" "}
              <a
                href="mailto:contato@montecmococa.com.br"
                className="text-primary hover:underline"
              >
                contato@montecmococa.com.br
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Telefone: (19) 3656-6767
            </p>
          </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

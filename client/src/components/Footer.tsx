import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2C3D] text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
          {/* Sobre a Montec */}
          <div className="text-left">
            <Link href="/">
              <div className="flex items-center mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  src="/LOGOSITEMONTEC1.png"
                  alt="Montec Mococa Logo"
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Desde 1993, oferecendo qualidade e excelência em fabricação de peças metálicas,
              subconjuntos soldados e equipamentos para construção e agricultura.
            </p>
            <p className="text-accent font-semibold mt-4">Qualidade que Inspira Confiança</p>
          </div>

          {/* Links Rápidos */}
          <div className="text-left">
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/institucional/nossa-historia">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Nossa História
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/institucional/certificacoes">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Certificações
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/institucional/sustentabilidade">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Sustentabilidade
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Trabalhe Conosco
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Soluções */}
          <div className="text-left">
            <h3 className="font-bold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solucoes/construcao-mineracao">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Construção e Mineração
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/solucoes/maquinas-agricolas">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Máquinas Agrícolas
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/solucoes/movimentacao-empilhadeiras">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Movimentação
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Processos */}
          <div className="text-left">
            <h3 className="font-bold text-lg mb-4">Processos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/processos/corte-laser">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Corte a Laser
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/processos/corte-cnc">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Corte CNC de Alta Tecnologia
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/processos/conformacao-chapas">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Conformação de Chapas
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/processos/usinagem">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Usinagem
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/processos/montagem-solda">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Montagem e Solda
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/processos/pintura">
                  <a className="text-white/70 hover:text-accent transition-colors text-sm">
                    Pintura Industrial
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-left">
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">(19) 3656-6767</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Av. Primo Quilice, 323 - Chácara São Domingos Shop
                  <br />
                  Mococa - SP, 13734-450
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">contato@montecmococa.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white/70 text-sm">
                  <strong>Horário:</strong> 07:30 às 17:30
                </span>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.facebook.com/montecmococa/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/montecmococa/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://br.linkedin.com/company/montec-mococa-montagens-industriais-ltda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-white/60 text-sm order-2 md:order-1">
              © {currentYear} Montec Mococa. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-1 order-1 md:order-2">
              <Link href="/politica-privacidade">
                <a className="text-white/60 hover:text-accent transition-colors text-sm inline-block">
                  Política de Privacidade
                </a>
              </Link>
              <a
                href="/politicas/POLITICA-DE-QUALIDADE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors text-sm inline-block"
              >
                Política de Qualidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


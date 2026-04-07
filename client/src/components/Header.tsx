import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [location] = useLocation();
  const isHomePage = location === "/";
  const isBannerPage = location !== "/"; // Todas as páginas exceto home têm banner

  // Páginas com fundo claro no topo (sem hero/banner): header sempre com fundo escuro para os links aparecerem
  const lightTopPages = ["/politica-privacidade"];
  const useDarkHeader = isScrolled || lightTopPages.includes(location);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar header transparente no topo em todas as páginas
      setIsScrolled(currentScrollY > 50);

      // Mostrar header ao rolar para cima, esconder ao rolar para baixo
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage, isBannerPage]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    {
      label: "Institucional",
      submenu: [
        { label: "Nossa História", href: "/institucional/nossa-historia" },
        { label: "Certificações", href: "/institucional/certificacoes" },
        { label: "Sustentabilidade", href: "/institucional/sustentabilidade" },
      ],
    },
    {
      label: "Portfólio",
      hasCategories: true,
      submenu: [
        {
          category: "Soluções",
          items: [
            { label: "Construção Civil e Mineração", href: "/solucoes/construcao-mineracao" },
            { label: "Máquinas Agrícolas", href: "/solucoes/maquinas-agricolas" },
            { label: "Movimentação e Empilhadeiras", href: "/solucoes/movimentacao-empilhadeiras" },
          ],
        },
        {
          category: "Processos",
          items: [
            { label: "Corte a Laser", href: "/processos/corte-laser" },
            { label: "Corte CNC", href: "/processos/corte-cnc" },
            { label: "Conformação de Chapas", href: "/processos/conformacao-chapas" },
            { label: "Usinagem", href: "/processos/usinagem" },
            { label: "Montagem e Solda", href: "/processos/montagem-solda" },
            { label: "Pintura Industrial", href: "/processos/pintura" },
            { label: "Laboratório de Qualidade", href: "/processos/laboratorio-qualidade" },
          ],
        },
      ],
    },
    { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"} ${!useDarkHeader ? "bg-transparent" : "bg-[#0D2C3D]/95 backdrop-blur-sm"}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img
                src="/LOGOSITEMONTEC1.png"
                alt="Montec Mococa Logo"
                className="h-10 md:h-12 w-auto transition-all duration-300 opacity-100"
              />
            </div>
          </Link>

          {/* Desktop Menu - Centralizado */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors text-white hover:text-accent`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ width: item.hasCategories ? '720px' : '256px' }}>
                      <div className="py-2">
                        {item.hasCategories ? (
                          // Menu com categorias (Portfólio) - Layout Horizontal
                          <div className="flex divide-x">
                            {item.submenu.map((category: any, catIndex: number) => (
                              <div key={catIndex} className="flex-1 px-4 py-2">
                                <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                                  {category.category}
                                </div>
                                {category.items.map((subitem: any, subindex: number) => (
                                  <Link key={subindex} href={subitem.href}>
                                    <a className="block px-2 py-1.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors rounded">
                                      {subitem.label}
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Menu simples
                          item.submenu.map((subitem: any, subindex: number) => (
                            <Link key={subindex} href={subitem.href}>
                              <a className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors">
                                {subitem.label}
                              </a>
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href!}>
                    <a
                      className={`font-medium transition-colors text-white hover:text-accent`}
                    >
                      {item.label}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6"
              asChild
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <nav className="container py-4">
              {menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  {item.submenu ? (
                    <>
                      <div className="font-semibold text-foreground px-4 py-2">{item.label}</div>
                      {item.hasCategories ? (
                        // Menu mobile com categorias
                        item.submenu.map((category: any, catIndex: number) => (
                          <div key={catIndex} className="mt-2">
                            <div className="px-6 py-1 text-xs font-bold text-primary uppercase tracking-wide">
                              {category.category}
                            </div>
                            {category.items.map((subitem: any, subindex: number) => (
                              <Link key={subindex} href={subitem.href}>
                                <a className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                                  {subitem.label}
                                </a>
                              </Link>
                            ))}
                          </div>
                        ))
                      ) : (
                        // Menu mobile simples
                        item.submenu.map((subitem: any, subindex: number) => (
                          <Link key={subindex} href={subitem.href}>
                            <a className="block px-8 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                              {subitem.label}
                            </a>
                          </Link>
                        ))
                      )}
                    </>
                  ) : (
                    <Link href={item.href!}>
                      <a className="block px-4 py-2 font-medium text-foreground hover:text-primary hover:bg-muted transition-colors">
                        {item.label}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-2 mt-4">
                <Button
                  variant="default"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                  asChild
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


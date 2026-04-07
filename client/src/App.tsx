import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useScrollSnap } from "./hooks/useScrollSnap";
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistoria";
import Certificacoes from "./pages/Certificacoes";
import Contato from "./pages/Contato";
import Sustentabilidade from "./pages/Sustentabilidade";
import TrabalheConosco from "./pages/TrabalheConosco";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import { CorteLaser, CorteCnc, ConformacaoChapas, Usinagem, MontagemSolda, Pintura, LaboratorioQualidade } from "./pages/processos";
import { ConstrucaoMineracao, MaquinasAgricolas, MovimentacaoEmpilhadeiras } from "./pages/solucoes";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function Router() {
  // Ativar scroll snapping globalmente
  useScrollSnap({ enabled: true, type: "mandatory" });

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/institucional/nossa-historia" component={NossaHistoria} />
        <Route path="/institucional/certificacoes" component={Certificacoes} />
        <Route path="/institucional/sustentabilidade" component={Sustentabilidade} />
        {/* Rotas de Soluções */}
        <Route path="/solucoes/construcao-mineracao" component={ConstrucaoMineracao} />
        <Route path="/solucoes/maquinas-agricolas" component={MaquinasAgricolas} />
        <Route path="/solucoes/movimentacao-empilhadeiras" component={MovimentacaoEmpilhadeiras} />
        {/* Rotas de Processos */}
        <Route path="/processos/corte-laser" component={CorteLaser} />
        <Route path="/processos/corte-cnc" component={CorteCnc} />
        <Route path="/processos/conformacao-chapas" component={ConformacaoChapas} />
        <Route path="/processos/usinagem" component={Usinagem} />
        <Route path="/processos/montagem-solda" component={MontagemSolda} />
        <Route path="/processos/pintura" component={Pintura} />
        <Route path="/processos/laboratorio-qualidade" component={LaboratorioQualidade} />
        <Route path="/trabalhe-conosco" component={TrabalheConosco} />
        <Route path="/contato" component={Contato} />
        <Route path="/politica-privacidade" component={PoliticaPrivacidade} />
        {/* Final fallback route */}
        <Route path={":rest*"} component={() => <div>Página não encontrada</div>} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;


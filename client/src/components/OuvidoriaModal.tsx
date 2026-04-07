import { useState } from "react";
import { X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface OuvidoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OuvidoriaModal({ isOpen, onClose }: OuvidoriaModalProps) {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    descricao: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Validação básica
    if (!formData.assunto.trim() || !formData.descricao.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      setIsSubmitting(false);
      return;
    }

    if (!isAnonymous && !formData.email.trim()) {
      toast.error("Por favor, forneça um e-mail para contato.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/ouvidoria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          assunto: formData.assunto,
          descricao: formData.descricao,
          isAnonymous,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.message || "Erro ao enviar denúncia. Tente novamente.");
        setIsSubmitting(false);
        return;
      }
      toast.success("Denúncia enviada com sucesso! Obrigado por contribuir com a integridade da Montec.");
      setFormData({
        nome: "",
        email: "",
        assunto: "",
        descricao: "",
      });
      setIsAnonymous(true);
      setIsSubmitting(false);
      onClose();
    } catch {
      toast.error("Erro ao enviar denúncia. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 text-white p-6 flex items-center justify-between border-b">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-6 h-6" />
            <div>
              <h2 className="text-2xl font-bold">Ouvidoria</h2>
              <p className="text-sm text-white/80">Sistema de Denúncia Anônima</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-muted-foreground mb-6">
            Este é um canal seguro e confidencial para denunciar irregularidades, violações de ética ou condutas inadequadas. Sua identidade será protegida se desejar permanecer anônimo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Identificação */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Como você gostaria de se identificar? *
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="identificacao"
                    checked={isAnonymous}
                    onChange={() => setIsAnonymous(true)}
                    className="w-4 h-4"
                  />
                  <span className="text-foreground">Anônimo</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="identificacao"
                    checked={!isAnonymous}
                    onChange={() => setIsAnonymous(false)}
                    className="w-4 h-4"
                  />
                  <span className="text-foreground">Identificado</span>
                </label>
              </div>
            </div>

            {/* Dados Identificação (Condicional) */}
            {!isAnonymous && (
              <>
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
                    required={!isAnonymous}
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail para Contato *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required={!isAnonymous}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Usaremos apenas para retorno sobre sua denúncia
                  </p>
                </div>
              </>
            )}

            {/* Assunto */}
            <div>
              <label
                htmlFor="assunto"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Tipo de Denúncia *
              </label>
              <Input
                id="assunto"
                name="assunto"
                type="text"
                required
                value={formData.assunto}
                onChange={handleChange}
                placeholder="Ex: Conduta inadequada, Violação de ética, Assédio, etc."
                className="w-full"
              />
            </div>

            {/* Descrição */}
            <div>
              <label
                htmlFor="descricao"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Descrição Detalhada *
              </label>
              <Textarea
                id="descricao"
                name="descricao"
                required
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Descreva os detalhes da denúncia, incluindo data, local, pessoas envolvidas e qualquer outra informação relevante..."
                className="w-full min-h-[150px]"
              />
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Confidencialidade:</strong> Todas as denúncias são tratadas com confidencialidade máxima. Investigaremos todas as alegações de forma justa e imparcial.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                {isSubmitting ? "Enviando..." : "Enviar Denúncia"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

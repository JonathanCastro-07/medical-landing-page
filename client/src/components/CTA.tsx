import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Integrar com backend para capturar leads
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transforme Sua Rotina Clínica com IA
            </h2>
            <p className="text-lg text-muted-foreground">
              Comece com 14 dias de acesso gratuito. Grava áudio, a IA estrutura o prontuário. Sem cartão de crédito.
            </p>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Começar Teste Grátis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Agendar Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-primary">14</p>
              <p className="text-xs text-muted-foreground">Dias Grátis</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-xs text-muted-foreground">Cartão de Crédito</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Funcional</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Fique atualizado sobre novidades
            </h3>
            <p className="text-muted-foreground mb-6">
              Receba atualizações sobre novos recursos, compliance updates e melhores práticas clínicas.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-white border-border"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap"
                >
                  Inscrever
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Sem spam. Conformidade LGPD garantida.
              </p>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <p className="text-sm text-accent font-medium">
                  ✓ Obrigado! Verifique seu email.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para modernizar sua clínica?
            </h2>
            <p className="text-lg text-muted-foreground">
              14 dias grátis. Sem cartão. Cancele quando quiser.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Começar Grátis por 14 Dias
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Ver Planos
            </Button>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-muted-foreground mb-6">
              Cadastre-se para receber atualizações e acesso antecipado a novos recursos.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Seu email profissional"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white border-border"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap"
                >
                  Inscrever
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Sem spam. Cancele quando quiser.
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

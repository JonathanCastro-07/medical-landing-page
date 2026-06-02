import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-muted pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Prontuário Médico
                <span className="text-primary block">Inteligente e Seguro</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Organize sua clínica, cuide melhor dos seus pacientes. Prontuários eletrônicos, agenda integrada e documentos com assinatura qualificada — tudo em um só lugar.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "Prontuários eletrônicos com templates personalizados",
                "Anamnese digital com consentimento LGPD",
                "Agenda integrada com lembretes automáticos",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Confiado por profissionais de saúde</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">2.400+</p>
                  <p className="text-xs text-muted-foreground">Profissionais Ativos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">310k</p>
                  <p className="text-xs text-muted-foreground">Prontuários Criados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full">
              {/* Hero Dashboard Image */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707783547/G8iUbg3cn2yoC26ePGHw5a/hero-medical-dashboard-bFjA8FNcdccRUMcnZuHtri.webp"
                alt="MedCare Dashboard"
                className="rounded-2xl shadow-lg border border-border w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

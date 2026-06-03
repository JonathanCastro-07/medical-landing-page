import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-muted pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Prontuário com IA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Grava a Consulta,
                <span className="text-primary block">a IA Estrutura o Prontuário</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transcrição automática em tempo real, geração de prontuário no padrão CFM com 14 seções, sugestão de CID-10 e conselheiro clínico com evidência científica.
              </p>
            </div>

            {/* How It Works - Quick */}
            <div className="space-y-3 bg-white border border-border rounded-lg p-6">
              <p className="text-sm font-semibold text-muted-foreground">FLUXO EM 5 PASSOS</p>
              <div className="space-y-2">
                {[
                  "Seleciona paciente e aceita LGPD",
                  "Grava a consulta por áudio",
                  "IA transcreve e estrutura dados clínicos",
                  "Revisa, confirma CID-10 e vê sugestões",
                  "Assina digitalmente e compartilha",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-foreground pt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Começar Teste Grátis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Ver Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Conforme com CFM, LGPD e segurança de dados</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">14</p>
                  <p className="text-xs text-muted-foreground">Seções CFM Automáticas</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Assinatura Digital</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full">
              {/* Hero Dashboard Image */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707783547/G8iUbg3cn2yoC26ePGHw5a/hero-ai-medical-recording-GcX2ZnKM54MxoAnsd9b5YU.webp"
                alt="Prontuário com IA"
                className="rounded-2xl shadow-lg border border-border w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

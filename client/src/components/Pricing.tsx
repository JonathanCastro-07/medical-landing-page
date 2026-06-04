import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plano Individual",
    price: " R$ 99/mês",
    description: "Para médicos autônomos e profissionais de saúde",
    features: [
      "Até 500 consultas/mês",
      "Gravação de áudio ilimitada",
      "Transcrição com Whisper",
      "Prontuário CFM automático",
      "Sugestão de CID-10",
      "Assinatura digital",
      "Verificação pública",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Plano Profissional",
    price: "R$ 199/mês",
    description: "Para clínicas e consultórios com múltiplos médicos",
    features: [
      "Consultas ilimitadas",
      "Múltiplos médicos",
      "Conselheiro clínico com PubMed",
      "Gestão de pacientes",
      "Dashboard e analytics",
      "Prescrição integrada",
      "Relatórios e repositório",
      "Suporte prioritário",
      "Integração com EHR (roadmap)",
    ],
    highlighted: true,
  },
  {
    name: "Plano Clínica",
    price: "Customizado",
    description: "Para redes, hospitais e grandes operações",
    features: [
      "Tudo do plano Clínica",
      "Receituário controlado (roadmap)",
      "API de integração",
      "Logs de auditoria avançados",
      "SLA dedicado",
      "Consultoria de implementação",
      "Treinamento de equipe",
      "Suporte 24/7",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos para Todos os Tamanhos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde profissionais autônomos até grandes redes de saúde. Sem
            contratos de longa duração.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`card-subtle p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/50 shadow-lg scale-105 md:scale-100 md:ring-2 md:ring-primary/20"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-3xl font-bold text-primary">
                  {plan.price}
                </span>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-primary text-primary hover:bg-primary/5"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                Solicite Agora
              </Button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Esta na dúvida em qual escolher? Faça agora mesmo o teste gratuito.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
          >
            Solicitar teste gratuito
          </Button>
        </div>
      </div>
    </section>
  );
}

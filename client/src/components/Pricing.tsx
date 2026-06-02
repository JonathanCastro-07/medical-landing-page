import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "67",
    description: "Ideal para profissionais iniciando",
    features: [
      "Até 100 pacientes",
      "1 usuário",
      "Prontuários básicos",
      "Agenda simples",
      "Suporte por email",
      "Backup diário",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "127",
    description: "Recomendado para clínicas em crescimento",
    features: [
      "Até 1.000 pacientes",
      "5 usuários",
      "Prontuários avançados",
      "Agenda multiprofissional",
      "Anamnese digital",
      "Assinatura qualificada",
      "Suporte prioritário",
      "Relatórios financeiros",
    ],
    highlighted: true,
  },
  {
    name: "Clínica",
    price: "197",
    description: "Para clínicas consolidadas",
    features: [
      "Pacientes ilimitados",
      "Usuários ilimitados",
      "Todos os recursos Pro",
      "Subdomínio próprio",
      "API de integração",
      "Gestão financeira completa",
      "Suporte 24/7",
      "Consultoria personalizada",
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
            Planos que se adaptam ao seu negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            14 dias grátis, sem cartão de crédito. Cancele quando quiser.
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
                    RECOMENDADO
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
                <span className="text-4xl font-bold text-primary">
                  R$ {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">/mês</span>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-primary text-primary hover:bg-primary/5"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                Começar com {plan.name}
              </Button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Precisa de um plano customizado?
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Fale com nosso time
          </Button>
        </div>
      </div>
    </section>
  );
}

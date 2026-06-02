import { Card } from "@/components/ui/card";
import {
  FileText,
  Calendar,
  Lock,
  MessageSquare,
  BarChart3,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Prontuários Eletrônicos",
    description:
      "Templates personalizados por especialidade. Campos dinâmicos, histórico de versões e armazenamento criptografado.",
  },
  {
    icon: MessageSquare,
    title: "Anamnese Digital",
    description:
      "Envie links de anamnese por WhatsApp. O paciente preenche no celular antes da consulta, com consentimento LGPD.",
  },
  {
    icon: Calendar,
    title: "Agenda Integrada",
    description:
      "Visualização semanal, múltiplos profissionais e lembretes automáticos para o paciente.",
  },
  {
    icon: Lock,
    title: "Assinatura Qualificada",
    description:
      "Declarações e contratos assinados via CPF + OTP no WhatsApp. Não-repúdio sem certificado digital.",
  },
  {
    icon: BarChart3,
    title: "Gestão Financeira",
    description:
      "Acompanhe receita, repasse médico e fluxo de caixa em tempo real com relatórios prontos.",
  },
  {
    icon: Globe,
    title: "Subdomínio Próprio",
    description:
      "Sua clínica em suaclinica.medcare.com.br com SSL automático e disponibilidade 24/7.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa para uma clínica moderna
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido para psicólogos, nutricionistas, fisioterapeutas e outros profissionais de saúde.
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707783547/G8iUbg3cn2yoC26ePGHw5a/features-illustration-jN66fQEu8bZjSmyHZeT3T2.webp"
            alt="Recursos MedCare"
            className="rounded-2xl shadow-lg border border-border w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="card-subtle p-6 md:p-8 hover:shadow-lg hover:border-primary/20 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

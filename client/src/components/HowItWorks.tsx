import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Nova Consulta",
    description:
      "Seleciona paciente, aceita consentimento LGPD e inicia gravação de áudio.",
  },
  {
    number: "02",
    title: "Transcrição em Tempo Real",
    description:
      "Whisper transcreve automaticamente enquanto você consulta. Nenhuma digitação necessária.",
  },
  {
    number: "03",
    title: "IA Estrutura Prontuário",
    description:
      "GPT-4o extrai dados clínicos e gera prontuário em 14 seções (padrão CFM).",
  },
  {
    number: "04",
    title: "Revisão e CID-10",
    description:
      "Você revisa o texto, confirma CID-10 sugerido e vê recomendações clínicas.",
  },
  {
    number: "05",
    title: "Prescrição",
    description:
      "Gera prescrição médica vinculada à consulta, de modo fácil e rápido.",
  },
  {
    number: "06",
    title: "Assinatura Digital",
    description:
      "Assina com SHA-256. Gera token de verificação e link público compartilhável.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fluxo Comercial: Do Áudio ao Prontuário Assinado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seis passos simples que transformam uma consulta em prontuário
            estruturado, validado e pronto para compartilhamento seguro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && idx % 3 !== 2 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-1/2 -z-10" />
              )}

              <Card className="card-subtle p-8 text-center hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Public Validation
        <div className="mt-16 md:mt-20 bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Verificação Pública Sem Login
            </h3>
            <p className="text-muted-foreground mb-6">
              Qualquer pessoa (paciente, convênio, perito) pode validar a autenticidade do prontuário através de um link público com token SHA-256. Nenhuma login necessário.
            </p>
            <p className="text-sm text-muted-foreground">
              Acesse <span className="font-mono text-primary">/validar/:token</span> para confirmar a integridade do documento
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

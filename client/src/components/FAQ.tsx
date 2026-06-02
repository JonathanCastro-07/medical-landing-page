import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. Sem multas ou fidelidade. Ao cancelar, você mantém acesso até o fim do período pago.",
  },
  {
    question: "Os dados dos pacientes são seguros?",
    answer:
      "Todos os dados sensíveis são criptografados com AES-256-GCM exclusivo por clínica. Conformidade LGPD completa.",
  },
  {
    question: "O que acontece ao fim do trial?",
    answer:
      "Você pode assinar um plano pago para continuar. Seus dados ficam disponíveis para exportação por 30 dias.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim. Upgrade imediato com cobrança proporcional. Downgrade entra em vigor no próximo ciclo.",
  },
  {
    question: "Funciona para equipes?",
    answer:
      "Sim. Cada clínica pode ter múltiplos profissionais com perfis de acesso distintos.",
  },
  {
    question: "E se eu perder meus dados?",
    answer:
      "Fazemos backup diário com RPO de 24 horas. Em caso de falha crítica, nosso RTO é de 4 horas. Você também pode exportar todos os seus dados a qualquer momento.",
  },
  {
    question: "Meus dados ficam seguros se eu cancelar?",
    answer:
      "Após o cancelamento, seus dados ficam disponíveis para exportação por 30 dias. Um ZIP completo é gerado automaticamente.",
  },
  {
    question: "Existe integração com outros sistemas?",
    answer:
      "Sim. Oferecemos API de integração nos planos Pro e Clínica. Fale com nosso time para mais detalhes.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre a MedCare.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border rounded-lg px-6 py-4 data-[state=open]:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Estamos aqui para ajudar.
          </p>
          <a
            href="mailto:support@medcare.com"
            className="inline-block px-6 py-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Fale com nosso suporte →
          </a>
        </div>
      </div>
    </section>
  );
}

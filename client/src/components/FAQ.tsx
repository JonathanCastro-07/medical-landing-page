import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a transcrição de áudio?",
    answer:
      "Usamos OpenAI Whisper para transcrever em tempo real. O áudio é dividido em chunks de 30s com upload contínuo. A transcrição começa enquanto você ainda está consultando.",
  },
  {
    question: "A IA gera o prontuário completo?",
    answer:
      "Sim. GPT-4o extrai dados clínicos da transcrição e estrutura em 14 seções (padrão CFM). Você revisa, edita e confirma antes de assinar. Nunca é 100% automático — você tem controle total.",
  },
  {
    question: "Como funciona a sugestão de CID-10?",
    answer:
      "A IA sugere códigos CID-10 com nível de confiança. A busca é integrada ao catálogo oficial DATASUS (14.233 códigos). Você confirma ou altera antes de finalizar.",
  },
  {
    question: "O prontuário é válido legalmente?",
    answer:
      "Sim, com assinatura digital SHA-256. Cada prontuário tem um token único e imutável. Qualquer pessoa pode validar a autenticidade via link público. Falta ICP-Brasil para valor jurídico pleno (em roadmap).",
  },
  {
    question: "Como funciona a verificação pública?",
    answer:
      "Você gera um link público com token SHA-256. Pacientes, convênios e peritos conseguem validar a autenticidade do documento SEM fazer login. Perfeito para compartilhamento seguro.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim. RLS ativo em todas as tabelas, consentimento LGPD checado, dados isolados por médico (multi-tenant). Conformidade LGPD completa. Falta: política de retenção e logs de acesso avançados.",
  },
  {
    question: "Funciona no celular?",
    answer:
      "Sim. É uma PWA instalável. Funciona em iOS e Android. Você consegue gravar consultas e acessar prontuários offline (com sincronização quando voltar online).",
  },
  {
    question: "Qual é o diferencial comparado a outros prontuários?",
    answer:
      "Captura por voz + transcrição automática + prontuário CFM estruturado + conselheiro clínico com PubMed + verificação pública. Nenhum outro prontuário combina isso tudo.",
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
            Tudo que você precisa saber sobre a plataforma, IA e compliance.
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
            Ainda tem dúvidas? Agende uma conversa com nosso time.
          </p>
          <a
            href="mailto:contato@medcare.com"
            className="inline-block px-6 py-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Fale com nosso suporte →
          </a>
        </div>
      </div>
    </section>
  );
}

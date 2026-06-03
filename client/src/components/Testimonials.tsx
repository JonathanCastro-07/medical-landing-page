import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Não preciso mais digitar notas. Gravo a consulta, a IA estrutura tudo em 5 minutos. Prontuário pronto para assinar.",
    author: "Dr. Ricardo S.",
    role: "Cardiologista",
    avatar: "R",
    rating: 5,
  },
  {
    quote:
      "A sugestão de CID-10 é muito precisa. Economiza tempo e reduz erros de codificação. Já valida com meus pacientes.",
    author: "Dra. Marina L.",
    role: "Clínica Geral",
    avatar: "M",
    rating: 5,
  },
  {
    quote:
      "O link de verificação pública é um diferencial. Meus pacientes conseguem validar o documento e compartilhar com convênios.",
    author: "Dr. Felipe M.",
    role: "Ortopedista",
    avatar: "F",
    rating: 5,
  },
  {
    quote:
      "Transcrição em tempo real é impecável. Funciona bem até em consultório com ruído. Muito melhor que digitar tudo.",
    author: "Dra. Juliana P.",
    role: "Pediatra",
    avatar: "J",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Médicos que Confiam na Plataforma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que profissionais de saúde dizem sobre a transformação da sua rotina clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="card-subtle p-6 md:p-8 flex flex-col hover:shadow-lg transition-all duration-200"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "A anamnese digital mudou minha rotina. Meus pacientes chegam com as informações já preenchidas — aproveito muito mais o tempo de consulta.",
    author: "Dra. Camila R.",
    role: "Psicóloga",
    avatar: "C",
    rating: 5,
  },
  {
    quote:
      "Finalmente um prontuário que entende o fluxo de um nutricionista. Templates customizáveis, histórico de versões e tudo criptografado.",
    author: "Carlos M.",
    role: "Nutricionista",
    avatar: "C",
    rating: 5,
  },
  {
    quote:
      "A assinatura eletrônica com CPF + WhatsApp é um diferencial enorme. Sem papel, sem impressão, com validade jurídica.",
    author: "Dra. Fernanda S.",
    role: "Fisioterapeuta",
    avatar: "F",
    rating: 5,
  },
  {
    quote:
      "Organização perfeita da agenda, integração com WhatsApp e relatórios financeiros automáticos. Recomendo!",
    author: "Dr. Paulo V.",
    role: "Médico",
    avatar: "P",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profissionais que confiam na plataforma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos usuários têm a dizer sobre a MedCare.
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
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

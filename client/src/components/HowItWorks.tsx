import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    description: "Registro em menos de 2 minutos. Nenhuma configuração técnica necessária.",
  },
  {
    number: "02",
    title: "Cadastre seus pacientes",
    description: "Importe ou adicione manualmente. Todos os dados ficam criptografados.",
  },
  {
    number: "03",
    title: "Comece a atender",
    description: "Prontuários, anamnese e documentos disponíveis desde o primeiro dia.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simples de começar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leve apenas alguns minutos para configurar sua clínica e começar a usar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-1/2 -z-10" />
              )}

              <Card className="card-subtle p-8 text-center hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
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

        {/* Specialties */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-6">
            PARA DIVERSAS ESPECIALIDADES
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Acupuntura",
              "Biomedicina",
              "Educação Física",
              "Enfermagem",
              "Farmácia",
              "Fisioterapia",
              "Fonoaudiologia",
              "Medicina",
              "Nutrição",
              "Odontologia",
              "Psicologia",
              "Terapia Ocupacional",
            ].map((specialty) => (
              <span
                key={specialty}
                className="px-4 py-2 bg-white border border-border rounded-full text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

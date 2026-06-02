import { Card } from "@/components/ui/card";
import { Shield, Lock, Database, CheckCircle2 } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "AES-256-GCM",
    description: "Criptografia de ponta por clínica — chave derivada individualmente.",
  },
  {
    icon: CheckCircle2,
    title: "Conformidade LGPD",
    description: "Você é o controlador dos dados. Nós apenas operamos por sua instrução.",
  },
  {
    icon: Database,
    title: "Backup Diário",
    description: "RPO de 24h, armazenado em localização geograficamente separada.",
  },
  {
    icon: Shield,
    title: "Auditoria Completa",
    description: "Todo acesso a dados sensíveis é registrado e auditável.",
  },
];

export default function Security() {
  return (
    <section id="security" className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Segurança que seus pacientes merecem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prontuários clínicos exigem o mais alto nível de proteção. Construímos a plataforma com segurança em primeiro lugar.
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707783547/G8iUbg3cn2yoC26ePGHw5a/security-illustration-ZetfQDMccnLY6MnEqbXDdZ.webp"
            alt="Segurança e Conformidade LGPD"
            className="rounded-2xl shadow-lg border border-border w-full max-w-2xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="card-subtle p-6 md:p-8 text-center hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Additional Security Info */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Certificações e Conformidade
            </h3>
            <div className="space-y-4">
              {[
                { title: "LGPD", desc: "Lei Geral de Proteção de Dados" },
                { title: "HIPAA Ready", desc: "Preparado para conformidade internacional" },
                { title: "ISO 27001", desc: "Gestão de segurança da informação" },
                { title: "Backup Redundante", desc: "Múltiplas localizações geográficas" },
              ].map((cert, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Proteção de Dados
            </h4>
            <ul className="space-y-3">
              {[
                "Criptografia end-to-end de todos os dados sensíveis",
                "Isolamento de dados por clínica",
                "Acesso baseado em papéis (RBAC)",
                "Logs de auditoria detalhados",
                "Conformidade com regulamentações de saúde",
                "Política de retenção de dados clara",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-foreground">
                  <span className="text-primary font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Shield, Lock, FileCheck, AlertCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: FileCheck,
    title: "Padrão CFM",
    description: "Prontuário estruturado em 14 seções conforme normas do Conselho Federal de Medicina.",
  },
  {
    icon: Lock,
    title: "Assinatura Digital SHA-256",
    description: "Hash criptográfico do PDF. Token de verificação único e imutável para cada documento.",
  },
  {
    icon: Shield,
    title: "Conformidade LGPD",
    description: "RLS ativo, consentimento checado, dados sensíveis isolados por médico (multi-tenant).",
  },
  {
    icon: AlertCircle,
    title: "Red Flags e Alertas",
    description: "Sistema de alertas automáticos para condições críticas e situações de risco clínico.",
  },
];

export default function Security() {
  return (
    <section id="security" className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compliance e Segurança Médica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Construído com conformidade regulatória desde o início. Cada prontuário é validável, auditável e seguro.
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707783547/G8iUbg3cn2yoC26ePGHw5a/security-compliance-medical-ju2sciJBJoxaebPZ2yGcXq.webp"
            alt="Segurança e Conformidade Médica"
            className="rounded-2xl shadow-lg border border-border w-full max-w-2xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
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

        {/* Compliance Matrix */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Conformidade Regulatória
            </h3>
            <div className="space-y-4">
              {[
                { title: "CFM", desc: "Prontuário em 14 seções, assinatura digital, revogação" },
                { title: "LGPD", desc: "RLS por médico, consentimento versionado, dados isolados" },
                { title: "Segurança", desc: "RLS em todas as tabelas, CORS, secrets no Supabase" },
                { title: "Auditoria", desc: "Logs de acesso, rastreamento de alterações, histórico completo" },
              ].map((cert, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
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
              Roadmap de Compliance
            </h4>
            <ul className="space-y-3">
              {[
                "✓ Assinatura digital SHA-256",
                "✓ Verificação pública sem login",
                "✓ Prontuário CFM 14 seções",
                "✓ LGPD com RLS",
                "⏳ ICP-Brasil (certificado digital)",
                "⏳ Receituário de medicamentos controlados",
                "⏳ Logs de auditoria avançados",
                "⏳ API de integração com EHR",
              ].map((item, idx) => (
                <li key={idx} className="text-sm text-foreground">
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

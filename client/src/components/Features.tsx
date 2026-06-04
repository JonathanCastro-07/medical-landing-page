import { Card } from "@/components/ui/card";
import {
  Mic,
  Brain,
  FileText,
  Stethoscope,
  BookOpen,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Gravação de Áudio",
    description:
      "Grava a consulta em chunks de 30s com upload contínuo. Funciona no celular (PWA) ou desktop.",
  },
  {
    icon: Brain,
    title: "Transcrição com IA",
    description:
      "OpenAI Whisper transcreve em tempo real. Separa automaticamente fala com paciente de instruções ditadas.",
  },
  {
    icon: FileText,
    title: "Prontuário CFM Automático",
    description:
      "Gera prontuário estruturado em 14 seções (padrão CFM). Pronto para revisão, edição e assinatura digital.",
  },
  {
    icon: Stethoscope,
    title: "Sugestão de CID-10",
    description:
      "IA sugere códigos CID-10 com nível de confiança. Busca integrada no catálogo oficial DATASUS (14.233 códigos).",
  },
  {
    icon: BookOpen,
    title: "Conselheiro Clínico",
    description:
      "Sugestões de exames, red flags, diagnósticos diferenciais e protocolos. Artigos PubMed traduzidos para português.",
  },
  {
    icon: Shield,
    title: "Assinatura Digital Segura",
    description:
      "Hash SHA-256 + token de verificação. Link público compartilhável para validação sem login.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sua Inteligência Artificial para Prontuários
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para capturar, estruturar e validar
            prontuários médicos com segurança e conformidade.
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707783547/G8iUbg3cn2yoC26ePGHw5a/ai-transcription-cfm-flow-P4Re29pLEqyh2QvxgdM9Pt.webp"
            alt="Fluxo de IA: Áudio para Prontuário CFM"
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

import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg">MedCare</span>
            </div>
            <p className="text-sm text-white/70">
              Prontuário médico inteligente e seguro para profissionais de saúde.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Produto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="space-y-4">
            <h4 className="font-semibold">Conformidade</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  CFM Resolução 2.314/22
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LGPD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Segurança de Dados
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Auditoria
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LGPD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {[
              { label: "Twitter", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "WhatsApp", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className="text-center space-y-2 text-sm text-white/60">
            <p>
              © {currentYear} MedCare. Todos os direitos reservados.
            </p>
            <p>
              Conforme CFM, LGPD e segurança de dados. Assinatura digital SHA-256 + verificação pública.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

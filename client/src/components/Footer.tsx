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
              <div className="w-16 h-16">
                <img src="public\img\logoIA.png" alt="Logo" />
              </div>
              <span className="font-bold text-lg">Prontuário IA</span>
            </div>
            <p className="text-sm text-white/70">
              Prontuário médico inteligente e seguro para profissionais de
              saúde.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4 ">
            <h4 className="font-semibold">Produto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Preços
                </a>
              </li>

              <li>
                <a
                  href="#security"
                  className="hover:text-white transition-colors"
                >
                  Segurança de Dados
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Social Links */}

          {/* Bottom */}
          <div className="text-center space-y-2 text-sm text-white/60">
            <p>© {currentYear} Prontuário IA. Todos os direitos reservados.</p>
            <p>
              Conforme CFM, LGPD e segurança de dados. Assinatura digital
              SHA-256 + verificação pública.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

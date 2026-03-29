import Link from 'next/link'
import { Shield, Phone, MapPin, AtSign, Mail } from 'lucide-react'

const FooterMoviSul = () => {
  return (
    <footer className="bg-[#0a1f33] dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield
                className="w-8 h-8 text-[#34c785] dark:text-[#34c785]"
                strokeWidth={1.5}
              />
              <span className="text-2xl font-bold text-white dark:text-gray-100">
                MoviSul
              </span>
            </div>
            <p className="text-white/60 dark:text-gray-400 text-sm leading-relaxed">
              Saúde &amp; Segurança do Trabalho. Soluções completas para
              empresas que valorizam segurança, performance e conformidade.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white dark:text-gray-100">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-white/60 dark:text-gray-400">
              <a
                href="tel:66997188890"
                className="flex items-center gap-3 hover:text-[#34c785] dark:hover:text-[#34c785] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (66) 99718-8890
              </a>
              <a
                href="tel:66999254544"
                className="flex items-center gap-3 hover:text-[#34c785] dark:hover:text-[#34c785] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (66) 99925-4544
              </a>
              <a
                href="mailto:contato@movisul.com.br"
                className="flex items-center gap-3 hover:text-[#34c785] dark:hover:text-[#34c785] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                contato@movisul.com.br
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white dark:text-gray-100">
              Endereço
            </h4>
            <div className="space-y-3 text-sm text-white/60 dark:text-gray-400">
              <a
                href="https://maps.app.goo.gl/XtXEKcKs2MEipFqZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white dark:hover:text-gray-100 transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Rua G, 102 — Rondonópolis/MT</span>
              </a>
              <a
                href="https://www.instagram.com/mmovisul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#34c785] dark:hover:text-[#34c785] transition-colors"
              >
                <AtSign className="w-4 h-4 shrink-0" />
                @mmovisul
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 dark:border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 dark:text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} MoviSul — Saúde &amp; Segurança do
            Trabalho. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="hover:text-white/60 dark:hover:text-gray-300 transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterMoviSul

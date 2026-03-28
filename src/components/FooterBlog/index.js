import Link from 'next/link'
import { Shield, Phone, MapPin, AtSign, Mail } from 'lucide-react'

const FooterBlog = () => {
  return (
    <footer style={{ background: 'var(--mediumBackground)', borderTop: '1px solid var(--borders)', color: 'var(--texts)', transition: 'background 0.2s ease, color 0.2s ease' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8" strokeWidth={1.5} style={{ color: 'var(--highlight)' }} />
              <span className="text-2xl font-bold" style={{ color: 'var(--postColor)' }}>MoviSul</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--texts)' }}>
              Saúde &amp; Segurança do Trabalho. Soluções completas para empresas que
              valorizam segurança, performance e conformidade.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--postColor)' }}>Contato</h4>
            <div className="space-y-3 text-sm" style={{ color: 'var(--texts)' }}>
              <a
                href="tel:66997188890"
                className="flex items-center gap-3 transition-colors"
                style={{ color: 'var(--texts)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--highlight)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--texts)'}
              >
                <Phone className="w-4 h-4 shrink-0" />
                (66) 99718-8890
              </a>
              <a
                href="tel:66999254544"
                className="flex items-center gap-3 transition-colors"
                style={{ color: 'var(--texts)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--highlight)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--texts)'}
              >
                <Phone className="w-4 h-4 shrink-0" />
                (66) 99925-4544
              </a>
              <a
                href="mailto:contato@movisul.com.br"
                className="flex items-center gap-3 transition-colors"
                style={{ color: 'var(--texts)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--highlight)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--texts)'}
              >
                <Mail className="w-4 h-4 shrink-0" />
                contato@movisul.com.br
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--postColor)' }}>Endereço</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.app.goo.gl/XtXEKcKs2MEipFqZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors"
                style={{ color: 'var(--texts)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--postColor)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--texts)'}
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Rua G, 102 — Rondonópolis/MT</span>
              </a>
              <a
                href="https://instagram.com/mmovisul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors"
                style={{ color: 'var(--texts)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--highlight)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--texts)'}
              >
                <AtSign className="w-4 h-4 shrink-0" />
                @mmovisul
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid var(--borders)', color: 'var(--texts)', opacity: 0.7 }}
        >
          <p>
            &copy; {new Date().getFullYear()} MoviSul — Saúde &amp; Segurança do Trabalho.
            Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            style={{ color: 'var(--texts)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--highlight)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--texts)'}
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterBlog

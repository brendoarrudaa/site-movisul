import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Phone, MapPin, Mail } from 'lucide-react'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
)

const socialLinks = [
  {
    href: 'https://www.instagram.com/mmovisul',
    label: 'Instagram',
    Icon: InstagramIcon
  },
  {
    href: 'https://www.linkedin.com/company/movisul',
    label: 'LinkedIn',
    Icon: LinkedInIcon
  },
  {
    href: 'https://www.tiktok.com/@movisul',
    label: 'TikTok',
    Icon: TikTokIcon
  }
]

const menuLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/#equipe', label: 'Equipe' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' }
]

const solutions = [
  'Gestão de Riscos (PGR/GRO)',
  'Laudos Técnicos (LTCAT)',
  'eSocial SST',
  'Consultoria em Segurança',
  'Treinamentos e Capacitação',
  'Projetos de Prevenção'
]

const FooterMoviSul = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(window.__theme || 'light')
    window.__onThemeChange(t => setTheme(t))
  }, [])

  const isDark = theme === 'dark'

  return (
    <footer className="bg-[#fcfcfc] dark:bg-[#072741] border-t border-gray-200/60 dark:border-gray-700/50 text-[#1f2937] dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 — Logo + tagline + redes sociais */}
          <div>
            <Link href="/" className="flex items-center mb-5">
              <Image
                src={
                  isDark
                    ? '/assets/img/logo-dark.png'
                    : '/assets/img/logo-light.png'
                }
                alt="MoviSul"
                width={100}
                height={46}
                sizes="100px"
                priority
                className="block object-contain"
                style={{ width: '100px', height: '46px' }}
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
              Saúde e Segurança do Trabalho —{' '}
              <span className="font-semibold text-[#0f4c81] dark:text-[#34c785]">
                Protegendo pessoas. Fortalecendo negócios.
              </span>
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700/60 text-gray-500 dark:text-gray-300 hover:bg-[#0f4c81] hover:text-white dark:hover:bg-[#34c785] dark:hover:text-[#071e34] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Menu */}
          <div>
            <h4 className="font-bold text-base mb-5 text-gray-900 dark:text-gray-100 uppercase tracking-wide">
              Menu
            </h4>
            <ul className="space-y-2.5">
              {menuLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0f4c81] dark:hover:text-[#34c785] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Soluções */}
          <div>
            <h4 className="font-bold text-base mb-5 text-gray-900 dark:text-gray-100 uppercase tracking-wide">
              Soluções
            </h4>
            <ul className="space-y-2.5">
              {solutions.map(s => (
                <li key={s}>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contatos */}
          <div>
            <h4 className="font-bold text-base mb-5 text-gray-900 dark:text-gray-100 uppercase tracking-wide">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <a
                href="tel:66997188890"
                className="flex items-center gap-3 hover:text-[#34c785] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (66) 99718-8890
              </a>
              <a
                href="tel:66999254544"
                className="flex items-center gap-3 hover:text-[#34c785] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (66) 99925-4544
              </a>
              <a
                href="mailto:contato@movisul.com.br"
                className="flex items-center gap-3 hover:text-[#34c785] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                contato@movisul.com.br
              </a>
              <a
                href="https://maps.app.goo.gl/UFeNYiPpE8adVuYc8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Rua G, 102 — Rondonópolis/MT</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300/70 dark:border-gray-700 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MoviSul — Saúde &amp; Segurança do
            Trabalho. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterMoviSul

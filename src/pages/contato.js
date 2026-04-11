import { useState } from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import { generateNextSeo } from 'next-seo/pages'
import FooterMoviSul from 'components/FooterMoviSul'
import MissionSection from 'components/MissionSection'
import { MapPin, Mail, Phone } from 'lucide-react'

const contactInfo = [
  {
    Icon: MapPin,
    title: 'Local',
    lines: ['Rua G, 102 — Rondonópolis/MT']
  },
  {
    Icon: Mail,
    title: 'E-mail',
    lines: ['contato@movisul.com.br']
  },
  {
    Icon: Phone,
    title: 'Telefones',
    lines: ['(66) 99718-8890', '(66) 99925-4544']
  }
]

const WHATSAPP_NUMBER = '5566997188890'

const ContatoPage = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    celular: '',
    assunto: '',
    descricao: ''
  })
  const [showModal, setShowModal] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const message = [
      `Olá! Vim pelo site da MoviSul e gostaria de entrar em contato.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*E-mail:* ${form.email}`,
      form.celular ? `*Celular:* ${form.celular}` : null,
      `*Assunto:* ${form.assunto}`,
      form.descricao ? `*Descrição:* ${form.descricao}` : null
    ]
      .filter(line => line !== null)
      .join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setShowModal(true)
    setForm({ nome: '', email: '', celular: '', assunto: '', descricao: '' })
  }

  return (
    <Layout>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-[#0d3f6b] rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-[#2a9d6e]/15 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-8 h-8 text-[#2a9d6e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1a202c] dark:text-gray-100 mb-2">
              Redirecionando para o WhatsApp!
            </h3>
            <p className="text-[#718096] dark:text-gray-400 text-sm leading-relaxed mb-6">
              Sua mensagem foi preparada. Conclua o envio pelo WhatsApp e nossa equipe retornará em breve.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full rounded-full bg-[#2a9d6e] hover:bg-[#238a5e] text-white font-semibold py-3 text-sm transition-colors duration-200"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
      <Head>
        {generateNextSeo({
          title: 'Contato | MoviSul - Saúde e Segurança do Trabalho',
          description:
            'Entre em contato com a MoviSul. Solicite um diagnóstico gratuito ou tire suas dúvidas sobre saúde e segurança do trabalho.',
          canonical: 'https://movisul.com/contato'
        })}
      </Head>

      <section className="min-h-screen py-24 bg-[#f7fafc] dark:bg-[#071e34] relative overflow-hidden">
        {/* Mapa de fundo decorativo */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-center bg-no-repeat bg-cover pointer-events-none"
          style={{ backgroundImage: "url('/assets/img/world-map.svg')" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#0f4c81] dark:text-[#63b3ed] mb-12">
            Como podemos ajudar?
          </h1>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Lado esquerdo — informações de contato */}
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ Icon, title, lines }) => (
                <div
                  key={title}
                  className="flex items-start gap-5 bg-white dark:bg-[#0d3f6b] rounded-2xl border border-gray-200 dark:border-[#1a5a96]/40 shadow-sm p-6"
                >
                  <div className="w-13 h-13 shrink-0 rounded-full bg-[#0f4c81] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0f4c81] dark:text-[#63b3ed] text-base mb-1">
                      {title}
                    </p>
                    {lines.map(line => (
                      <p
                        key={line}
                        className="text-[#4a5568] dark:text-gray-300 text-sm leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Lado direito — formulário */}
            <form
              onSubmit={handleSubmit}
              className="bg-linear-to-br from-[#0a2e4f] via-[#0f4c81] to-[#1a3a5c] rounded-3xl p-8 flex flex-col gap-4 shadow-xl relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                required
                value={form.nome}
                onChange={handleChange}
                className="relative z-10 w-full rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#2a9d6e]/60 focus:bg-white/15 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={form.email}
                onChange={handleChange}
                className="relative z-10 w-full rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#2a9d6e]/60 focus:bg-white/15 transition-all"
              />
              <input
                type="tel"
                name="celular"
                placeholder="Celular"
                maxLength={15}
                value={form.celular}
                onChange={handleChange}
                className="relative z-10 w-full rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#2a9d6e]/60 focus:bg-white/15 transition-all"
              />
              <input
                type="text"
                name="assunto"
                placeholder="Assunto"
                required
                value={form.assunto}
                onChange={handleChange}
                className="relative z-10 w-full rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#2a9d6e]/60 focus:bg-white/15 transition-all"
              />
              <textarea
                name="descricao"
                placeholder="Descrição"
                rows={4}
                value={form.descricao}
                onChange={handleChange}
                className="relative z-10 w-full rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#2a9d6e]/60 focus:bg-white/15 transition-all resize-none"
              />
              <button
                type="submit"
                className="relative z-10 w-full rounded-full bg-[#2a9d6e] hover:bg-[#238a5e] text-white font-semibold py-4 text-sm shadow-lg shadow-[#2a9d6e]/30 transition-colors duration-200 mt-1"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterMoviSul />
    </Layout>
  )
}

export default ContatoPage

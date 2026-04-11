import { useEffect, useRef } from 'react'
import { Shield, Eye, Users, TrendingUp } from 'lucide-react'

const pillars = [
  {
    Icon: Shield,
    title: 'Proteção à vida',
    desc: 'Zero acidentes com afastamentos em nossos projetos'
  },
  {
    Icon: Eye,
    title: 'Visão prática',
    desc: 'Atuação no campo, não apenas em relatórios'
  },
  {
    Icon: Users,
    title: 'Equipe multidisciplinar',
    desc: 'Engenheiros, médicos, técnicos e fisioterapeutas'
  },
  {
    Icon: TrendingUp,
    title: 'Melhoria contínua',
    desc: 'Filosofia Kaizen aplicada à segurança'
  }
]

const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.fade-up')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-14 sm:py-20 bg-gray-100 dark:bg-[#071e34]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4c81]/5 dark:bg-[#63b3ed]/10 text-sm font-semibold text-[#0f4c81] dark:text-[#63b3ed] uppercase tracking-widest mb-4">
              Sobre a MoviSul
            </span>
            <h2 className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out text-3xl sm:text-4xl font-bold text-[#1a202c] dark:text-gray-100 mb-6">
              Uma história de crescimento e excelência
            </h2>
            <p className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out text-[#4a5568] dark:text-white leading-relaxed mb-6">
              A MoviSul é uma empresa fundada, com foco em Gestão Saúde e
              Segurança do Trabalho. Desde o início, a empresa tem se destacado
              pelo desenvolvimento e utilização das mais avançadas técnicas e
              tecnologias, sempre buscando entregar resultados de excelência e
              duradouros para seus clientes. Com base em um trabalho de alto
              nível e uma orientação voltada à melhoria contínua em Saúde e
              Segurança do Trabalho, que faz parte do DNA da marca, a MoviSul
              cresceu significativamente ao longo dos anos. Já atuamos em vários
              estados brasileiros, atendendo clientes de diversos setores e
              regiões do país, consolidando sua atuação em grande parte do
              território nacional.
            </p>
            <p className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-300 ease-out text-[#4a5568] dark:text-white leading-relaxed">
              As caixas de proteção à vida, visão prática a cor tem que ser
              diferente do fundo, pra destaque .
            </p>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="fade-up opacity-0 translate-y-6 transition-[opacity,transform,box-shadow,border-color] duration-700 ease-out group bg-white dark:bg-[#0d3f6b] rounded-2xl p-6 border border-gray-200 dark:border-[#1a5a96]/40 shadow-md hover:shadow-xl hover:border-[#0f4c81]/40 dark:hover:border-[#34c785]/40 flex flex-col gap-3"
                style={{ transitionDelay: `${(i + 3) * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0f4c81]/8 dark:bg-[#63b3ed]/10 flex items-center justify-center text-[#0f4c81] dark:text-[#34c785] group-hover:bg-[#0f4c81] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1a202c] dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-[#718096] dark:text-white leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}

export default AboutSection

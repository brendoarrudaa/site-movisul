import { useEffect, useRef } from 'react'
import { UserCircle } from 'lucide-react'

// Dados de placeholder — substituir com fotos e informações reais de cada membro.
const team = [
  {
    name: 'Especialista em SST',
    role: 'Engenheiro de Segurança do Trabalho',
    specialty: 'PGR · GRO · NRs',
    photo: null
  },
  {
    name: 'Especialista em Saúde',
    role: 'Médico do Trabalho',
    specialty: 'PCMSO · Saúde Ocupacional',
    photo: null
  },
  {
    name: 'Especialista em Higiene',
    role: 'Higienista Ocupacional',
    specialty: 'Agentes físicos · Químicos · Biológicos',
    photo: null
  },
  {
    name: 'Especialista em Ergonomia',
    role: 'Fisioterapeuta do Trabalho',
    specialty: 'AET · NR-17 · Ergonomia',
    photo: null
  },
  {
    name: 'Especialista em eSocial',
    role: 'Analista de SST',
    specialty: 'eSocial SST · S-2210 · S-2220 · S-2240',
    photo: null
  },
  {
    name: 'Especialista em Meio Ambiente',
    role: 'Técnico de Segurança',
    specialty: 'Meio Ambiente · PSCIP · SPDA',
    photo: null
  }
]

const EquipeSection = () => {
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
      id="equipe"
      ref={sectionRef}
      className="py-14 sm:py-20 bg-gray-100 dark:bg-[#071e34]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4c81]/5 dark:bg-[#63b3ed]/10 text-sm font-semibold text-[#0f4c81] dark:text-[#63b3ed] uppercase tracking-widest mb-4">
            Nossa Equipe
          </span>
          <h2 className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out text-3xl sm:text-4xl font-bold text-[#1a202c] dark:text-gray-100">
            Profissionais{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0f4c81] to-[#2a9d6e]">
              multidisciplinares
            </span>{' '}
            à sua disposição
          </h2>
          <p className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out mt-4 text-lg text-[#4a5568] dark:text-gray-400">
            Engenheiros, médicos, técnicos e especialistas unidos por um único
            objetivo: a segurança da sua equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(({ name, role, specialty, photo }, i) => (
            <div
              key={i}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out group bg-white dark:bg-[#0d3f6b] rounded-2xl p-6 border border-gray-200 dark:border-[#1a5a96]/40 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              {/* Foto ou avatar placeholder */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-linear-to-br from-[#0f4c81] to-[#2a9d6e] flex items-center justify-center shadow-lg">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-14 h-14 text-white/80" strokeWidth={1} />
                )}
              </div>

              <h3 className="font-bold text-[#1a202c] dark:text-gray-100 text-base mb-1">
                {name}
              </h3>
              <p className="text-sm font-medium text-[#0f4c81] dark:text-[#63b3ed] mb-2">
                {role}
              </p>
              <span className="inline-block text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#071e34]/60 rounded-full px-3 py-1">
                {specialty}
              </span>
            </div>
          ))}
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

export default EquipeSection

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const clients = [
  { name: 'Suzano Papel e Celulose', logo: '/assets/img/Suzano.png' },
  { name: 'Hydro Mineração', logo: '/assets/img/HydroMineracao.png' },
  { name: 'Guerdal', logo: '/assets/img/Guerdal.png' },
  { name: 'Bracell', logo: '/assets/img/Bracell.png' },
  { name: 'ADM do Brasil', logo: '/assets/img/ADMdoBrasil.png' },
  { name: 'Bom Jesus', logo: '/assets/img/BomJesus.png' },
  { name: 'Suzano Papel Logo', logo: '/assets/img/SuzanoPapelLogo.png' }
]

const ClientsSection = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const positionRef = useRef(0)
  const rafRef = useRef(null)

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

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = 0.4

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= speed
        const halfWidth = track.scrollWidth / 2
        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current = 0
        }
        track.style.transform = `translateX(${positionRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPaused])

  const doubled = [...clients, ...clients]

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-14 sm:py-20 bg-[#f7fafc] dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a9d6e]/10 text-sm font-semibold text-[#2a9d6e] uppercase tracking-widest mb-4">
          Clientes
        </span>
        <h2 className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out text-3xl sm:text-4xl font-bold text-[#1a202c] dark:text-gray-100 mb-4">
          Empresas que confiam na{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0f4c81] to-[#2a9d6e] dark:text-white">
            MoviSul
          </span>
        </h2>
        <p className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out text-lg text-[#4a5568] dark:text-white max-w-2xl mx-auto mb-12">
          Atendemos grandes empresas dos setores de mineração, construção,
          logística, agroindústria e área florestal.
        </p>
      </div>

      <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-300 ease-out overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:border-[#0f4c81]/20 transition-all duration-300 px-5 py-3"
              style={{ flexShrink: 0 }}
            >
              {/* Logo sempre com fundo branco para visibilidade */}
              <div
                className="relative shrink-0 bg-white rounded-lg"
                style={{ width: '116px', height: '70px' }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
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

export default ClientsSection

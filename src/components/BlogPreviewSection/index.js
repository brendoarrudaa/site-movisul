import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'indicadores-sst-dados-prevencao',
    image: '/assets/img-blog/sst-dados-indicadores.png',
    title: 'Indicadores de SST: como usar dados para prevenir acidentes',
    description: 'Descubra como usar dados de SST para tomar decisões mais seguras.'
  },
  {
    slug: 'sst-digital-tecnologia-seguranca',
    image: '/assets/img-blog/tecnologia-sst-digital.png',
    title: 'SST digital: como a tecnologia está transformando a segurança do trabalho',
    description: 'Veja como a digitalização está mudando a forma de fazer SST nas empresas.'
  },
  {
    slug: 'movisul-implantacao-sistemas-iso',
    image: '/assets/img-blog/movisul-servicos-completos-de-sst.png',
    title: 'Implantação de sistemas ISO 9001 e 45001: como a Movisul apoia empresas na certificação',
    description: 'Saiba como a Movisul atua na implantação e manutenção de sistemas de gestão ISO com foco em SST.'
  }
]

const BlogPreviewSection = () => {
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
    <section ref={sectionRef} className="py-14 sm:py-20 lg:py-28 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a9d6e]/10 text-sm font-semibold text-[#2a9d6e] uppercase tracking-widest mb-4">
            Blog
          </span>
          <h2 className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out text-3xl sm:text-4xl font-bold text-[#1a202c] dark:text-gray-100">
            Últimas do{' '}
            <span className="text-[#0f4c81] dark:text-[#63b3ed]">blog</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out group"
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                <figure>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-base leading-snug group-hover:text-[#0f4c81] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#718096] leading-relaxed">
                    {post.description}
                  </p>
                  <div className="card-actions justify-start mt-2">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2a9d6e] group-hover:gap-2 transition-all">
                      Continue lendo <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-500 ease-out text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f4c81] text-white font-semibold text-sm hover:bg-[#0d3f6e] transition-colors"
          >
            Ver todos os artigos <ArrowRight size={16} />
          </Link>
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

export default BlogPreviewSection

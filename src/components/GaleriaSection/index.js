import { useState } from 'react'
import Image from 'next/image'

const categories = [
  'Todos',
  'Segurança do Trabalho',
  'Meio Ambiente',
  'Ergonomia',
  'SST no eSocial',
  'Higiene Ocupacional',
  'Cursos e Treinamentos'
]

const placeholders = [
  {
    src: '/assets/img/servicos-video.gif',
    alt: 'Inspeção de segurança em campo',
    caption: '',
    category: 'Segurança do Trabalho'
  },
  {
    src: '/assets/img/hero-bg.jpg',
    alt: 'Avaliação ambiental em área de operação',
    caption: '',
    category: 'Meio Ambiente'
  },
  {
    src: '/assets/img/hero-bg.jpg',
    alt: 'Análise ergonômica do posto de trabalho',
    caption: '',
    category: 'Ergonomia'
  },
  {
    src: '/assets/img/hero-bg.jpg',
    alt: 'Gestão dos eventos SST no eSocial',
    caption: '',
    category: 'SST no eSocial'
  },
  {
    src: '/assets/img/hero-bg.jpg',
    alt: 'Medição de agentes físicos — higiene ocupacional',
    caption: '',
    category: 'Higiene Ocupacional'
  },
  {
    src: '/assets/img/hero-bg.jpg',
    alt: 'Treinamento NR-35 — trabalho em altura',
    caption: '',
    category: 'Cursos e Treinamentos'
  },
  {
    src: '/assets/img/hero-bg.jpg',
    alt: 'Auditoria de conformidade com NRs',
    caption: '',
    category: 'Segurança do Trabalho'
  },
  {
    src: '/assets/img/hero-bg.jpg',
    alt: 'Programa de monitoramento ambiental',
    caption: '',
    category: 'Meio Ambiente'
  }
]

const GaleriaSection = ({ photos = [] }) => {
  const allPhotos = photos.length > 0 ? photos : placeholders
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered =
    activeCategory === 'Todos'
      ? allPhotos
      : allPhotos.filter(p => p.category === activeCategory)

  return (
    <section id="galeria" className="py-14 sm:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 pt-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4c81]/5 dark:bg-[#63b3ed]/10 text-xl md:text-2xl font-semibold text-[#0f4c81] dark:text-[#63b3ed] uppercase tracking-widest mb-4">
            Galeria
          </span>
          <h2 className="text-3xl pt-4 sm:text-4xl font-bold text-[#1a202c] dark:text-gray-100 leading-tight">
            Mais do que consultoria, promovemos uma cultura de segurança , saúde
            e sustentabilidade
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros laterais */}
          <aside className="lg:w-52 shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white mb-3 pl-1">
              Filtrar por
            </p>
            <ul className="flex flex-row flex-wrap lg:flex-col gap-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full cursor-pointer text-left text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-[#0f4c81] text-white shadow-md shadow-[#0f4c81]/20'
                        : 'text-[#4a5568] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid de fotos */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a2e4f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium leading-snug">
                    {photo.caption || photo.alt}
                  </p>
                </div>
                <span className="absolute top-2 right-2 text-[10px] font-semibold bg-[#0f4c81]/80 text-white px-2 py-0.5 rounded-full">
                  {photo.category}
                </span>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-gray-400 dark:text-gray-500 py-16">
                Nenhuma foto nesta categoria ainda.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GaleriaSection

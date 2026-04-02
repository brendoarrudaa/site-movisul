import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BlogPreviewSection = ({ posts = [] }) => {
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
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out group flex flex-col bg-[#f7fafc] dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg overflow-hidden"
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              {post.frontmatter.image && (
                <div className="relative w-full h-48 shrink-0">
                  <Image
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-[#1a202c] dark:text-gray-100 text-base leading-snug mb-3 group-hover:text-[#0f4c81] dark:group-hover:text-[#63b3ed] transition-colors">
                  {post.frontmatter.title}
                </h3>
                <p className="text-sm text-[#718096] dark:text-gray-400 leading-relaxed flex-1">
                  {post.frontmatter.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2a9d6e] group-hover:gap-2 transition-all">
                  Continue lendo <ArrowRight size={14} />
                </span>
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

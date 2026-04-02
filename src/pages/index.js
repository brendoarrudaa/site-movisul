import Layout from 'components/Layout'
import Head from 'next/head'
import { generateNextSeo } from 'next-seo/pages'
import HeroSection from 'components/HeroSection'
import AboutSection from 'components/AboutSection'
import DifferentialsSection from 'components/DifferentialsSection'
import ServicesSection from 'components/ServicesSection'
import HowItWorksSection from 'components/HowItWorksSection'
import ClientsSection from 'components/ClientsSection'
import TestimonialsSection from 'components/TestimonialsSection'
import MissionSection from 'components/MissionSection'
import CTASection from 'components/CTASection'
import FooterMoviSul from 'components/FooterMoviSul'
import BlogPreviewSection from 'components/BlogPreviewSection'
import { getAllPosts } from 'lib/api'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MoviSul',
  url: 'https://movisul.com',
  logo: 'https://movisul.com/assets/img/movisul-icon.png',
  description:
    'Gestao Inteligente em Saude e Seguranca do Trabalho. Solucoes completas para empresas que valorizam seguranca, performance e conformidade.',
  sameAs: [
    'https://www.linkedin.com/company/movisul',
    'https://www.instagram.com/mmovisul'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contato@movisul.com',
    telephone: '+55-66-99718-8890',
    availableLanguage: 'Portuguese'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'RJ',
    addressLocality: 'Rio de Janeiro'
  },
  areaServed: 'BR',
  knowsAbout: [
    'Seguranca do Trabalho',
    'Saude Ocupacional',
    'PGR',
    'PCMSO',
    'eSocial SST',
    'Normas Regulamentadoras'
  ]
}

const Home = ({ recentPosts }) => {
  return (
    <Layout>
      <Head>
        {generateNextSeo({
          title:
            'MoviSul | Gestao Inteligente em Saude e Seguranca do Trabalho',
          description:
            'Solucoes completas em SST para empresas que valorizam seguranca, performance e conformidade. +120 projetos executados, +16 anos de experiencia.',
          canonical: 'https://movisul.com',
          openGraph: {
            images: [
              {
                url: 'https://movisul.com/assets/img/movisul-icon.png',
                width: 900,
                height: 630,
                alt: 'MoviSul - Saude e Seguranca do Trabalho'
              }
            ]
          }
        })}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </Head>
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <ServicesSection />
      <HowItWorksSection />
      <ClientsSection />
      <TestimonialsSection />
      <MissionSection />
      <BlogPreviewSection posts={recentPosts} />
      <CTASection />
      <FooterMoviSul />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 3).map(post => ({
    slug: post.slug,
    frontmatter: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      image: post.frontmatter.image || null,
    }
  }))

  return { props: { recentPosts } }
}

export default Home

import Layout from 'components/Layout'
import Head from 'next/head'
import { generateNextSeo } from 'next-seo/pages'
import AboutSection from 'components/AboutSection'
import DifferentialsSection from 'components/DifferentialsSection'
import ClientsSection from 'components/ClientsSection'
import TestimonialsSection from 'components/TestimonialsSection'
import FooterMoviSul from 'components/FooterMoviSul'

const SobrePage = () => {
  return (
    <Layout>
      <Head>
        {generateNextSeo({
          title: 'Sobre | MoviSul - Saúde e Segurança do Trabalho',
          description:
            'Conheça a MoviSul: história, missão, números e os clientes que confiam em nossa gestão de saúde e segurança do trabalho.',
          canonical: 'https://movisul.com/sobre'
        })}
      </Head>
      <AboutSection />
      <DifferentialsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FooterMoviSul />
    </Layout>
  )
}

export default SobrePage

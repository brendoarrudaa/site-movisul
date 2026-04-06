import Layout from 'components/Layout'
import Head from 'next/head'
import { generateNextSeo } from 'next-seo/pages'
import GaleriaSection from 'components/GaleriaSection'
import FooterMoviSul from 'components/FooterMoviSul'
import { getAllGalleryPhotos } from 'lib/gallery'

const GaleriaPage = ({ galleryPhotos }) => {
  return (
    <Layout>
      <Head>
        {generateNextSeo({
          title: 'Galeria | MoviSul - Saúde e Segurança do Trabalho',
          description:
            'Confira nossa galeria de fotos com registros de segurança do trabalho, meio ambiente, ergonomia, higiene ocupacional e treinamentos.',
          canonical: 'https://movisul.com/galeria'
        })}
      </Head>
      <GaleriaSection photos={galleryPhotos} />
      <FooterMoviSul />
    </Layout>
  )
}

export async function getStaticProps() {
  const galleryPhotos = getAllGalleryPhotos()
  return { props: { galleryPhotos } }
}

export default GaleriaPage

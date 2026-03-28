import Image from 'next/image'

import * as S from './styled'
import { event } from 'lib/gtag'
import Link from 'next/link'

const AdBlog = ({ name, url }) => {
  return (
    <Link href="/contato">
      <S.AdBlogWrapper
        onClick={() => {
          event({
            action: 'click_blog',
            category: 'Blog Anuncio',
            label: `Anuncio de ${name} da Movisul`
          })
        }}
      >
        <Image
          src={url}
          alt={`Anuncio de ${name} da Movisul`}
          width={270}
          height={270}
          loading="eager"
        />
      </S.AdBlogWrapper>
    </Link>
  )
}

export default AdBlog

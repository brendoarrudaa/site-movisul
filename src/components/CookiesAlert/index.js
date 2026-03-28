import Link from 'next/link'
import * as S from './styled'
import { event } from 'lib/gtag'

const CookiesAlert = ({ setOpen }) => {
  const handleAccept = () => {
    if (localStorage) {
      localStorage.setItem('accept-cookies', 'true')
    }
    setOpen(true)
    event({
      action: 'click_politicas',
      category: 'Modal Politicas',
      label: 'Aceitar'
    })
  }

  const handleReject = () => {
    if (localStorage) {
      localStorage.setItem('accept-cookies', 'false')
    }
    setOpen(false)
    event({
      action: 'click_politicas',
      category: 'Modal Politicas',
      label: 'Recusar'
    })
  }

  return (
    <S.CookiesContainer>
      <div>
        <p>
          Nós usamos cookies e outras tecnologias semelhantes para melhorar sua
          experiência em nossos serviços, personalizar publicidade e recomendar
          conteúdo de seu interesse.
        </p>
        <p>
          Para mais informações, leia a nossa{' '}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </p>
      </div>
      <S.CookiesActions>
        <button
          className="btn btn-sm btn-primary"
          onClick={handleAccept}
        >
          Aceitar
        </button>
        <button
          className="btn btn-sm btn-ghost"
          onClick={handleReject}
        >
          Recusar
        </button>
      </S.CookiesActions>
    </S.CookiesContainer>
  )
}

export default CookiesAlert

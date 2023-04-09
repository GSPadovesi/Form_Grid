import * as S from './Formulario.styles'
import Logo from '../../assets/logo.png'
import Pc from '../../assets/ux.png'
import Face from '../../assets/facebook.png'
import Insta from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Mad from '../../assets/mad.png'
import Man_One from '../../assets/man_one.png'
import Woman_One from '../../assets/woman_one.png'
import Man_Two from '../../assets/man_two.png'
import Woman_Two from '../../assets/woman_two.png'
import { ButtonHeader } from '../../components/ButtonHeader/ButtonHeader';
import { ButtonAvatar } from '../../components/ButtonAvatar/ButtonAvatar';
import { InputForm } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

const imageAvatar = [
  {
    image: Mad
  },
  {
    image: Man_One
  },
  {
    image: Woman_One
  },
  {
    image: Man_Two
  },
  {
    image: Woman_Two
  }
]

export const Formulario = () => {
  return (
    <>
      <S.Container>
        <S.DivIllustration>
          <S.IllustrationTitleDiv>
            <img src={Logo} alt="Logo" />
            <S.IluuustrationTitle>Formulario</S.IluuustrationTitle>
          </S.IllustrationTitleDiv>
          <img src={Pc} alt="Imagen Ilustrativa" />
          <S.IluuustrationFooter>
            <S.UlFooter>
              <S.LiFooter><img src={Face} alt='Facebook' /></S.LiFooter>
              <S.LiFooter><img src={Insta} alt='Facebook' /></S.LiFooter>
              <S.LiFooter><img src={Twitter} alt='Facebook' /></S.LiFooter>
              <S.LiFooter>Privacidade</S.LiFooter>
              <S.LiFooter>Termos</S.LiFooter>
              <S.LiFooter>Ajuda</S.LiFooter>
            </S.UlFooter>
          </S.IluuustrationFooter>
        </S.DivIllustration>
        <S.DivForm>
          <S.FormHeader>
            <S.HeaderUl>
              <S.HeaderLi>Produtos</S.HeaderLi>
              <S.HeaderLi>Suporte</S.HeaderLi>
              <S.HeaderLi>Outros</S.HeaderLi>
              <S.HeaderLi>Planos</S.HeaderLi>
              <ButtonHeader label='Download Now' />
            </S.HeaderUl>
          </S.FormHeader>
          <S.FormTitle>Olá, vamos começar</S.FormTitle>
          <S.FormParagraph>Escolha seu avatar</S.FormParagraph>
          <S.FormDiv>
            {imageAvatar.map((item: any) => <ButtonAvatar {...item} />)}
          </S.FormDiv>
          <InputForm label='Email' />
          <InputForm label='Senha' />
          <Button label='Criar conta' />
          <S.FormParagraph>Ja tem uma conta, clique aqui para fazer o login</S.FormParagraph>
          <S.FormFooter>
            <S.ParagraphFooter>© 2023 Todos os direitos reservados</S.ParagraphFooter>
          </S.FormFooter>
        </S.DivForm>
      </S.Container>
    </>
  )
}
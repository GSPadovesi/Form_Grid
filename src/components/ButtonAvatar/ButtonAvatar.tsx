import * as S from './ButtonAvatar.styles'
import { ButtonAvatarProps } from './ButtonAvatar.type'

export const ButtonAvatar = (props: ButtonAvatarProps) => {
  const { image, smallImage } = props;

  return <S.Button {...props} image={image} smallImage={smallImage} />
}
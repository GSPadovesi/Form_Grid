import * as S from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
  const { label } = props;

  return <S.Button {...props}>{label}</S.Button>
}
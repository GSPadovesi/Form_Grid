import * as S from './ButtonHeader.styles'
import { ButtonHeaderProps } from './ButtonHeader.types'

export const ButtonHeader = ({ label, ...props }: ButtonHeaderProps) => {
  return <S.Button {...props}>{label}</S.Button>
}
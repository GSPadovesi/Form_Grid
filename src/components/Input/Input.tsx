import * as S from './Input.styles'
import { InputProps } from './Input.types'

export const InputForm = ({ label, ...props }: InputProps) => {
  return <S.Input  {...props}>{label}</S.Input>
}
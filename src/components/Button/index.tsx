import { ReactNode } from 'react'

// Styled
import { Container } from './styled'

interface Props {
  caption: ReactNode | string
  onClick?: (...args: unknown[]) => void
  disabled?: boolean
}

function Button({ caption, disabled, onClick }: Props) {
  return <Container onClick={onClick} $disabled={disabled}>{caption}</Container>
}

export default Button

import { ReactNode } from 'react'

// Styled
import { Container } from './styled'

interface Props {
  caption: ReactNode | string
  onClick?: (...args: unknown[]) => void
}

function Button({ caption, onClick }: Props) {
  return <Container onClick={onClick}>{caption}</Container>
}

export default Button

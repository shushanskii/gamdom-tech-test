import { ReactNode } from 'react'

// Styled
import { Container } from './styled'

interface Props {
  caption: ReactNode | string
}

function Button({ caption }: Props) {
  return <Container>{caption}</Container>
}

export default Button

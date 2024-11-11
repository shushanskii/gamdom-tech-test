import { CSSProperties } from 'react'

// Components
import Button from 'components/Button'

// Styled
import { Bets, Container, Image, Numbers, Title, Wrapper } from './styled'

interface Props {
  style?: CSSProperties
}

function Card({ style }: Props) {
  return (
    <Container style={style}>
      <Image src={'https://placehold.co/275x175'} />
      <Wrapper>
        <Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at enim
          convallis ipsum pellentesque semper in eget justo.
        </Title>
        <Bets>
          <Numbers>9999</Numbers>
          <Button caption={'Bet'} />
        </Bets>
      </Wrapper>
    </Container>
  )
}

export default Card

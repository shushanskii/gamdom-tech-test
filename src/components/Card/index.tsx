// Components
import Button from 'components/Button'

// Styled
import { Bets, Container, Image, Numbers, Title, Wrapper } from './styled'

function Card() {
  return (
    <Container>
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

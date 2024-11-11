// Components
import Button from 'components/Button'

// Styled
import { Bets, Container, Numbers, Title } from './styled'

interface Props {
  id: string
  sport: string
  competitor1: string
  competitor2: string
  bets: number
}

function Card({ sport, competitor1, competitor2, bets }: Props) {
  return (
    <Container>
      <Title>{sport}</Title>
      <Title>{competitor1}</Title>
      <Title>{competitor2}</Title>
      <Bets>
        <Numbers>{bets}</Numbers>
        <Button caption={'Bet'} />
      </Bets>
    </Container>
  )
}

export default Card

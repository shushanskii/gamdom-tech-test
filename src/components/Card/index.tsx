import { useDispatch } from 'react-redux'

// Components
import Button from 'components/Button'

// Actions
import { Actions } from 'sagas/app'

// Styled
import { Bets, Competitor, Container, Numbers, Title } from './styled'

interface Props {
  id: string
  sport: string
  competitors: {
    name: string
    bets: number
  }[]
}

function Card({ id, sport, competitors }: Props) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(Actions.modalOpen(id))
  }

  return (
    <Container>
      <Title>{sport}</Title>
      <Competitor>
        {competitors[0].name} - {competitors[0].bets}
      </Competitor>
      <Competitor>
        {competitors[1].name}- {competitors[1].bets}
      </Competitor>
      <Bets>
        <Numbers>{competitors[0].bets + competitors[1].bets}</Numbers>
        <Button caption={'Bet'} onClick={handleClick} />
      </Bets>
    </Container>
  )
}

export default Card

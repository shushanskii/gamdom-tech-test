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
  competitors: Record<string, number>
}

function Competition({ id, sport, competitors }: Props) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(Actions.modalOpen(id))
  }

  const sum = Object.values(competitors).reduce<number>((result, bets) => {
    result += bets
    return result
  }, 0)

  return (
    <Container>
      <Title>{sport}</Title>
      {Object.entries(competitors).map(([name, bets], index) => (
        <Competitor key={`${name}-${id}-${index}-competitor`}>
          {name} - {bets}
        </Competitor>
      ))}
      <Bets>
        <Numbers>{sum}</Numbers>
        <Button caption={'Bet'} onClick={handleClick} />
      </Bets>
    </Container>
  )
}

export default Competition

import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { useDispatch } from 'react-redux'

// Actions
import { Actions } from 'sagas/app'

// Selectors
import useCompetition from 'selectors/useSelectCompetition'
import useSelectCurrentId from 'selectors/useSelectCurrentId'

// Components
import Checkbox from 'components/Checkbox'
import Button from 'components/Button'

// Styled
import { Bottom, Container, Title } from './styled'

function MakeBet(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const dispatch = useDispatch()
  const id = useSelectCurrentId()
  const [competitor, setCompetitor] = useState<string | undefined>(undefined)
  const competition = useCompetition()

  if (!competition || !id) {
    return null
  }

  const handleChange = (competitor: string) => setCompetitor(competitor)

  const handleClick = (id: string, name: string) => () =>
    dispatch(Actions.makeBet(id , name))

  const { competitors, sport } = competition

  return (
    <Container {...props}>
      <Title>Make bet!</Title>
      <div>{sport}</div>
      {Object.entries(competitors).map(([name], index) => (
        <Checkbox
          key={`${index}-${name}-modal`}
          label={name}
          checked={name === competitor}
          onChange={handleChange}
        />
      ))}
      <Bottom>
        <Button caption={'Bet!'} onClick={handleClick(id, competitor as string)} />
      </Bottom>
    </Container>
  )
}

export default MakeBet

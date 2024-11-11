import { DetailedHTMLProps, HTMLAttributes } from 'react'

// Selectors
import useCompetition from 'selectors/useSelectCompetition'

// Components
import Button from 'components/Button'

// Styled
import { Bottom, Container, Title } from './styled'

function MakeBet(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const competition = useCompetition()

  if(!competition) {
    return null
  }

  return (
    <Container {...props}>
      <Title>Make bet!</Title>
      <Bottom>
        <Button caption={'Bet!'} />
      </Bottom>
    </Container>
  )
}

export default MakeBet

// Components
import Competition from 'components/Competition'

// Types
import { Competition as CompetitionType } from 'store/data'

// Styled
import { Container } from './styled'

interface Props {
  competitions: Record<string, CompetitionType>
}

function Competitions({ competitions }: Props) {
  return (
    <Container>
      {Object.entries(competitions).map(([id, rest], index) => (
        <Competition
          id={id}
          {...rest}
          key={`${id}-${index}-card`}
        />
      ))}
    </Container>
  )
}

export default Competitions

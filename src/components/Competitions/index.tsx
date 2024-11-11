// Components
import Card from 'components/Card'

// Types
import { Competition } from 'store/data'

// Styled
import { Container } from './styled'

interface Props {
  competitions: Record<string, Competition>
}

function Competitions({ competitions }: Props) {
  return (
    <Container>
      {Object.entries(competitions).map(([id, rest], index) => (
        <Card
          id={id}
          {...rest}
          key={`${id}-${index}-card`}
        />
      ))}
    </Container>
  )
}

export default Competitions

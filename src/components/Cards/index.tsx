// Components
import Card from 'components/Card'

// Types
import { Item } from 'store/data'

// Styled
import { Container } from './styled'

interface Props {
  data: Record<string, Item>
}

function Cards({ data }: Props) {
  return (
    <Container>
      {Object.entries(data).map(([id, rest], index) => (
        <Card
          id={id}
          {...rest}
          key={`${id}-${index}-card`}
        />
      ))}
    </Container>
  )
}

export default Cards

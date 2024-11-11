import { useDispatch } from 'react-redux'

// Actions
import { Actions } from 'sagas/app'

// Sports
import useSelectSports from 'selectors/useSelectSports'

// Styled
import { Container, Filter } from './styled'

function Navbar() {
  const dispatch = useDispatch()
  const options = useSelectSports()

  const handleChange = (option: unknown) => {
    // @ts-expect-error: 'could be null'
    dispatch(Actions.setFilter(option ? option.id : null))
  }

  return (
    <Container>
      <Filter options={options} onChange={handleChange} isClearable={true} />
    </Container>
  )
}

export default Navbar

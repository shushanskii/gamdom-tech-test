import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import Competitions from 'components/Competitions'

// Selectors
import useSelectCompetitions from 'selectors/useSelectCompetitions'

// Actions
import { Actions } from 'sagas/data'

// Styled
import { Container } from './styled'

function Main() {
  const dispatch = useDispatch()
  const competitions = useSelectCompetitions()

  useEffect(() => {
    dispatch(Actions.fetchData())
  }, [])

  return (
    <Container>
      <Competitions competitions={competitions}/>
    </Container>
  )
}

export default Main

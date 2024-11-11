// Components
import Cards from 'components/Cards'

// Styled
import { Container } from './styled'

// Types
import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Actions } from 'sagas/data'

function Main() {
  const dispatch = useDispatch()

  const data = useSelector((state: RootState) => state.data.data)

  useEffect(() => {
    dispatch(Actions.fetchData())
  }, [])

  return (
    <Container>
      <Cards data={data}/>
    </Container>
  )
}

export default Main

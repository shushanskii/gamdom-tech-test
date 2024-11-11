import { useSelector } from 'react-redux'

// Store
import { RootState } from 'store'

function useSelectCompetition() {
  const currentId = useSelector((state: RootState) => state.app.currentId)
  return useSelector((state: RootState) => {
    if(!currentId) {
      return null
    }

    return state.data.competitions[currentId]
  })
}

export default useSelectCompetition

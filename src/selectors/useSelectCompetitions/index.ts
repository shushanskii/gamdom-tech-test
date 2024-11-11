import { useSelector } from 'react-redux'

// Store
import { RootState } from 'store'

function useSelectCompetitions() {
  return useSelector((state: RootState) => state.data.competitions)
}

export default useSelectCompetitions

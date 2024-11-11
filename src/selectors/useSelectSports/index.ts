import { useSelector } from 'react-redux'

// Types
import { RootState } from 'store'

function useSelectSports() {
  const sports =  useSelector((state: RootState) => state.data.sports)

  return sports.map(sport => ({id: sport, label: sport}))
}

export default useSelectSports

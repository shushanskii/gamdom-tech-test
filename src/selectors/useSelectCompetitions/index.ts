import { useSelector } from 'react-redux'

// Store
import { RootState } from 'store'

// Types
import { Competition } from 'store/data'

function useSelectCompetitions() {
  return useSelector((state: RootState) => {
    const filter = state.app.filter

    const competitions = state.data.competitions
    if (!filter) {
      return competitions
    }

    return Object.entries(competitions)
      .filter(([, value]) => value.sport === filter)
      .reduce<Record<string, Competition>>((result, [name, competition]) => {
        result[name] = competition
        return result
      }, {})
  })
}

export default useSelectCompetitions

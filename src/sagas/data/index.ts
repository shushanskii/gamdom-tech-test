import { all, takeEvery, put } from 'redux-saga/effects'

// Store
import { fill, Competition } from 'store/data'

export enum ActionTypes {
  FETCH = 'FETCH',
}

export const Actions = {
  fetchData: () => ({ type: ActionTypes.FETCH }),
}

interface SportsData {
  id: string
  sport: string
  competitors: {
    name: string
    bets: number
  }[]
}

function* fetchData() {
  const response: Response = yield fetch('/data/sports_data.json')

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json: SportsData[] = yield response.json()

  const data: Record<string, Competition> = json.reduce<Record<string, Competition>>(
    (result, {id, ...rest}) => {
      result[id] = rest
      return result
    },
    {},
  )

  yield put(
    fill(data),
  )
}

function* data() {
  yield all([
    takeEvery(ActionTypes.FETCH, fetchData)
  ])
}

export default data

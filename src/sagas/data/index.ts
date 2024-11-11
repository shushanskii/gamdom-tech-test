import { takeEvery, put } from 'redux-saga/effects'

// Store
import { fill, Item } from 'store/data'

export enum ActionTypes {
  FETCH = 'FETCH',
}

export const Actions = {
  fetchData: () => ({ type: ActionTypes.FETCH }),
}

interface SportsData {
  id: string
  sport: string
  competitor1: string
  competitor2: string
  bets: number
}

function* fetchData() {
  const response: Response = yield fetch('/data/sports_data.json')

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json: SportsData[] = yield response.json()

  const data: Record<string, Item> = json.reduce<Record<string, Item>>(
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
  yield takeEvery(ActionTypes.FETCH, fetchData)
}

export default data

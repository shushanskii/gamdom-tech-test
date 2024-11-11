import { all, takeEvery, put, call } from 'redux-saga/effects'

// Store
import { populateCompetitions, Competition, populateSports } from 'store/data'

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

function* fetchCompetitions() {
  const response: Response = yield fetch('/data/sports_data.json')

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json: SportsData[] = yield response.json()

  const data: Record<string, Competition> = json.reduce<
    Record<string, Competition>
  >((result, { id, sport, competitors }) => {
    result[id] = {
      sport,
      competitors: competitors.reduce<Record<string, number>>(
        (result, { name, bets }) => {
          result[name] = bets
          return result
        },
        {},
      ),
    }
    return result
  }, {})

  yield put(populateCompetitions(data))
}

function* fetchSports() {
  const response: Response = yield fetch('/data/sports_list.json')

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const data: string[] = yield response.json()

  yield put(populateSports(data))
}

function* fetchData() {
  yield call(fetchCompetitions)
  yield call(fetchSports)
}

function* data() {
  yield all([takeEvery(ActionTypes.FETCH, fetchData)])
}

export default data

import { all } from 'redux-saga/effects'

// Sagas
import data from './data'

function* rootSaga() {
  yield all([data()])
}

export default rootSaga

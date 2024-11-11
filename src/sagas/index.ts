import { all } from 'redux-saga/effects'

// Sagas
import data from './data'
import app from './app'

function* rootSaga() {
  yield all([
    app(),
    data()
  ])
}

export default rootSaga

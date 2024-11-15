import { takeEvery, put, all } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

// Store
import { setModalIsOpen, setCurrentId, setFilter as _setFilter } from 'store/app'
import { increase } from 'store/data'

export enum ActionTypes {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  MAKE_BET = 'MAKE_BET',
  SET_FILTER = 'SET_FILTER',
}

export const Actions = {
  modalOpen: (id: string) => ({ type: ActionTypes.OPEN, payload: { id } }),
  modalClose: () => ({ type: ActionTypes.CLOSE }),
  makeBet: (id: string, name: string) => ({
    type: ActionTypes.MAKE_BET,
    payload: { id, name },
  }),
  setFilter: (sport: string | null) => ({
    type: ActionTypes.SET_FILTER,
    payload: { sport },
  }),
}

function* modalOpen({ payload: { id } }: PayloadAction<{ id: string }>) {
  yield put(setCurrentId(id))
  yield put(setModalIsOpen(true))
}

function* modalClose() {
  yield put(setModalIsOpen(false))
}

function* makeBet({
  payload: { id, name },
}: PayloadAction<{ id: string; name: string }>) {
  yield put(increase({ id, name }))
  yield put(setModalIsOpen(false))
}

function* setFilter({ payload: { sport } }: PayloadAction<{sport: string}>) {
  yield put(_setFilter(sport))
}

function* app() {
  yield all([
    takeEvery(ActionTypes.OPEN, modalOpen),
    takeEvery(ActionTypes.CLOSE, modalClose),
    takeEvery(ActionTypes.MAKE_BET, makeBet),
    takeEvery(ActionTypes.SET_FILTER, setFilter),
  ])
}

export default app

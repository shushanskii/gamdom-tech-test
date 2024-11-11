import { takeEvery, put, all } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

// Store
import { setModalIsOpen, setCurrentId } from 'store/app'
import { increase } from 'store/data'

export enum ActionTypes {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  MAKE_BET = 'MAKE_BET',
}

export const Actions = {
  modalOpen: (id: string) => ({ type: ActionTypes.OPEN, payload: { id } }),
  modalClose: () => ({ type: ActionTypes.CLOSE }),
  makeBet: (id: string, name: string) => ({
    type: ActionTypes.MAKE_BET,
    payload: { id, name },
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

function* app() {
  yield all([
    takeEvery(ActionTypes.OPEN, modalOpen),
    takeEvery(ActionTypes.CLOSE, modalClose),
    takeEvery(ActionTypes.MAKE_BET, makeBet),
  ])
}

export default app

import { takeEvery, put, all } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

// Store
import { setModalIsOpen, setCurrentId } from 'store/app'

export enum ActionTypes {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export const Actions = {
  modalOpen: (id: string) => ({ type: ActionTypes.OPEN, payload: { id } }),
  modalClose: () => ({ type: ActionTypes.CLOSE }),
}

function* modalOpen({ payload: { id } }: PayloadAction<{ id: string }>) {
  yield put(setCurrentId(id))
  yield put(setModalIsOpen(true))
}

function* modalClose() {
  yield put(setModalIsOpen(false))
}

function* app() {
  yield all([
    takeEvery(ActionTypes.OPEN, modalOpen),
    takeEvery(ActionTypes.CLOSE, modalClose),
  ])
}

export default app

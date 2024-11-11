import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {
  modalIsOpen: boolean
  currentId?: string
}

const initialState: State = {
  modalIsOpen: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModalIsOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.modalIsOpen = payload
    },
    setCurrentId: (state, { payload }: PayloadAction<string>) => {
      state.currentId = payload
    }
  },
})

export const { setModalIsOpen, setCurrentId } = appSlice.actions

export default appSlice.reducer

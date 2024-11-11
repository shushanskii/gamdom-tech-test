import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {
  modalIsOpen: boolean
  currentId?: string
  filter?: string | null
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
    },
    setFilter: (state, { payload }: PayloadAction<string>) => {
      state.filter = payload
    },
  },
})

export const { setModalIsOpen, setCurrentId, setFilter } = appSlice.actions

export default appSlice.reducer

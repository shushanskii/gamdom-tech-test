import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Item {
  sport: string
  competitor1: string
  competitor2: string
  bets: number
}

export interface State {
  data: Record<string, Item>
}

const initialState: State = {
  data: {}
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fill: (state, { payload }: PayloadAction<Record<string, Item>>) => {
      state.data = { ...payload }
    },
  },
})

export const { fill } = dataSlice.actions

export default dataSlice.reducer

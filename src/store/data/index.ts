import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Competition {
  sport: string
  competitors: {
    name: string
    bets: number
  }[]
}

export interface State {
  competitions: Record<string, Competition>
}

const initialState: State = {
  competitions: {},
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fill: (state, { payload }: PayloadAction<Record<string, Competition>>) => {
      state.competitions = { ...payload }
    },
  },
})

export const { fill } = dataSlice.actions

export default dataSlice.reducer

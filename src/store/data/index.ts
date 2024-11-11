import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Competition {
  sport: string
  competitors: Record<string, number>
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

    increase: (
      state,
      { payload: { id, name } }: PayloadAction<{ id: string; name: string }>,
    ) => {
      state.competitions[id] = {
        ...state.competitions[id],
        competitors: {
          ...state.competitions[id].competitors,
          [name]: state.competitions[id].competitors[name] + 1,
        },
      }
    },
  },
})

export const { fill, increase } = dataSlice.actions

export default dataSlice.reducer

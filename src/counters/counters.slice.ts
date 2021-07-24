import { stopCounters } from './stopCounters.thunks'
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { startCounters } from './startCounters.thunks'

export interface Counter {
  key: string
  counter: number
  group: string
}

interface CounterState {
  counters: Counter[]
  intervalId?: number
}

const initialState: CounterState = {
  counters: []
}

const counterSlice = createSlice({
  name: 'counters',
  initialState: initialState,
  reducers: {
    addCounter: (state) => {
      state.counters.push({
        key: nanoid(),
        counter: 0,
        group: Math.random() >= 0.5 ? 'a' : 'b'
      })
    },
    incrementCounters: (state, action: PayloadAction<string[]>) => {
      state.counters
        .filter(c => action.payload.some(k => k === c.key))
        .forEach(c => c.counter++)
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(startCounters.fulfilled, (state, action) => {
      state.intervalId = action.payload
      return state
    })

    builder.addCase(stopCounters.fulfilled, (state) => {
      state.intervalId = undefined
      return state
    })
  }
})

export const counterReducer = counterSlice.reducer

export const { incrementCounters, addCounter } = counterSlice.actions

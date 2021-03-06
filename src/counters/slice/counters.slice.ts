import { stopCounters } from './stopCounters.thunks'
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { startCounters } from './startCounters.thunks'

export interface Counter {
  key: string
  counter: number
  group: string
}

export interface CounterState {
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
    addCounter: (state, action: PayloadAction<number>) => {
      for (let i = 0; i < action.payload; i++) {
        state.counters.push({
          key: nanoid(),
          counter: 0,
          group: Math.random() >= 0.5 ? 'a' : 'b'
        })
      }
      return state
    },
    incrementCounters: (state, action: PayloadAction<string[]>) => {
      state.counters
        .filter(c => action.payload.includes(c.key))
        .forEach(c => c.counter++)
      return state
    },
    removeCounters: (state, action: PayloadAction<string[]>) => {
      state.counters = state.counters.filter(c => !action.payload.includes(c.key))
      return state
    },
    clearCounters: (state) => {
      state.counters = []
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

export const { incrementCounters, addCounter, removeCounters, clearCounters } = counterSlice.actions

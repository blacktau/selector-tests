import { counterReducer } from './../counters/counters.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counters: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface AppThunkConfig {
  state: RootState
  dispatch: AppDispatch
}

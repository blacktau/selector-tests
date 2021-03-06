import { AppThunkConfig } from '../../store/store'
import { incrementCounters } from './counters.slice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllCounters, getCurrentInterval } from './counters.selectors'

export const startCounters = createAsyncThunk<number, undefined, AppThunkConfig>(
  'counters/start',
  async (_, { dispatch, getState }) => {
    return window.setInterval(() => {
      const counterKeys = getAllCounters(getState()).filter(c => Math.random() < 0.01).map(c => c.key)
      dispatch(incrementCounters(counterKeys))
    }, 5)
  },
  {
    condition: (_, { getState }) => {
      return getCurrentInterval(getState()) == null
    }
  }
)

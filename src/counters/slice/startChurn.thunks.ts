import { AppThunkConfig } from '../../store/store'
import { addCounter, incrementCounters, removeCounters } from './counters.slice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllCounters, getCurrentInterval } from './counters.selectors'

export const churnCounters = createAsyncThunk<number, undefined, AppThunkConfig>(
  'counters/churn',
  async (_, { dispatch, getState }) => {
    return window.setInterval(() => {
      //      window.requestAnimationFrame(() => {
      const counters = getAllCounters(getState()) ?? []
      // increment some counters
      const incrKeys = counters.filter(c => Math.random() < 0.01).map(c => c.key)
      dispatch(incrementCounters(incrKeys))

      if (counters.length === 0 || Math.random() < 0.005) {
        // add some
        const addAmount = Math.floor(Math.random() * 10)
        dispatch(addCounter(addAmount))
      }

      // remove some
      if (Math.random() < 0.005) {
        const remKeys = counters.filter(c => !incrKeys.includes(c.key) && Math.random() < 0.1).map(c => c.key)
        dispatch(removeCounters(remKeys))
      }
      //      })
    }, 5)
  },
  {
    condition: (_, { getState }) => {
      return getCurrentInterval(getState()) == null
    }
  }
)

import { AppThunkConfig } from '../../store/store'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCurrentInterval } from './counters.selectors'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const stopCounters = createAsyncThunk<void, undefined, AppThunkConfig>(
  'counters/stop',
  async (_, { dispatch, getState }) => {
    const intervalId = getCurrentInterval(getState())

    window.clearInterval(intervalId)
  }
)

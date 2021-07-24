import { RootState } from './../store/store'

export const getAllCounters = (state: RootState) => (state.counters.counters)

export const getCurrentInterval = (state: RootState) => (state.counters.intervalId)

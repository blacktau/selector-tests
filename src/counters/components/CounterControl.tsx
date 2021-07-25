import { FC, useCallback } from 'react'
import { useAppDispatch } from '../../store/store.hooks'
import { addCounter } from '../slice/counters.slice'
import { startCounters } from '../slice/startCounters.thunks'
import { stopCounters } from '../slice/stopCounters.thunks'

export const CounterControl: FC = () => {
  const dispatch = useAppDispatch()

  const start = useCallback(async () => {
    await dispatch(startCounters())
  }, [dispatch])

  const add = useCallback(async (amount: number) => {
    await dispatch(addCounter(amount))
  }, [dispatch])

  const stop = useCallback(async () => {
    await dispatch(stopCounters())
  }, [dispatch])

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={() => void add(1)}>Add Counter</button>
      <button onClick={() => void add(10)}>Add 10 Counters</button>
      <button onClick={() => void add(100)}>Add 100 Counters</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

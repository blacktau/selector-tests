import { FC, useCallback } from 'react'
import { addCounter } from '../counters/counters.slice'
import { startCounters } from '../counters/startCounters.thunks'
import { stopCounters } from '../counters/stopCounters.thunks'
import { RootState } from '../store/store'
import { useAppDispatch, useAppSelector } from '../store/store.hooks'

export const ComputedSelectorTest: FC = () => {
  const countersA = useAppSelector(groupASelector)
  const countersB = useAppSelector(groupBSelector)
  const dispatch = useAppDispatch()

  const start = useCallback(async () => {
    await dispatch(startCounters())
  }, [dispatch])

  const add = useCallback(async () => {
    dispatch(addCounter())
  }, [dispatch])

  const stop = useCallback(async () => {
    await dispatch(stopCounters())
  }, [dispatch])

  return (
    <div>
      <div>Computed Selector Test</div>
      <div className='title'>Computed Selector Test</div>
      <div>
        <pre>{
          String.raw`const groupASelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'a')
}

const groupBSelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'b')
}
`}
        </pre>
      </div>
      <div><button onClick={start}>Start</button> <button onClick={add}>Add Counter</button> <button onClick={stop}>Stop</button></div>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Counter</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
      {
        countersA?.map(c => {
          return (
          <tr key={c.key}>
            <td>{c.key}</td>
            <td>{c.counter}</td>
            <td>{c.group}</td>
          </tr>
          )
        })
      }
      {
        countersB?.map(c => {
          return (
          <tr key={c.key}>
            <td>{c.key}</td>
            <td>{c.counter}</td>
            <td>{c.group}</td>
          </tr>
          )
        })
      }
        </tbody>
      </table>
    </div>
  )
}

const groupASelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'a')
}

const groupBSelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'b')
}

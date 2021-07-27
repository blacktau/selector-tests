import { createSelector } from '@reduxjs/toolkit'
import { FC } from 'react'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterTable } from '../counters/components/CounterTable'
import { TestHeader } from '../counters/components/TestHeader'
import { getAllCounters } from '../counters/slice/counters.selectors'
import { useAppSelector } from '../store/store.hooks'

export const SudoReselectTest: FC = () => {
  const groupASelector = makeGroupSelector('a')
  const groupBSelector = makeGroupSelector('b')
  const countersA = useAppSelector(groupASelector)
  const countersB = useAppSelector(groupBSelector)

  return (
    <div>
      <TestHeader title='Sudo state Reselect Test' selectorCode={String.raw`const makeGroupSelector = (group: string) => {
  return createSelector(
    state => (group),
    getAllCounters,
    (g, selectors) => (selectors.filter(c => c.group === g))
  )
}

const makeCounterSelector = (key: string) => {
  return createSelector(
    state => (key),
    getAllCounters,
    (k, selectors) => (selectors.find(c => c.key === k))
  )
}
`}/>
      <CounterControl />
      <div className='container'>
        <div className='column'>
          <CounterTable >
            { countersA?.map(c => (<Counter key={c.key} counterKey={c.key} />))}
          </CounterTable>
          </div>
            <div className='column'>
          <CounterTable>
            { countersB?.map(c => (<Counter key={c.key} counterKey={c.key} />)) }
          </CounterTable>
        </div>
      </div>
    </div>
  )
}

const Counter: FC<{ counterKey: string }> = ({ counterKey }) => {
  const counter = useAppSelector(makeCounterSelector(counterKey))

  return (
    <tr>
      <td>{counter?.key}</td>
      <td>{counter?.counter}</td>
      <td>{counter?.group}</td>
    </tr>
  )
}

const makeGroupSelector = (group: string) => {
  return createSelector(
    state => (group),
    getAllCounters,
    (g, selectors) => (selectors.filter(c => c.group === g))
  )
}

const makeCounterSelector = (key: string) => {
  return createSelector(
    state => (key),
    getAllCounters,
    (k, selectors) => (selectors.find(c => c.key === k))
  )
}

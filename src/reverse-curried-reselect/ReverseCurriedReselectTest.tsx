import { createSelector } from '@reduxjs/toolkit'
import memoize from 'lodash/memoize'
import { FC } from 'react'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterDisplay } from '../counters/components/CounterDisplay'
import { TestHeader } from '../counters/components/TestHeader'
import { getAllCounters } from '../counters/slice/counters.selectors'
import { useAppSelector } from '../store/store.hooks'

export const ReverseCurriedReselectTest: FC = () => {
  const countersA = useAppSelector(groupSelector)('a')
  const countersB = useAppSelector(groupSelector)('b')

  return (
    <div>
      <TestHeader title='Reversed Curried Selector Test' selectorCode={String.raw`const makeGroupSelector = (group: string) => {
  return createSelector(
    getAllCounters,
    (selectors) => (selectors.filter(c => c.group === group))
  )
}

const makeCounterSelector = (key: string) => {
  return createSelector(
    getAllCounters,
    (selectors) => (selectors.find(c => c.key === key))
  )
}`}/>
      <CounterControl />
      <CounterDisplay >
        { countersA?.map(c => (<Counter key={c.key} counterKey={c.key} />))}
      </CounterDisplay>
      <CounterDisplay>
        { countersB?.map(c => (<Counter key={c.key} counterKey={c.key} />)) }
      </CounterDisplay>
    </div>
  )
}

const Counter: FC<{ counterKey: string }> = ({ counterKey }) => {
  const counter = useAppSelector(counterSelector)(counterKey)

  return (
    <tr>
      <td>{counter?.key}</td>
      <td>{counter?.counter}</td>
      <td>{counter?.group}</td>
    </tr>
  )
}

const groupSelector = createSelector(
  getAllCounters,
  (selectors) => memoize((group: string) => (selectors.filter(c => c.group === group)))
)

const counterSelector = createSelector(
  getAllCounters,
  (selectors) => memoize((key: string) => (selectors.find(c => c.key === key)), (key: string) => (key))
)

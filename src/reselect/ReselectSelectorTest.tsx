import { FC } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { useAppSelector } from '../store/store.hooks'
import { getAllCounters } from '../counters/slice/counters.selectors'
import { TestHeader } from '../counters/components/TestHeader'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterDisplay } from '../counters/components/CounterDisplay'
import { DefaultCounter } from '../counters/components/DefaultCounter'

export const ReselectSelectorTest: FC = () => {
  const countersA = useAppSelector(groupASelector)
  const countersB = useAppSelector(groupBSelector)

  return (
    <div>
      <TestHeader title='Reselect Selector Test' selectorCode={String.raw`const groupASelector = createSelector(
  getAllCounters,
  (selectors) => (selectors.filter(c => c.group === 'a'))
)

const groupBSelector = createSelector(
  getAllCounters,
  (selectors) => (selectors.filter(c => c.group === 'b'))
)`}/>
      <CounterControl />
      <CounterDisplay>
        { countersA?.map(c => (<DefaultCounter key={c.key} counter={c} />)) }
      </CounterDisplay>
      <CounterDisplay>
        { countersB?.map(c => (<DefaultCounter key={c.key} counter={c} />)) }
      </CounterDisplay>
    </div>
  )
}

const groupASelector = createSelector(
  getAllCounters,
  (selectors) => (selectors.filter(c => c.group === 'a'))
)

const groupBSelector = createSelector(
  getAllCounters,
  (selectors) => (selectors.filter(c => c.group === 'b'))
)

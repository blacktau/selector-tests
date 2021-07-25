import { FC } from 'react'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterDisplay } from '../counters/components/CounterDisplay'
import { DefaultCounter } from '../counters/components/DefaultCounter'
import { TestHeader } from '../counters/components/TestHeader'
import { RootState } from '../store/store'
import { useAppSelector } from '../store/store.hooks'

export const SimpleSelectorTest: FC = () => {
  const counters = useAppSelector(simpleSelector)
  return (
    <div>
      <TestHeader title='Simple Selector Test' selectorCode={String.raw`const simpleSelector = (state: RootState) => {
  return state.counters.counters
}`}/>
      <CounterControl />
      <CounterDisplay>
        { counters?.map(c => (<DefaultCounter key={c.key} counter={c} />)) }
      </CounterDisplay>
    </div>
  )
}

const simpleSelector = (state: RootState) => {
  return state.counters.counters
}

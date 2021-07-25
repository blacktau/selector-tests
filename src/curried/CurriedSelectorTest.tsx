import { FC } from 'react'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterDisplay } from '../counters/components/CounterDisplay'
import { SelectorCounter } from '../counters/components/SelectorCounter'
import { TestHeader } from '../counters/components/TestHeader'
import { RootState } from '../store/store'
import { useAppSelector } from '../store/store.hooks'

export const CurriedSelectorTest: FC = () => {
  const groupASelector = makeGroupSelector('a')
  const groupBSelector = makeGroupSelector('b')
  const countersA = useAppSelector(groupASelector)
  const countersB = useAppSelector(groupBSelector)

  return (
    <div>
      <TestHeader title='Curried Selector Test' selectorCode={String.raw`const makeGroupSelector = (group: string) => (state: RootState) => {
  return state.counters.counters.filter(c => c.group === group)
}`}/>
      <CounterControl />
      <CounterDisplay>
        { countersA?.map(c => (<SelectorCounter key={c.key} counterKey={c.key} selector={makeCounterSelector} />)) }
      </CounterDisplay>
      <CounterDisplay>
        { countersB?.map(c => (<SelectorCounter key={c.key} counterKey={c.key} selector={makeCounterSelector} />)) }
      </CounterDisplay>
    </div>
  )
}

const makeGroupSelector = (group: string) => (state: RootState) => {
  return state.counters.counters.filter(c => c.group === group)
}

const makeCounterSelector = (key: string) => (state: RootState) => {
  return state.counters.counters.find(c => c.key === key)
}

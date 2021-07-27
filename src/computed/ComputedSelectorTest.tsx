import { FC } from 'react'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterTable } from '../counters/components/CounterTable'
import { DefaultCounter } from '../counters/components/DefaultCounter'
import { TestHeader } from '../counters/components/TestHeader'
import { RootState } from '../store/store'
import { useAppSelector } from '../store/store.hooks'

export const ComputedSelectorTest: FC = () => {
  const countersA = useAppSelector(groupASelector)
  const countersB = useAppSelector(groupBSelector)

  return (
    <div>
      <TestHeader title='Computed Selector Test' selectorCode={String.raw`const groupASelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'a')
}

const groupBSelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'b')
}`}/>
      <CounterControl />
      <div className='container'>
        <div className='column'>
          <CounterTable>
            { countersA?.map(c => (<DefaultCounter key={c.key} counter={c} />)) }
          </CounterTable>
        </div>
        <div className='column'>
          <CounterTable>
            { countersB?.map(c => (<DefaultCounter key={c.key} counter={c} />)) }
          </CounterTable>
        </div>
      </div>
    </div>
  )
}

const groupASelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'a')
}

const groupBSelector = (state: RootState) => {
  return state.counters.counters.filter(c => c.group === 'b')
}

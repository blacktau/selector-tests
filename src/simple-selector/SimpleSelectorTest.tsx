import { FC } from 'react'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterTable } from '../counters/components/CounterTable'
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
      <div className='container'>
        <div className='column'>
          <CounterTable>
            { counters?.filter(c => c.group === 'a').map(c => (<DefaultCounter key={c.key} counter={c} />)) }
          </CounterTable>
        </div>
        <div className='column'>
          <CounterTable>
            { counters?.filter(c => c.group === 'b').map(c => (<DefaultCounter key={c.key} counter={c} />)) }
          </CounterTable>
        </div>
      </div>
    </div>
  )
}

const simpleSelector = (state: RootState) => {
  return state.counters.counters
}

import { FC } from 'react'
import { useAppSelector } from '../store/store.hooks'
import { getAllCounters } from '../counters/slice/counters.selectors'
import { TestHeader } from '../counters/components/TestHeader'
import { CounterControl } from '../counters/components/CounterControl'
import { CounterTable } from '../counters/components/CounterTable'
import memoize from 'lodash/memoize'
import { createSelectorCreator } from 'reselect'

export const CustomReselectTest: FC = () => {
  const groupASelector = makeGroupSelector('a')
  const groupBSelector = makeGroupSelector('b')
  const countersA = useAppSelector(groupASelector)
  const countersB = useAppSelector(groupBSelector)

  return (
    <div>
      <TestHeader title='Custom Reselect Test' selectorCode={String.raw`
const customSelectorCreator = createSelectorCreator(memoize as any, hashFn)

const makeGroupSelector = (group: string) => {
  return customSelectorCreator(
    getAllCounters,
    (selectors) => (selectors.filter(c => c.group === group))
  )
}

const makeCounterSelector = (key: string) => {
  return customSelectorCreator(
    getAllCounters,
    (selectors) => (selectors.find(c => c.key === key))
  )
}
`}/>
      <CounterControl />
      <div className='container'>
        <div className='column'>
          <CounterTable>
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

const hashFn = (...args: unknown[]) => args.reduce(
  (acc, val) => `${acc as string}-${JSON.stringify(val)}`,
  ''
)

const customSelectorCreator = createSelectorCreator(memoize as any, hashFn)

const makeGroupSelector = (group: string) => {
  return customSelectorCreator(
    getAllCounters,
    (selectors) => (selectors.filter(c => c.group === group))
  )
}

const makeCounterSelector = (key: string) => {
  return customSelectorCreator(
    getAllCounters,
    (selectors) => (selectors.find(c => c.key === key))
  )
}

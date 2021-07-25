import { FC } from 'react'
import { useAppSelector } from '../../store/store.hooks'
import { Counter, CounterState } from '../slice/counters.slice'

type SimpleSelector = (key: string) => (state: { counters: CounterState }) => Counter | undefined

export interface SelectorCounterProps {
  counterKey: string
  selector: SimpleSelector
}

export const SelectorCounter: FC<SelectorCounterProps> = ({ counterKey, selector }) => {
  const counter = useAppSelector(selector(counterKey))

  return (
    <tr>
      <td>{counter?.key}</td>
      <td>{counter?.counter}</td>
      <td>{counter?.group}</td>
    </tr>
  )
}

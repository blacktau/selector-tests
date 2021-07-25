import { FC } from 'react'
import { Counter } from '../slice/counters.slice'

export interface DefaultCounterProps {
  counter: Counter
}

export const DefaultCounter: FC<DefaultCounterProps> = ({ counter }) => {
  return (
    <tr>
      <td>{counter.key}</td>
      <td>{counter.counter}</td>
      <td>{counter.group}</td>
    </tr>
  )
}

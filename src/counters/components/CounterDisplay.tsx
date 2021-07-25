import { FC } from 'react'
import { Counter } from '../slice/counters.slice'

export interface CounterDisplayProps {
  counters?: Counter[]
}

export const CounterDisplay: FC = ({ children }) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Counter</th>
        <th>Group</th>
      </tr>
    </thead>
    <tbody>
      { children}
    </tbody>
  </table>
  )
}

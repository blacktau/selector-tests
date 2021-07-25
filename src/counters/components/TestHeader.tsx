import { FC } from 'react'

export interface TestHeaderProps {
  title: string
  selectorCode: string
}

export const TestHeader: FC<TestHeaderProps> = ({ title, selectorCode }) => {
  return (
    <>
      <div className='title'>{title}</div>
      <div>
        <pre>{selectorCode}</pre>
      </div>
    </>
  )
}

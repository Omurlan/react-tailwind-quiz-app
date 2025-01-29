import { FC, ReactNode } from 'react'

interface PageCenterProps {
  justifyCenter?: boolean
  children: ReactNode
}

const PageCenter: FC<PageCenterProps> = ({ justifyCenter, children }) => {
  return (
    <div
      className={`theme-gradient flex min-h-screen flex-col items-center p-5 pt-12 ${justifyCenter ? 'justify-center' : ''}`}
    >
      {children}
    </div>
  )
}

export default PageCenter

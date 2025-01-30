import { FC, ReactNode } from 'react'

interface PageCenterProps {
  light?: boolean
  justifyCenter?: boolean
  children: ReactNode
}

const PageCenter: FC<PageCenterProps> = ({ light, justifyCenter, children }) => {
  return (
    <div
      className={`${light ? 'bg-secondary-bg' : 'theme-gradient'} flex min-h-screen flex-col items-center p-5 pt-12 ${justifyCenter ? 'justify-center' : ''}`}
    >
      {children}
    </div>
  )
}

export default PageCenter

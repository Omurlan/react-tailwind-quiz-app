import { FC, ReactNode } from 'react'

interface PageCenterProps {
  light?: boolean
  theme?: boolean
  justifyCenter?: boolean
  children: ReactNode
}

const PageCenter: FC<PageCenterProps> = ({ light, theme, justifyCenter, children }) => {
  return (
    <div
      className={`${light ? 'bg-secondary-bg' : theme ? 'theme-gradient' : 'theme-gradient lg:from-secondary-bg lg:to-secondary-bg lg:bg-linear-to-r'} flex min-h-screen flex-col items-center p-5 pt-12 ${justifyCenter ? 'justify-center' : ''}`}
    >
      {children}
    </div>
  )
}

export default PageCenter

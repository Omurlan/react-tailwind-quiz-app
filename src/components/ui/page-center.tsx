import { FC, ReactNode } from 'react'

interface PageCenterProps {
  justifyCenter?: boolean
  children: ReactNode
}

const PageCenter: FC<PageCenterProps> = ({ justifyCenter, children }) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center bg-[#E5E5E5] p-5 pt-12 dark:bg-gradient-to-r dark:from-[#800080] dark:to-[#FFC0CB] ${justifyCenter ? 'justify-center' : ''}`}
    >
      {children}
    </div>
  )
}

export default PageCenter

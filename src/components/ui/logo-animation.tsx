import { FC, ReactNode } from 'react'

interface LogoAnimationProps {
  logoSize: number
  children: ReactNode
}

const LogoAnimation: FC<LogoAnimationProps> = ({ logoSize, children }) => {
  return (
    <div
      className="flex items-center gap-[10px]"
      style={{ width: 'fit-content', scale: logoSize, transition: 'scale 1s' }}
    >
      {children}
    </div>
  )
}

export default LogoAnimation

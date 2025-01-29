import { FC, ReactNode } from 'react'

interface LogoAnimationProps {
  logoSize: number
  children: ReactNode
}

const LogoAnimation: FC<LogoAnimationProps> = ({ logoSize, children }) => {
  return (
    <div style={{ width: 80, scale: logoSize, transition: 'scale 1s' }}>{children}</div>
  )
}

export default LogoAnimation

import { FC, ReactNode } from 'react'

interface LogoContainerProps {
  children: ReactNode
}

const LogoContainer: FC<LogoContainerProps> = ({ children }) => {
  return <div className="mb-7 text-center md:mb-12 [&>svg]:w-[220px]">{children}</div>
}

export default LogoContainer

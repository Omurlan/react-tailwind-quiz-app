import { FC, ReactNode } from 'react'

interface LogoContainerProps {
  children: ReactNode
}

const LogoContainer: FC<LogoContainerProps> = ({ children }) => {
  return (
    <div className="mb-7 text-center md:mb-12 [&>svg]:w-[220px] [&>svg>path]:fill-black dark:[&>svg>path]:fill-white [&>svg>rect]:stroke-black dark:[&>svg>rect]:stroke-white">
      {children}
    </div>
  )
}

export default LogoContainer

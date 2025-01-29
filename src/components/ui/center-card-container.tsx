import { FC, ReactNode } from 'react'

interface CenterCardContainerProps {
  children: ReactNode
}

const CenterCardContainer: FC<CenterCardContainerProps> = ({ children }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark flex min-h-[620px] min-w-full flex-col items-center justify-center rounded px-[10px] pt-[50px] pb-[60px] md:min-w-[773px]">
      {children}
    </div>
  )
}

export default CenterCardContainer

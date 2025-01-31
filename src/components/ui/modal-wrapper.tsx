import { FC, ReactNode } from 'react'
import { RightArrowIcon } from '../../utils/icons'
import Button from './button'

interface ModalWrapperProps {
  title: string
  subtitle: string
  icon: ReactNode
  buttonTitle: string
  onClick: () => void
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  subtitle,
  icon,
  buttonTitle,
  onClick,
}) => {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
      <div className="bg-card flex w-[600px] flex-col items-center rounded-[10px] px-6 py-12">
        {icon}
        <h6 className="mt-6 mb-5 text-[clamp(24px,4vw,32px)] font-bold">{title}</h6>
        <p className="text-primary mb-[clamp(18px,calc(18px+28*((100vw-600px)/1320)),48px)] text-center text-2xl text-[clamp(18px,4vw,24px)] leading-[1.3] font-medium">
          {subtitle}
        </p>
        <Button
          text={buttonTitle}
          icon={<RightArrowIcon />}
          iconPosition="right"
          onClick={onClick}
          bold
          big
        />
      </div>
    </div>
  )
}

export default ModalWrapper

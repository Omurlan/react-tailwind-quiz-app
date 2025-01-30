import { FC, ReactNode } from 'react'

interface ButtonTypes {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean
  bold?: boolean
  big?: boolean
  disabled?: boolean
}

const Button: FC<ButtonTypes> = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  bold,
  big,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${big ? 'w-[180px]' : 'w-[150px]'} ${bold ? 'font-semibold' : 'font-normal'} ${outline ? 'bg-card border-theme border' : 'theme-gradient border-none'} active:shadow-active disabled:bg-disabled-button disabled:text-dark-grey flex h-10 cursor-pointer items-center justify-between rounded px-4 text-lg text-black [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] active:scale-[0.98] active:transition-all active:duration-[0.2s] disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none md:min-h-[50px] md:w-[195px] md:[-webkit-tap-highlight-color:unset] md:[tap-highlight-color:unset]`}
    >
      {icon && iconPosition === 'left' && <IconLeft icon={icon} />}
      {text}
      {icon && iconPosition === 'right' && <IconRight icon={icon} />}
    </button>
  )
}

export default Button

const IconLeft = ({ icon }: { icon: ReactNode }) => (
  <span className="mr-[10px] flex">{icon}</span>
)

const IconRight = ({ icon }: { icon: ReactNode }) => (
  <span className="ml-5 flex">{icon}</span>
)

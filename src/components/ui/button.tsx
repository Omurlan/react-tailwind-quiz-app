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
      className={`${big ? 'w-[180px]' : 'w-[150px]'} ${bold ? 'font-bold' : 'font-normal'} ${outline ? 'bg-card-light dark:bg-card-dark border-theme-light dark:border-theme-dark border text-[#800080] dark:text-white' : 'button-background border-none text-white dark:text-black'} active:shadow-active disabled:bg-disabled-button-light dark:disabled:bg-disabled-button-dark disabled:text-dark-grey flex h-10 cursor-pointer items-center justify-center rounded-lg text-[clamp(16px,5vw,24px)] [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] active:scale-[0.98] active:transition-all active:duration-[0.2s] disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none md:min-h-[50px] md:w-[195px] md:[-webkit-tap-highlight-color:unset] md:[tap-highlight-color:unset]`}
    >
      {icon && iconPosition === 'left' && <IconLeft icon={icon} />}
      {text}
      {icon && iconPosition === 'right' && <IconRight icon={icon} />}
    </button>
  )
}

export default Button

const IconLeft = ({ icon }: { icon: ReactNode }) => (
  <span className="mr-[10px] flex [&>svg>path]:fill-white dark:[&>svg>path]:fill-black">
    {icon}
  </span>
)

const IconRight = ({ icon }: { icon: ReactNode }) => (
  <span className="ml-5 flex [&>svg>path]:fill-white dark:[&>svg>path]:fill-black">
    {icon}
  </span>
)

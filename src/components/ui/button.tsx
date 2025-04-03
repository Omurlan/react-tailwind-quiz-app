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
      className={`${big ? 'max-w-[180px]' : 'max-w-[150px]'} ${bold ? 'font-semibold' : 'font-normal'} ${outline ? 'bg-card border-theme border' : 'not-disabled:theme-gradient border-none'} active:shadow-active disabled:bg-disabled-button disabled:[&>svg>path]:fill-dark-grey disabled:text-dark-grey hover:bg-theme flex h-10 cursor-pointer items-center gap-[10px] rounded px-4 text-lg text-black transition-colors duration-300 [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] active:transition-all active:duration-[0.2s] not-disabled:active:scale-[0.98] disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none md:min-h-[50px] md:w-[195px] md:[-webkit-tap-highlight-color:unset] md:[tap-highlight-color:unset] ${iconPosition === 'left' ? 'justify-center' : 'justify-between'}`}
    >
      {icon && iconPosition === 'left' && icon}
      {text}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button

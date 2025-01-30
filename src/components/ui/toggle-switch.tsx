import { ChangeEvent, FC, ReactNode } from 'react'

interface PropsType {
  switchState: boolean
  handleSwitchState: (e: ChangeEvent<HTMLInputElement>) => void
  icon?: ReactNode
  name?: string
  className?: string
}

const ToggleSwitch: FC<PropsType> = ({
  switchState,
  handleSwitchState,
  icon,
  name,
  className,
}) => {
  return (
    <label
      className={`has-checked:bg-dark relative inline-block h-[30px] w-[58px] cursor-pointer rounded-3xl border border-[#E5E5E5] bg-white transition-all duration-700 ease-out dark:border-transparent ${className}`}
    >
      <input
        type="checkbox"
        className="peer h-0 w-0 opacity-0"
        checked={switchState}
        onChange={handleSwitchState}
        name={name}
      />
      <span
        className={`absolute top-[1px] left-[2px] min-h-6 min-w-6 rounded-full p-[2px] transition-all duration-700 ease-out ${icon ? 'bg-dark' : 'bg-[#C8C8C8]'} peer-checked:translate-x-[26px] peer-checked:bg-white`}
      >
        {icon && icon}
      </span>
    </label>
  )
}

export default ToggleSwitch

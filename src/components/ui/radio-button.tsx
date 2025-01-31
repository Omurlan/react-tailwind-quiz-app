import { ChangeEvent, FC } from 'react'

interface RadioButtonProps {
  name: string
  id?: string
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled?: boolean
  red?: boolean
}

const RadioButton: FC<RadioButtonProps> = ({
  name,
  id,
  value,
  onChange,
  checked,
  disabled,
  red,
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        className="peer sr-only m-0"
        disabled={disabled}
      />
      <span
        className={`${red ? 'peer-checked:border-danger' : 'peer-checked:border-theme'} relative top-1 mr-1 inline-block size-5 rounded-full border border-[#CFD1D5] bg-white`}
      >
        <span
          className={`absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${!checked ? 'opacity-0' : red ? 'bg-danger opacity-100' : 'bg-theme opacity-100'}`}
        />
      </span>
    </>
  )
}

export default RadioButton

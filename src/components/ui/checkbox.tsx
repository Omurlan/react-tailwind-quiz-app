import React from 'react'

interface PropsType {
  name: string
  id?: string
  checked: boolean
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

const Checkbox: React.FC<PropsType> = ({
  name,
  id,
  checked,
  handleChange,
  disabled = false,
}) => {
  return (
    <div className="relative flex items-center gap-2">
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        className="size-5 transform cursor-pointer appearance-none rounded border border-[#CFD1D5] bg-white transition duration-[120ms] ease-in-out checked:border-none checked:border-[#E7851A] checked:bg-[#E7851A] disabled:cursor-not-allowed disabled:opacity-50"
        aria-checked={checked}
      />
      {checked && (
        <span className="pointer-events-none absolute top-[-1.5px] left-[5px] scale-x-[-1] rotate-[35deg] transform text-lg font-bold text-white">
          L
        </span>
      )}
    </div>
  )
}

export default Checkbox

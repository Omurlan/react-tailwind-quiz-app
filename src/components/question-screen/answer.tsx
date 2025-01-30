import { FC } from 'react'

interface AnswerProps {
  index: number
  choice: string
  type: string
  selectedAnswer: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Answer: FC<AnswerProps> = ({ onChange, index, choice, type, selectedAnswer }) => {
  // Convert index to alphabet character to show ABCD before question
  const label = String.fromCharCode(65 + index)

  return (
    <div
      className={`text-secondary border-[] mt-[clamp(13px,calc(10px+6*((100vw-600px)/1320)),16px)] cursor-pointer rounded-2xl border text-[clamp(18px,4vw,16px)] font-medium md:font-normal ${selectedAnswer.includes(choice) ? 'bg-selected-answer border-theme transition-all duration-[200] ease-in' : 'border-border bg-white'}`}
    >
      <label className="flex cursor-pointer p-[14px] md:p-[18px]">
        <span>{label}.</span>
        <input
          name={choice}
          className="invisible m-0"
          // radio is for checked one option and checkbox is for checked multiple options
          type={type === 'MAQs' ? 'checkbox' : 'radio'}
          checked={selectedAnswer.includes(choice)}
          onChange={onChange}
        />
        {choice}
      </label>
    </div>
  )
}

export default Answer

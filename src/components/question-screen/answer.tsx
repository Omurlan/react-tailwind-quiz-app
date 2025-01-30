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
  const label = String.fromCharCode(97 + index)

  return (
    <div
      className={`text-secondary mt-[clamp(13px,calc(10px+6*((100vw-600px)/1320)),16px)] cursor-pointer border-b text-[clamp(18px,4vw,16px)] ${selectedAnswer.includes(choice) ? 'border-theme rounded bg-white transition-all duration-[200] ease-in' : 'border-border'}`}
    >
      <label className="flex cursor-pointer p-4 text-lg font-semibold">
        <span>{label}&#41;</span>
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

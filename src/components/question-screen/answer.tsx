import { FC } from 'react'
import Checkbox from '../ui/checkbox'
import RadioButton from '../ui/radio-button'

interface AnswerProps {
  index: number
  choice: string
  type: string
  selectedAnswer: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Answer: FC<AnswerProps> = ({ onChange, index, choice, type, selectedAnswer }) => {
  // Convert index to alphabet character to show 'abcd' before question
  const label = String.fromCharCode(97 + index)

  return (
    <div
      className={`text-secondary mt-[clamp(13px,calc(10px+6*((100vw-600px)/1320)),16px)] cursor-pointer border-b text-[clamp(18px,4vw,16px)] ${selectedAnswer.includes(choice) ? 'border-theme rounded bg-white font-semibold transition-all duration-[200] ease-in' : 'border-border'}`}
    >
      <label className="grid cursor-pointer grid-cols-[min-content_min-content_1fr] gap-2 p-4 text-lg">
        {type === 'MAQs' ? (
          <Checkbox
            name={choice}
            checked={selectedAnswer.includes(choice)}
            handleChange={onChange}
          />
        ) : (
          <RadioButton
            name={choice}
            value={choice}
            checked={selectedAnswer.includes(choice)}
            onChange={onChange}
          />
        )}
        <span>{label}&#41;</span>
        {choice}
      </label>
    </div>
  )
}

export default Answer

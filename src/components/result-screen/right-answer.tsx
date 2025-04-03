import { FC } from 'react'

interface RightAnswerProps {
  correctAnswers: string[]
  choices: string[]
}

const RightAnswer: FC<RightAnswerProps> = ({ correctAnswers, choices }) => {
  return (
    <p className="text-darker-grey mt-4 text-lg leading-[1.2]">
      {`Правильный ${correctAnswers.length < 2 ? 'ответ' : 'Answers'}: `}
      {correctAnswers.map((item: string, index: number) => {
        const label = String.fromCharCode(65 + choices.indexOf(item))

        return (
          <span className="text-black" key={index}>
            {`${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}`}
          </span>
        )
      })}
    </p>
  )
}

export default RightAnswer

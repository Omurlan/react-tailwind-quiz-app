import { ChangeEvent, FC } from 'react'
import CodeSnippet from '../ui/code-snippet'
import QuizImage from '../ui/quiz-image'
import Answer from './answer'

interface QuestionTypes {
  question: string
  code?: string
  image?: string
  type: string
  choices: string[]
  selectedAnswer: string[]
  handleAnswerSelection: (e: ChangeEvent<HTMLInputElement>, index: number) => void
}

const Question: FC<QuestionTypes> = ({
  question,
  code,
  image,
  type,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  return (
    <div className="mx-auto mt-8 mb-10 max-w-full md:max-w-[88%]">
      <h2 className="text-primary mb-6 text-center text-[clamp(18px,4vw,28px)] leading-[1.3] font-medium">
        {question}
      </h2>
      {/* if question contains code snippet then show code */}
      {code && <CodeSnippet code={code} language="javascript" />}
      {/* if question contains an image */}
      {image && <QuizImage image={image} />}
      <div className="max-h-full">
        {choices.map((choice, index) => (
          <Answer
            key={index}
            choice={choice}
            index={index}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleAnswerSelection(e, index)
            }
            type={type}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </div>
    </div>
  )
}

export default Question

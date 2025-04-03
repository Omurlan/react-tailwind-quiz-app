import { FC } from 'react'
import { Question } from '../../data/QuizQuestions'
import { addLeadingZero } from '../../utils/helpers'
import { CircularProgress } from '../ui/circular-progress'
import Button from '../ui/button.tsx'
import { ScreenTypes } from '../../types'
import { useQuiz } from '../../contexts/quiz-context.ts'

interface SidebarProps {
  questions: Question[]
  activeQuestion: number
  quizDetails: {
    totalQuestions: number
    totalTime: number
  }
  timer: number
}

const Sidebar: FC<SidebarProps> = ({
  questions,
  activeQuestion,
  quizDetails: { totalQuestions, totalTime },
  timer,
}) => {
  const { setCurrentScreen } = useQuiz()

  return (
    <div className="sticky top-0 hidden h-dvh flex-col gap-12 overflow-hidden bg-white p-6 backdrop-blur-sm [mask:linear-gradient(black,black,black,transparent)] lg:flex">
      <CircularProgress
        progress={100 - (timer / totalTime) * 100}
        timer={timer}
        content={`${addLeadingZero(activeQuestion + 1)}/${addLeadingZero(totalQuestions)}`}
      />

      <Button
        outline
        text="Выйти"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        }
        iconPosition="left"
        onClick={() => {
          setCurrentScreen(ScreenTypes.QuizDetailsScreen)
        }}
      />

      <ol start={activeQuestion + 1} className="space-y-2 px-4">
        {questions
          .filter((_, index) => index >= activeQuestion)
          .map(({ question }, index) => (
            <li
              key={index}
              className={`${index === 0 ? 'text-theme' : ''} list-decimal pl-1 text-base`}
            >
              {question}
            </li>
          ))}
      </ol>
    </div>
  )
}

export default Sidebar

import { FC } from 'react'
import { Question } from '../../data/QuizQuestions'
import { addLeadingZero } from '../../utils/helpers'
import { AppLogoBlack } from '../../utils/icons'
import { CircularProgress } from '../ui/circular-progress'

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
  return (
    <div className="sticky top-0 hidden h-dvh flex-col gap-12 overflow-hidden bg-white p-6 backdrop-blur-sm [mask:linear-gradient(black,black,black,transparent)] lg:flex">
      <div className="mt-4 flex items-center justify-center gap-1.5">
        <AppLogoBlack width={55} height={50} />
        <h1 className="text-center text-2xl font-bold">XEVEN QUIZ</h1>
      </div>

      <CircularProgress
        progress={(timer / totalTime) * 100}
        timer={timer}
        content={`${addLeadingZero(activeQuestion + 1)}/${addLeadingZero(totalQuestions)}`}
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

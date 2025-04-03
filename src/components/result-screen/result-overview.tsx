import { FC } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import { Result } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import HighlightedText from '../ui/highlighted-text'

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, questions, endTime } = useQuiz()

  const totalQuestionAttempted = result.length

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  // Passed if 60 or more than 60% marks
  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'удача!' : 'неудача'

  return (
    <div className="md:16 mb-8 space-y-3 text-center text-lg font-medium">
      <p>
        Отвеченных вопросов:{' '}
        <HighlightedText>{totalQuestionAttempted.toString()}</HighlightedText> /{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Набрано баллов: <HighlightedText>{obtainedScore.toString()}</HighlightedText> /{' '}
        {questions.reduce((acc, q) => (acc += q.score), 0)}
      </p>
      <p>
        Потрачено времени: <HighlightedText>{convertSeconds(endTime)}</HighlightedText>
      </p>
      <p>
        Статус: <HighlightedText>{calculateStatus}</HighlightedText>
      </p>
    </div>
  )
}

export default ResultOverview

import { FC } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import { Result } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import HighlightedText from '../ui/highlighted-text'

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz()

  const totalQuestionAttempted = result.length

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  // Passed if 60 or more than 60% marks
  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed'

  return (
    <div className="md:16 mb-8 space-y-3 text-center text-lg font-medium">
      <p>
        You attempted questions:{' '}
        <HighlightedText>{totalQuestionAttempted.toString()}</HighlightedText> /{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Score secured: <HighlightedText>{obtainedScore.toString()}</HighlightedText> /{' '}
        {quizDetails.totalScore}
      </p>
      <p>
        Time Spent: <HighlightedText>{convertSeconds(endTime)}</HighlightedText>
      </p>
      <p>
        Status: <HighlightedText>{calculateStatus}</HighlightedText>
      </p>
    </div>
  )
}

export default ResultOverview

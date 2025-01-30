import { ReactNode } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import { AppLogo, StartIcon } from '../../utils/icons'
import Button from '../ui/button'
import CenterCardContainer from '../ui/center-card-container'
import HighlightedText from '../ui/highlighted-text'
import LogoContainer from '../ui/logo-container'
import PageCenter from '../ui/page-center'

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <h2 className="text-theme text-[32px] font-bold">XEVEN QUIZ</h2>
        <div className="mt-4 mb-10 max-w-[500px] text-center text-xl font-medium">
          <div className="mt-4 text-xl leading-[1.3] font-medium"></div>

          <DetailText>
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
        </div>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen

const DetailText = ({ children }: { children: ReactNode }) => (
  <div className="mt-4 text-xl leading-[1.3] font-medium">{children}</div>
)

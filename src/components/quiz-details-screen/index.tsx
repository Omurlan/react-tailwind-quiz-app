import { ReactNode } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import { StartIcon } from '../../utils/icons'
import Button from '../ui/button'
import CenterCardContainer from '../ui/center-card-container'
import HighlightedText from '../ui/highlighted-text'
import PageCenter from '../ui/page-center'

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails, questions } = useQuiz()

  const { selectedQuizTopic, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  const goToAboutScreen = () => {
    setCurrentScreen(ScreenTypes.AboutScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        {/*<LogoContainer>*/}
        {/*  <AppLogo width={220} />*/}
        {/*</LogoContainer>*/}
        <h2 className="text-theme text-[32px] font-bold">ТЕСТИРОВАНИЕ</h2>
        <div className="mt-4 mb-10 max-w-[500px] text-xl font-medium">
          <div className="mt-4 text-xl leading-[1.3] font-medium"></div>

          <DetailText>
            Тема: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Количество вопросов: <HighlightedText>{questions.length}</HighlightedText>
          </DetailText>
          <DetailText>
            Время на тест: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
        </div>

        <div className="flex gap-4">
          <Button
            outline
            text="О нас"
            iconPosition="left"
            onClick={goToAboutScreen}
            bold
          />
          <Button
            text="Начать"
            icon={<StartIcon />}
            iconPosition="left"
            onClick={goToQuestionScreen}
            bold
          />
        </div>
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen

const DetailText = ({ children }: { children: ReactNode }) => (
  <div className="mt-4 text-xl leading-[1.3] font-medium">{children}</div>
)

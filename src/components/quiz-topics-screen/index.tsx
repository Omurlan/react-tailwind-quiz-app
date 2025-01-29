import { useQuiz } from '../../contexts/quiz-context'
import { quizTopics } from '../../data/quizTopics'
import { ScreenTypes } from '../../types'
import { AppLogo } from '../../utils/icons'
import Button from '../ui/button'
import CenterCardContainer from '../ui/center-card-container'
import HighlightedText from '../ui/highlighted-text'
import LogoContainer from '../ui/logo-container'
import PageCenter from '../ui/page-center'

const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  return (
    <PageCenter justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <h2 className="mb-5 text-center text-3xl font-bold">
          WELCOME TO <HighlightedText> XEVEN QUIZ</HighlightedText>
        </h2>
        <p className="text-center text-xl leading-7 font-medium">
          Select topic below to start your Quiz.
        </p>

        <div className="mt-10 mb-11 flex max-w-full flex-wrap justify-center gap-5 md:max-w-[60%] md:gap-8">
          {quizTopics.map(({ title, icon, disabled }) => (
            <button
              key={title}
              onClick={() => !disabled && selectQuizTopic(title)}
              disabled={disabled}
              className={`flex cursor-pointer items-center rounded-[10px] bg-white p-[10px] transition-colors duration-[400ms] ease-out [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] disabled:cursor-not-allowed disabled:bg-[#fbf4ecbc] md:px-[10px] md:py-[14px] md:[-webkit-tap-highlight-color:unset] md:[tap-highlight-color:unset] dark:bg-[#21191C] dark:disabled:bg-[#00000080] ${quizTopic === title ? 'border-theme-light dark:border-theme-dark border-2' : 'border-disabled-button-light dark:border-disabled-button-dark border'}`}
            >
              {icon}
              <span className="ml-[10px] text-base font-normal md:text-lg md:font-semibold">
                {title}
              </span>
            </button>
          ))}
        </div>
        <Button text="Continue" onClick={goToQuizDetailsScreen} bold />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen

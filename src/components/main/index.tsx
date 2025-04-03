import { useEffect } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import { ScreenTypes } from '../../types'
import QuestionScreen from '../question-screen'
import QuizDetailsScreen from '../quiz-details-screen'
import QuizTopicsScreen from '../quiz-topics-screen'
import ResultScreen from '../result-screen'
import SplashScreen from '../splash-screen'
import { AboutScreen } from '../about-screen'

const Main = () => {
  const { currentScreen, setCurrentScreen } = useQuiz()

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizDetailsScreen)
    }, 1000)
  }, [setCurrentScreen])

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
    [ScreenTypes.AboutScreen]: <AboutScreen />,
  }

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />

  return <>{ComponentToRender}</>
}

export default Main

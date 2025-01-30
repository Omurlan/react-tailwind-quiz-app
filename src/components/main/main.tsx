import { useEffect } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import { ScreenTypes } from '../../types'
import QuizTopicsScreen from '../quiz-topics-screen'
import SplashScreen from '../splash-screen'

// import QuestionScreen from '../QuestionScreen'
// import QuizDetailsScreen from '../QuizDetailsScreen'
// import QuizTopicsScreen from '../QuizTopicsScreen'
// import ResultScreen from '../ResultScreen'

const Main = () => {
  const { currentScreen, setCurrentScreen } = useQuiz()

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen)
    }, 1000)
  }, [setCurrentScreen])

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    // [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    // [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    // [ScreenTypes.ResultScreen]: <ResultScreen />,
  }

  /*
   * todo:
      splash screen svg //
      toggle theme button //
      setup ui according to figma
   */

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />

  return <>{ComponentToRender}</>
}

export default Main

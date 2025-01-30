import Main from './components/main/main'
import QuizProvider from './contexts/quiz-provider'

function App() {
  return (
    <QuizProvider>
      <Main />
    </QuizProvider>
  )
}

export default App

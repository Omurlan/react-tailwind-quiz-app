import Main from './components/main'
import QuizProvider from './contexts/quiz-provider'

function App() {
  return (
    <QuizProvider>
      <Main />
    </QuizProvider>
  )
}

export default App

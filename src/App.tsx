import Main from './components/main/main'
import QuizProvider from './contexts/quiz-provider'

function App() {
  // const [currentTheme, setCurrentTheme] = useState(() => {
  //   const savedTheme = localStorage.getItem('theme')
  //   return savedTheme || 'light'
  // })

  // const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { checked } = e.target
  //   setCurrentTheme(checked ? 'dark' : 'light')
  //   localStorage.setItem('theme', checked ? 'dark' : 'light')
  // }

  return (
    <QuizProvider>
      {/* <ToggleSwitch
        switchState={currentTheme === 'dark'}
        handleSwitchState={toggleTheme}
        icon={currentTheme === 'dark' ? <Moon /> : <Sun />}
      /> */}
      <Main />
    </QuizProvider>
  )
}

export default App

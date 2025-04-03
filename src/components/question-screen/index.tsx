import { FC, useEffect, useState } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import useTimer from '../../hooks/useTimer'
import { ScreenTypes } from '../../types'
import { addLeadingZero } from '../../utils/helpers'
import { CheckIcon, RightArrowIcon, TimerIcon } from '../../utils/icons'
import Button from '../ui/button'
import { CircularProgress } from '../ui/circular-progress'
import ModalWrapper from '../ui/modal-wrapper'
import PageCenter from '../ui/page-center'
import Question from './question'
import Sidebar from './sidebar'

const QuestionScreen: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([])
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false)
  const [showResultModal, setShowResultModal] = useState<boolean>(false)

  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
  } = useQuiz()

  const currentQuestion = questions[activeQuestion]

  const { question, type, choices, code, image, correctAnswers } = currentQuestion

  const onClickNext = () => {
    const isMatch: boolean =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer))

    // adding selected answer, and if answer matches key to result array with current question
    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }])

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      // how long does it take to finish the quiz
      const timeTaken = quizDetails.totalTime - timer
      setEndTime(timeTaken)
      setShowResultModal(true)
    }
    setSelectedAnswer([])
  }

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    if (type === 'MAQs') {
      if (selectedAnswer.includes(name)) {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name),
        )
      } else {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name])
      }
    }

    if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name])
      }
    }
  }

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen)
    document.body.style.overflow = 'auto'
  }

  // to prevent scrolling when modal is opened
  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden'
    }
  }, [showTimerModal, showResultModal])

  // timer hooks, handle conditions related to time
  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal)

  return (
    <div className="grid grid-cols-1 items-start lg:grid-cols-[330px_1fr]">
      <Sidebar
        questions={questions}
        activeQuestion={activeQuestion}
        timer={timer}
        quizDetails={quizDetails}
      />

      <PageCenter justifyCenter>
        {/* logo only for small screen  */}
        <div className="mb-10 flex items-center justify-center gap-1.5 lg:hidden">
          <h1 className="text-center text-2xl font-bold">
            Информационные технологии в юридической деятельности
          </h1>
        </div>

        <div
          className={`relative mb-18 min-h-[500px] w-full rounded bg-white p-4 pb-10 md:px-16 md:pt-8 md:pb-20 lg:bg-transparent`}
        >
          {/* progressbar only for small screen */}
          <div className="mb-7 lg:hidden">
            <CircularProgress
              progress={100 - (timer / quizDetails.totalTime) * 100}
              timer={timer}
              content={`${addLeadingZero(activeQuestion + 1)}/${addLeadingZero(quizDetails.totalQuestions)}`}
            />
          </div>

          <Question
            question={question}
            code={code}
            image={image}
            choices={choices}
            type={type}
            handleAnswerSelection={handleAnswerSelection}
            selectedAnswer={selectedAnswer}
          />

          <div className="flex justify-center">
            <Button
              text={activeQuestion === questions.length - 1 ? 'Завершить' : 'Дальше'}
              onClick={onClickNext}
              icon={<RightArrowIcon />}
              iconPosition="right"
              disabled={selectedAnswer.length === 0}
            />
          </div>
        </div>

        {/* timer or finish quiz modal*/}
        {(showTimerModal || showResultModal) && (
          <ModalWrapper
            title={showResultModal ? 'Завершено!' : 'Время вышло!'}
            subtitle={`Вы ответили на ${result.length} вопросов.`}
            onClick={handleModal}
            icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
            buttonTitle="К результату"
          />
        )}
      </PageCenter>
    </div>
  )
}

export default QuestionScreen

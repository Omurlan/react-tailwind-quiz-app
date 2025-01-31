import { FC, useEffect, useState } from 'react'
import { useQuiz } from '../../contexts/quiz-context'
import useTimer from '../../hooks/useTimer'
import { ScreenTypes } from '../../types'
import { CheckIcon, RightArrowIcon, TimerIcon } from '../../utils/icons'
import Button from '../ui/button'
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
    <div className="flex items-start">
      <Sidebar
        questions={questions}
        activeQuestion={activeQuestion}
        totalQuestions={quizDetails.totalQuestions}
      />

      <PageCenter light justifyCenter>
        <div
          className={`relative mb-18 min-h-[500px] w-full rounded px-4 pt-4 pb-20 md:w-[900px] md:px-16 md:pt-8`}
        >
          <Question
            question={question}
            code={code}
            image={image}
            choices={choices}
            type={type}
            handleAnswerSelection={handleAnswerSelection}
            selectedAnswer={selectedAnswer}
          />
          <div className="flex w-[90%] justify-center gap-5 md:w-auto">
            <Button
              text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
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
            title={showResultModal ? 'Done!' : 'Your time is up!'}
            subtitle={`You have attempted ${result.length} questions in total.`}
            onClick={handleModal}
            icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
            buttonTitle="SHOW RESULT"
          />
        )}
      </PageCenter>
    </div>
  )
}

export default QuestionScreen

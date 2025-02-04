import { FC } from 'react'

import { refreshPage } from '../../utils/helpers'

import { useQuiz } from '../../contexts/quiz-context'
import { AppLogoBlack, Refresh } from '../../utils/icons'
import Button from '../ui/button'
import Checkbox from '../ui/checkbox'
import CodeSnippet from '../ui/code-snippet'
import QuizImage from '../ui/quiz-image'
import RadioButton from '../ui/radio-button'
import ResultOverview from './result-overview'
import RightAnswer from './right-answer'

const ResultScreen: FC = () => {
  const { result } = useQuiz()

  const onClickRetry = () => {
    refreshPage()
  }

  return (
    <div className="bg-secondary-bg mx-auto my-8 w-[90%] max-w-[900px] p-4 pt-10 md:my-16 md:w-auto md:pt-0">
      <div className="my-16 flex items-center justify-center gap-1.5">
        <AppLogoBlack width={55} height={50} />
        <h1 className="text-center text-2xl font-bold">XEVEN QUIZ</h1>
      </div>
      <div className="bg-card mx-auto mb-10 rounded-sm p-4 md:px-[90px] md:pt-10 md:pb-[90px]">
        <ResultOverview result={result} />
        {result.map(
          (
            {
              question,
              type,
              choices,
              code,
              image,
              correctAnswers,
              selectedAnswer,
              score,
              isMatch,
            },
            index: number,
          ) => {
            return (
              <div
                key={question}
                className="mt-10 flex flex-col justify-center md:flex-row"
              >
                <div className="w-[90%]">
                  <div className="flex gap-1">
                    <h6 className="text-primary text-[clamp(16px,5vw,18px)] leading-[1.3] font-medium">
                      {`${index + 1}. `}
                    </h6>
                    <span className="text-primary text-[clamp(16px,5vw,18px)] leading-[1.3] font-medium lg:mb-5">
                      {question}
                    </span>
                  </div>
                  <div>
                    {code && <CodeSnippet code={code} language="javascript" />}
                    {image && <QuizImage image={image} />}
                    <ul>
                      {choices.map((ans: string, index: number) => {
                        // Convert index to alphabet character
                        const label = String.fromCharCode(65 + index)
                        const correct =
                          selectedAnswer.includes(ans) && correctAnswers.includes(ans)
                        const wrong =
                          selectedAnswer.includes(ans) && !correctAnswers.includes(ans)

                        return (
                          <div
                            className={`text-secondary mt-[clamp(13px,calc(10px+6*((100vw-600px)/1320)),16px)] border-b text-[clamp(16px,4vw,18px)] ${correct ? 'border-theme rounded bg-white font-semibold shadow-[0px_8px_8px_0px_#E7851A0D] transition-all duration-[200] ease-in' : wrong ? 'border-danger rounded font-semibold shadow-[0px_8px_8px_0px_#E7851A0D] transition-all duration-[200] ease-in' : 'border-border'}`}
                          >
                            <label className="grid grid-cols-[min-content_min-content_1fr] gap-2 p-4 text-lg">
                              {type === 'MAQs' ? (
                                <Checkbox
                                  name={ans}
                                  checked={correct || wrong}
                                  red={wrong}
                                  disabled
                                />
                              ) : (
                                <RadioButton
                                  name={ans}
                                  value={ans}
                                  checked={correct || wrong}
                                  red={wrong}
                                  disabled
                                />
                              )}
                              <span>{label}&#41;</span>
                              {ans}
                            </label>
                          </div>
                        )
                      })}
                    </ul>
                    {/* only show if the answer is wrong */}
                    {!isMatch && (
                      <RightAnswer correctAnswers={correctAnswers} choices={choices} />
                    )}
                  </div>
                </div>
                <span
                  className={`m-4 justify-end text-center font-medium md:mt-1 md:mr-0 md:justify-normal ${isMatch ? 'text-theme' : 'text-danger'}`}
                >{`Score ${isMatch ? score : 0}`}</span>
              </div>
            )
          },
        )}
      </div>

      <div className="flex items-center justify-end">
        <Button
          text="RETRY"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
        />
      </div>
    </div>
  )
}

export default ResultScreen

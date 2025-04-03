import PageCenter from '../ui/page-center.tsx'
import CenterCardContainer from '../ui/center-card-container.tsx'

import Button from '../ui/button.tsx'
import { useQuiz } from '../../contexts/quiz-context.ts'
import { ScreenTypes } from '../../types'

export const AboutScreen = () => {
  const { setCurrentScreen } = useQuiz()

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <img
          className="mx-auto mb-5 w-[150px] object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVEMteSMkRxsFw21J2O6iWl8H7uGuFDMs_Q&s"
        />

        <h3 className="mb-5 max-w-[600px] text-[20px]">
          Выпускная квалификационная работа на тему:
        </h3>

        <h2 className="max-w-[600px] text-center text-[24px]">
          Разработка программы тестирующей системы для оценки контроля знания студентов по
          дисциплине “Информационные технологии в юридической деятельности”
        </h2>

        <div className="my-10 self-center">
          <p className="font-">Выполнил: ст. гр. ИТУ-21 Каримова А. </p>
          <p>Руководитель: Мамадалиева К.А.</p>
        </div>

        <Button
          outline
          text="Назад"
          iconPosition="left"
          onClick={() => setCurrentScreen(ScreenTypes.QuizDetailsScreen)}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

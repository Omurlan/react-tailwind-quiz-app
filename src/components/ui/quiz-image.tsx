import { FC } from 'react'

interface QuizImageProps {
  image: string
}

const QuizImage: FC<QuizImageProps> = ({ image }) => (
  <img
    src={image}
    alt="Quiz Picture"
    className="mb-5 h-[400px] max-w-full rounded-[10px] shadow-[6px_6px_2px_#fe843d]"
  />
)

export default QuizImage

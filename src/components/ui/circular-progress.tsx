import { FC } from 'react'

export interface CircularProgressProps {
  progress: number
  content?: string
}

export const CircularProgress: FC<CircularProgressProps> = ({ progress, content }) => {
  return (
    <div
      className="relative mx-auto grid aspect-square size-40 place-content-center rounded-full before:absolute before:bottom-[50px] before:left-1/2 before:-translate-x-1/2 before:text-[#797979] before:content-[attr(data-content)] after:flex after:aspect-square after:size-[148px] after:justify-center after:rounded-full after:bg-white after:pt-12 after:text-3xl after:font-semibold after:content-[attr(data-progress)]"
      style={{ background: `conic-gradient(#fe843d ${progress}%, #ECECEC 0)` }}
      data-progress={Math.trunc(progress) + '%'}
      data-content={content}
    ></div>
  )
}

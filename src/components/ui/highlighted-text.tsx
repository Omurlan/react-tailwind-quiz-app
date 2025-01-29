import { FC } from 'react'

interface HighlightedTextProps {
  themeText?: boolean
  children: string
}

const HighlightedText: FC<HighlightedTextProps> = ({ themeText, children }) => {
  return (
    <span
      className={
        themeText ? 'text-black dark:text-white' : 'text-theme-light dark:text-theme-dark'
      }
    >
      {children}
    </span>
  )
}

export default HighlightedText

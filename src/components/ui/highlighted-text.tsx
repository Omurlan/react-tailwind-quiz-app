import { FC } from 'react'

interface HighlightedTextProps {
  themeText?: boolean
  children: string
}

const HighlightedText: FC<HighlightedTextProps> = ({ themeText, children }) => {
  return <span className={themeText ? 'text-black' : 'text-theme'}>{children}</span>
}

export default HighlightedText

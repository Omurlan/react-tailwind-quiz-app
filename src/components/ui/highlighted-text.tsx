import { FC } from 'react'

interface HighlightedTextProps {
  children: string
}

const HighlightedText: FC<HighlightedTextProps> = ({ children }) => {
  return <span className="text-theme">{children}</span>
}

export default HighlightedText

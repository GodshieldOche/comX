import Link from 'next/link'
import React from 'react'

interface Props {
    text: string;
    color: string;
    onClick: () => void;
}

const TextButton : React.FC<Props> = ({ text, color, onClick}) => {
  return (
      <h1
        className={`${color} cursor-pointer text-sm !font-medium uppercase`}
        onClick={onClick}
      >
          {text}
      </h1>
  )
}

export default TextButton
import React from 'react'

interface props {
    color: string;
    textColor: string;
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<props> = ({ color, textColor, text, onClick}) => {
  return (
      <button
          className={`flex items-center text-sm font-[700] ${textColor} justify-center w-[457px] h-[46px] ${color} `}
          onClick={onClick}
      >
          {text}
      </button>
  )
}

export default Button
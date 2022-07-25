import React from 'react'

interface Props {
    text: string;
    active?: boolean;
}

const TabButton: React.FC<Props> = ({text, active}) => {
  return (
      <button className={` ${active ? "bg-primaryTwo text-mainWhite" : "text-fontThree bg-bgColor" } py-[9px] px-[18px] text-sm font-medium  rounded-full `}>
          {text}
      </button>
  )
}

export default TabButton
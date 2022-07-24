import Link from 'next/link'
import React from 'react'

interface Props {
    path: string;
    text: string;
    active: boolean;
}

const ButtonLink: React.FC<Props> = ({path, text, active}) => {
  return (
      <button className={`
      border  py-[18px] px-[43px]
      ${active
              ? "bg-fontThree text-mainWhite border-fontThree"
              : "bg-mainWhite border-[#E8ECEF] text-fontThree hover:bg-gray-100"} `}>
          <Link href={path}>
              <a>
                  {text}
              </a>
          </Link>
      </button>
  )
}

export default ButtonLink
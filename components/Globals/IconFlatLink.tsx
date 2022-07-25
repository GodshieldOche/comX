import Image from 'next/image';
import React from 'react'

interface Props {
    icon: string;
    text: string;
    width: number;
    height: number;
    active?: boolean;
}

const IconFlatLink: React.FC<Props> = ({icon, text, width, height, active}) => {
  return (
      <div className={`${active ? "bg-[#F8FAFB] rounded-lg" : ""} flex w-full items-center py-[12px]`}>
          <div className='flex items-center space-x-2 pl-[20px]'>
              <div className='=" flex items-center justify-center w-[18px] h-[16px]'>
                  <Image src={icon} width={width} height={height} />
              </div>

              <h1 className={` ${active ? "text-primaryTwo" : "text-fontThree"} text-sm font-medium`}>{text}</h1>
          </div>
         
      </div>
  )
}

export default IconFlatLink
import Image from 'next/image';
import React from 'react'

interface Props {
    icon: string;
    text: string;
    width: number;
    height: number;
}

const IconLink : React.FC<Props> = ({icon, text, width, height}) => {
  return (
      <div className='flex flex-col items-center justify-center space-y-1'>
          <Image src={icon} width={width} height={height} />
          <h1 className='text-xs font-medium text-fontThree '>{text}</h1>
      </div>
  )
}

export default IconLink
import Image from 'next/image'
import React from 'react'
import ChatBox from '../Globals/ChatBox'


const LayoutOne: React.FC <any> = ({children}) => {
  return (
      <div className='font-Roboto bg-bgColor w-full h-full min-h-screen overflow-y-auto relative'>
          <div className='flex flex-col items-center mt-[38px] mb-28 max-w-[555px] mx-auto '>
              {/* header */}
                <div>
                    <Image src="/image.png" width={161} height={84} alt="logo" />
                 </div>
              {/* body */}
                {children}
          </div>
          <ChatBox />
        </div>
  )
}

export default LayoutOne
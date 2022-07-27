import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { errorState, errorType } from '../../redux/features/error'
import { AppState, AppStore } from '../../redux/store'
import ChatBox from '../Globals/ChatBox'
import Error from '../Globals/Error'


const LayoutOne: React.FC<any> = ({ children }) => {
  
  const state = useSelector(errorState)
  const type = useSelector(errorType)

  return (
      <div className='font-Roboto bg-bgColor w-full h-full min-h-screen overflow-y-auto relative'>
          <div className='flex flex-col items-center mt-[38px] mb-28 max-w-[555px] mx-auto '>
              {/* header */}
                <div>
                    <Image src="/image.png" width={161} height={84} alt="logo" />
                 </div>
                 
              {/* body */}
              {
                state && type === "form" && <Error />
              }
              {children}
          </div>
          <ChatBox />
        </div>
  )
}

export default LayoutOne
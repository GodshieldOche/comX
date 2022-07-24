import React from 'react'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { useRouter, NextRouter } from 'next/router'

const ChatBox : React.FC = () => {

    const router: NextRouter = useRouter()


  return (
      <div className='fixed bottom-[26px] right-[24px]'>
          <div className="flex items-center space-x-2">
              {/* conversation box */}
              {
                  router.pathname === '/' &&
                  <div className='relative'>
                      {/* chat view */}
                          <div className='border rounded-2xl p-3 border-primaryTwo/60 '>
                          <h1 className="text-base font-[700] text-fontThree ">Hi, I'm Adanna</h1>
                          <h2 className='text-fontFour'>How may I help you?</h2>
                      </div>
                      {/* pointer */}
                  </div>
              }
              
              
              {/* person icon */}
              <div className="bg-primaryTwo rounded-full h-fit w-fit p-[15.3px]">
                  <IoChatbubbleEllipsesOutline className='text-mainWhite text-3xl' />
              </div>
          </div>
      </div>
  )
}

export default ChatBox
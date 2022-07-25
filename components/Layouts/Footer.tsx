import React from 'react'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Footer : React.FC = () => {
  return (
      <div className='fixed bottom-0 left-0 h-[51px] z-50 w-full bg-mainWhite
        flex flex-nowrap items-center space-x-8'>
          <div className='h-full flex items-center justify-center bg-[#000000] w-[161px] '>
              <h1 className='text-lg font-medium text-mainWhite '>Live Market</h1>
          </div>
          <div className='h-full w-full  flex !flex-nowrap items-center space-x-10 overflow-x-hidden '>
              {
                  array.map((item, index) => (
                      <div key={index} className=''>
                          <h2 className='text-[#000000] text-sm font-medium whitespace-nowrap '>Soybean (SBBS) </h2>
                          <h1 className=" text-[#000000] text-sm "><span className="!text-xs">₦</span>8,374,763</h1>
                      </div>
                  ))
              }
          </div>
      </div>
  )
}

export default Footer
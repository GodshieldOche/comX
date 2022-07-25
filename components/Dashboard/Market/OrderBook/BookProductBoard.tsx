import React from 'react'
import TabButton from '../../../Globals/TabButton'

const BookProductBoard : React.FC = () => {
  return (
      <div className='fixed top-[70px] left-[310px] right-4 h-[115px] bg-mainWhite rounded-lg 
      flex flex-col justify-center px-5 space-y-3'>
          <div className="flex items-center w-full space-x-8">
              <div className='w-[62px]'>
                  <h1 className='font-medium text-sm text-fontThree text-end'>Board</h1>
              </div>
              <div className='flex items-center space-x-3'>
                  <TabButton text="X-Traded" active={true} />
                  <TabButton text="OTC" />
                  <TabButton text="FI" />
                  <TabButton text="Derivatives" />
              </div>
          </div>

          <div className="flex items-center w-full space-x-8">
              <div className='w-[62px]'>
                  <h1 className='font-medium text-sm text-fontThree text-end'>Product</h1>
              </div>
              <div className='flex items-center space-x-3'>
                  <TabButton text="All" active={true} />
                  <TabButton text="SMAZ" />
                  <TabButton text="SBBS" />
                  <TabButton text="SPRL" />
                  <TabButton text="SGNG" />
                  <TabButton text="SSGM" />
                  <TabButton text="FETC" />
                  <TabButton text="SCOC" />
              </div>
          </div>
      </div>
  )
}

export default BookProductBoard
import React from 'react'

interface Props {
    type: string
}

const TableTwo: React.FC<Props> = ({type}) => {
  return (
      <div className='w-full bg-mainWhite space-y-2 pb-2'>
          <div className='grid grid-cols-4 gap-10 py-4 bg-mainWhite px-5 items-center border-b-2'>
              <div className=' w-full h-full flex items-center'>
                  <h1 className=' text-xs text-[#778CA2] font-medium'>
                      Products
                  </h1>
              </div>
              <div className='w-full h-full flex items-center justify-end'>
                  <h1 className=' text-xs text-[#778CA2] font-medium'>
                      Quantity
                  </h1>
              </div>
              <div className=' w-full h-full flex items-center'>
                  <h1 className=' text-xs text-[#778CA2] font-medium ml-8'>
                      Bid Price
                  </h1>
              </div>
              <div className=' w-full h-full flex items-center'>
                  
              </div>
          </div>
          {/* body */}
          <div
              className='scroller w-full h-full max-h-[350px] overflow-hidden overflow-y-auto divide-y '>
              {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => (
                      <div key={index} className='grid grid-cols-4 gap-10 py-4 hover:bg-gray-100  bg-mainWhite px-5 items-center'>
                          <div className=' w-full h-full flex items-center'>
                              <h1 className=' text-sm text-fontThree font-medium'>
                                  Soybeans(SBBC)
                              </h1>
                          </div>
                          <div className=' w-full h-full flex items-center justify-end'>
                              <h1 className=' text-sm text-fontThree font-medium'>
                                  2003
                              </h1>
                          </div>
                          <div className=' w-full h-full flex items-center ml-8 '>
                              <h1 className={` ${type === "buy" ? "text-primaryOne" : "text-secondaryThree"} text-sm font-medium`}>
                                  1736.46
                              </h1>
                          </div>
                          <div className=' w-full h-full flex items-center'>
                              <button className={`${type === "buy" ? "text-primaryOne border-primaryOne" : "text-secondaryThree border-secondaryThree"} 
                               box-border py-[3px] px-[20px] border text-sm font-medium rounded-[2px]`}>
                                  {
                                      type === "buy" ? "Buy" : "Sell"
                                  }
                              </button>
                          </div>
                      </div>
                    ))
              }
          </div>
          
      </div>
  )
}

export default TableTwo
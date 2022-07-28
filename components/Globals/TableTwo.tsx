import React from 'react'

interface Props {
    type: string
    data: []
}

const TableTwo: React.FC<Props> = ({type, data}) => {
  return (
      <div className='w-full bg-mainWhite space-y-2 pb-2'>
          <div className='grid grid-cols-12 gap-5 py-4 bg-mainWhite px-5 items-center border-b-2 border-[#F2F4F6] '>
              <div className='col-span-6 w-full h-full flex items-center'>
                  <h1 className=' text-xs text-[#778CA2] font-medium'>
                      Products
                  </h1>
              </div>
              <div className='col-span-1 w-full h-full flex items-center justify-end'>
                  <h1 className=' text-xs text-[#778CA2] font-medium'>
                      Quantity
                  </h1>
              </div>
              <div className='col-span-3 w-full h-full flex items-center'>
                  <h1 className=' text-xs text-[#778CA2] font-medium ml-12'>
                      Bid Price
                  </h1>
              </div>
              <div className='col-span-2 w-full h-full flex items-center justify-end'>
                  
              </div>
          </div>
          {/* body */}
          <div
              className='scroller w-full h-full max-h-[310px] overflow-hidden overflow-y-auto divide-y divide-[#F2F4F6] '>
              {
                  data?.map((item : any, index) => (
                      <div key={index} className='grid grid-cols-12 gap-5 py-4 hover:bg-[#F8FAFB]  bg-mainWhite px-5 items-center'>
                          <div className='col-span-6 w-full h-full flex items-center'>
                              <h1 className=' text-sm text-fontThree font-medium'>
                                  {item.name}
                              </h1>
                          </div>
                          <div className='col-span-1 w-full h-full flex items-center justify-end'>
                              <h1 className=' text-sm text-fontThree font-medium'>
                                  {item.volume_per_unit}
                              </h1>
                          </div>
                          <div className='col-span-3 w-full h-full flex items-center ml-12'>
                              <h1 className={` ${type === "buy" ? "text-primaryOne" : "text-secondaryThree"} text-sm font-medium`}>
                                  7034.56
                              </h1>
                          </div>
                          <div className='col-span-2 w-full h-full flex items-center justify-end'>
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
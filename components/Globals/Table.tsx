import React from 'react'

const Table: React.FC = () => {
    return (
        <div className='w-full bg-mainWhite space-y-2 pb-2'>
            <div className='grid grid-cols-7 gap-10 py-4 bg-mainWhite px-5 items-center border-b-2'>
                <div className=' w-full h-full flex items-center'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Security
                    </h1>
                </div>
                <div className=' w-full h-full flex items-center justify-end'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Board
                    </h1>
                </div>
                <div className=' w-full h-full flex items-center justify-center'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Order Type
                    </h1>
                </div>
                <div className=' w-full h-full flex items-center justify-center'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Matched Price
                    </h1>
                </div>
                <div className=' w-full h-full flex items-center'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Quantity
                    </h1>
                </div>
                <div className=' w-full h-full flex items-center'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Date
                    </h1>
                </div>
                <div className=' w-full h-full flex items-center'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Time
                    </h1>
                </div>
            </div>
            {/* body */}
            <div
                className='scroller w-full h-full max-h-[350px] overflow-hidden overflow-y-auto '>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => (
                        <div key={index} className='grid grid-cols-7 gap-10 py-4 bg-mainWhite px-5 items-center'>
                            <div className=' w-full h-full flex items-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    Soybeans(SBBS)
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center justify-end'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    X-traded
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    Buy
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    1792.65
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center '>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    9265
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    17, Oct 2020
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    07:38
                                </h1>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
  )
}

export default Table
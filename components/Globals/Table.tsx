import React from 'react'
import { format } from 'date-fns'

interface Props {
    data: []
}

const Table: React.FC<Props> = ({data}) => {
    return (
        <div className='w-full h-fit bg-mainWhite space-y-2 pb-2'>
            <div className='grid grid-cols-7 gap-10 py-4 bg-mainWhite px-5 items-center border-b-2 border-[#F2F4F6]'>
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
                <div className=' w-full h-full flex items-center justify-center'>
                    <h1 className=' text-xs text-[#778CA2] font-medium'>
                        Time
                    </h1>
                </div>
            </div>
            {/* body */}
            <div
                className='scroller w-full h-full max-h-[350px] overflow-hidden overflow-y-auto divide-y divide-[#F2F4F6] '>
                {
                    data?.map((item : any, index) => (
                        <div key={index} className='grid grid-cols-7 gap-10 py-4 bg-mainWhite px-5 items-center'>
                            <div className=' w-full h-full flex items-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    Soybeans(SBBS)
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center justify-end'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    {item.board_type}
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    {item.order_type}
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    {item.order_price}
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center '>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    9265
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    {format(new Date(item.created), 'do MMM, yyyy')}
                                </h1>
                            </div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <h1 className=' text-sm text-fontThree font-medium'>
                                    {format(new Date(item.created), 'hh:mm')}
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
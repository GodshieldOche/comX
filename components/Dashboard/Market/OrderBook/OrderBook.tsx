import React from 'react'
import Table from '../../../Globals/Table'
import TableTwo from '../../../Globals/TableTwo'
import BookProductBoard from './BookProductBoard'

const OrderBook: React.FC = () => {
  return (
    <div className='ml-[230px] mr-[100px] mt-[195px] space-y-5 '>
        <BookProductBoard />
        <div className='grid grid-cols-2 gap-3 '>
          <div className='w-full  '>
            <TableTwo type="buy" />
          </div>
          <div className='w-full'>
            <TableTwo type="sell" />
          </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default OrderBook
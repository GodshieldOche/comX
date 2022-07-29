import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductPrice, getProductView } from '../../../../redux/features/orderBook'
import { manager } from '../../../../redux/features/register'
import { getSession } from '../../../../redux/features/session'
import { wrapper } from '../../../../redux/store'
import Table from '../../../Globals/Table'
import TableTwo from '../../../Globals/TableTwo'
import BookProductBoard from './BookProductBoard'

const OrderBook: React.FC = () => {

  const [data, setData] = useState<[]>([])
  const [trades, setTrades] = useState<[]>([])

  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(getProductView()).then((res: any) => {
      setData(res.payload.data)
    })
    dispatch(getSession()).then((res: any) => {
      if (res.payload.token) {
        dispatch(getProductPrice(res.payload.token)).then((res: any) => { 
          console.log(res)
        })
      }
    })
  }, [])
  


  useEffect(() => {
    let ws = new WebSocket("wss://comx-sand-api.afexnigeria.com/stream/trades")

    ws.onopen = () => {
      console.log("connected")
    }
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      data.messages.forEach((item: any) => {
        manager.decrypt(item)
      })

      setTrades(data.messages)
      
    }
    ws.onerror = (error) => {
      console.log(error)
    }
    ws.onclose = () => {
      console.log("disconnected")
    }
  }, [])

  return (
    <div className='ml-[230px] mr-[100px] mt-[195px] space-y-5 '>
        <BookProductBoard />
        <div className='grid grid-cols-2 gap-3 '>
          <div className='w-full  '>
            <TableTwo data={data} type="buy" />
          </div>
          <div className='w-full'>
            <TableTwo data={data} type="sell" />
          </div>
      </div>
      <div>
        <Table data={trades} />
      </div>
    </div>
  )
}


export default OrderBook
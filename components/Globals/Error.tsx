import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { errorMessage, setModalState } from '../../redux/features/error'

const Error: React.FC = () => {

    const message = useSelector(errorMessage)
    const dispatch = useDispatch()

  return (
      <div className='flex items-center justify-between bg-[#FEF2F2] rounded-[10px] border border-[#EF4444] px-5 w-[450px] py-[20px]'>
          <h1 className='text-[#EF4444]'>{message}</h1>
          <button onClick={() => {dispatch(setModalState(false))}}>
              <Image src="/Vector.png" width={12} height={12} alt="" />
          </button>
      </div>
  )
}

export default Error
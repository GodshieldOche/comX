import Image from 'next/image'
import React from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdOutlineLightMode } from "react-icons/md";

const Header : React.FC = () => {
  return (
      <div className="fixed top-0 left-0 h-[62px] z-50 w-full bg-mainWhite 
        flex items-center justify-between px-4 ">
        <div>
          <Image src="/image.png" width={113} height={59} alt="logo" />
        </div>

        <div className='h-full flex space-x-10'>
          
          <div className='flex items-center'>
            <div className="flex items-center px-[10px] py-[3px] rounded-full bg-[#F4F4F6] space-x-1">
              <h1 className='uppercase font-medium text-[7px] text-fontThree '>Light</h1>
              <div className='w-[24.97px] h-[25px] flex items-center justify-center rounded-full bg-mainWhite cursor-pointer'>
                <Image src="/sun.png" width={12.98} height={13} alt="sun" />
              </div>
            </div>
          </div>

        
          <div className="border-r border-l flex items-center space-x-7 px-[25px]">
            <MdOutlineKeyboardArrowRight className='text-lg' />
            <div className='space-y-1'>
              <h2 className='text-[#778CA2] text-[10px] font-medium uppercase '>Cash Balance</h2>
              <h1 className="font-[700] text-fontThree tracking-[2px] text-xs "><span className="text-[10px]">₦</span>8,374,763</h1>
            </div>
            <div className='space-y-1'>
              <h2 className='text-[#778CA2] text-[10px] font-medium uppercase '>securities value</h2>
              <h1 className="font-[700] text-fontThree tracking-[2px] text-xs "><span className="text-[10px]">₦</span>8,374,763</h1>
            </div>
            <div className='space-y-1'>
              <h2 className='text-[#778CA2] text-[10px] font-medium uppercase '>Loan Balance</h2>
              <h1 className="font-[700] text-fontThree tracking-[2px] text-xs "><span className="text-[10px]">₦</span>7,542,763</h1>
            </div>
          </div>

        
          <div className="flex items-center !justify-end !ml-20">
            <button className='flex space-x-1 items-center'>
              <span className='py-[4px] px-[8px] uppercase tracking-[1px] text-mainWhite text-[10px] font-[700] bg-fontThree '>Demo</span>
              <MdOutlineKeyboardArrowDown className='text-lg' />
            </button>
          </div>
          
        </div>
      </div>
  )
}

export default Header
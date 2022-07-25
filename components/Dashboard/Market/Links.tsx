import Image from 'next/image'
import React from 'react'
import IconFlatLink from '../../Globals/IconFlatLink'

const Links: React.FC = () => {
  return (
      <div className='fixed top-[70px] left-[93px] w-[207px] h-[352px] bg-mainWhite rounded-lg
      flex flex-col py-[7px] px-[8px] space-y-3'>
          <form className='w-full h-fit relative mt-1'>
              <input
                  type="text"
                  className='w-full outline-none p-2 pl-5 border text-xs border-[#D6D6D6] bg-bgColor h-[27px] rounded-sm '
                  placeholder="Search"
              />
              <div className='absolute top-[6%] left-1 '>
                  <Image src="/ic_plus.png" width={13} height={13} alt="" />
              </div>
          </form>

          <div className='w-full flex flex-col space-y-1'>
              <IconFlatLink icon="/trending-up.png" text="Product View" width={15} height={10} />
              <IconFlatLink icon="/book.png" text="Order Book" width={12} height={15} active={true} />
              <IconFlatLink icon="/shape.png" text="Price History" width={17} height={14.57} />
              <IconFlatLink icon="/eye.png" text="Open Orders" width={16} height={11.64} />
              <IconFlatLink icon="/shape 2.png" text="Close Trades" width={16} height={16} />
              <IconFlatLink icon="/x-circle.png" text="Cancelled Trades" width={15} height={15} />
          </div>
      </div>
  )
}

export default Links
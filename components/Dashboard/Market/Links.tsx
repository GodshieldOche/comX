import React from 'react'

const Links: React.FC = () => {
  return (
      <div className='fixed top-[70px] left-[95px] w-[207px] h-[352px] bg-mainWhite rounded-lg
      flex flex-col py-[7px] px-[8px]'>
          <form className='w-full h-full mt-1'>
              <input
                  type="text"
                  className='w-full outline-none border text-xs border-[#D6D6D6] bg-bgColor h-[27px] rounded-md '
                  placeholder="Search"
              />
          </form>
      </div>
  )
}

export default Links
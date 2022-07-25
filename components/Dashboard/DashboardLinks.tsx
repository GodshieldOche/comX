import React from 'react'
import IconLink from '../Globals/IconLink';

const DashBoardLinks : React.FC = () => {
  return (
      <div className="fixed top-[64px] left-0 w-[83px] h-full bg-mainWhite
        flex flex-col items-center pt-[35px] space-y-8 ">
          <IconLink icon="/icon.png" text="Overview" width={24} height={24} />
          <IconLink icon="/icon-trade.png" text="Market" width={28.91} height={24.61} />
          <IconLink icon="/briefcase.png" text="Portfolio" width={26} height={23} />
          <IconLink icon="/Group 4.png" text="Community" width={26} height={22} />
          <IconLink icon="/Group 5.png" text="Reports" width={22} height={27} />
          <IconLink icon="/Group 3.png" text="Settings" width={28} height={28} />
      </div>
  )
}

export default DashBoardLinks

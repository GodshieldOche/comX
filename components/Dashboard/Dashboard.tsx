import React from 'react'
import DashBoardLinks from './DashboardLinks'

const Dashboard : React.FC<any> = ({children}) => {
  return (
      <div className='w-full h-full mt-[63px] ml-[85px] '>
          <DashBoardLinks />
          {children}
      </div>
  )
}

export default Dashboard


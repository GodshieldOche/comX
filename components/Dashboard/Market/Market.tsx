import React from 'react'
import Links from './Links';

interface Props { 
    children: React.ReactNode;
}

const Market: React.FC<Props> = ({children}) => {
  return (
      <div className='w-full h-full '>
          <Links />
          {children}
      </div>
  )
}

export default Market
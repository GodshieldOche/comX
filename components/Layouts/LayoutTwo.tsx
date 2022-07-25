import React from 'react'
import Footer from './Footer'
import Header from './Header'

const LayoutTwo: React.FC<any> = ({ children }) => {
  return (
      <div className='font-Roboto bg-bgColor w-full h-full min-h-screen overflow-y-auto relative'>
          <Header />
          {children}
          <Footer />
      </div>
  )
}

export default LayoutTwo
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const LayoutTwo: React.FC<any> = ({ children }) => {
  return (
      <div className='scroller font-Roboto bg-bgColor w-full h-full min-h-screen !overflow-hidden overflow-y-auto relative mb-[55px]'>
          <Header />
          {children}
          <Footer />
      </div>
  )
}

export default LayoutTwo
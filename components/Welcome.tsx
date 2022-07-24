import React from 'react'
import WelcomePrompt from './Globals/WelcomePrompt'

const Welcome: React.FC = () => {
  return (
      <div className='w-full space-y-10 mt-[92px]'>
          <WelcomePrompt type="signIn"/>
          <WelcomePrompt type="register" />
      </div>
  )
}

export default Welcome
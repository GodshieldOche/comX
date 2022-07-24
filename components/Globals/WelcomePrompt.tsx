import React from 'react'
import Button from './Button'
import {NextRouter, useRouter} from 'next/router'

interface props {
    type: string
}

const WelcomePrompt: React.FC<props> = ({ type }) => {

    const router: NextRouter = useRouter()

  return (
      <div className='bg-mainWhite w-full flex flex-col items-center justify-center py-11 space-y-8'>
          <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="text-3xl">
                  {
                      type === 'signIn' ? 'Sign in to ComX' : 'Create an Account'
                  }
              </h1>
              <h3 className="text-sm">
                  {
                      type === 'signIn' ? 'Welcome to ComX' : 'Join the Family'
                  }
              </h3>
          </div>
          {
              type === 'signIn'
                  ? <Button
                      color="bg-primaryOne"
                      textColor="text-mainWhite"
                      text="Sign in"
                      onClick={(e) => {
                          e.preventDefault()
                          router.push('/signin')
                      }}
                  />
                  : <Button
                      color="bg-mainBlack"
                      textColor="text-mainWhite"
                      text="Register"
                      onClick={(e) => {
                          e.preventDefault()
                          router.push('/register/individual')
                      }} />       
          }
          
      </div>
  )
}

export default WelcomePrompt
import React from 'react'
import TextButton from '../../../Globals/TextButton'
import { NextRouter, useRouter } from 'next/router'

interface Props {
    step: string
}


const PasswordReset: React.FC<Props> = ({ step }) => {
    
    const router: NextRouter = useRouter()

  return (
      <div className='body-layout'>
        <div className='flex flex-col justify-center items-center space-y-2 !mb-[60px]'>
            <h1 className="text-3xl text-fontOne">Password Reset</h1>
            <h2 className="text-sm text-fontTwo">Reset your password to continue trading on ComX</h2>
        </div> 
          {/* form */}
          <form className="w-full space-y-5 ">
              <div className='space-y-2'>
                  <label htmlFor="email" className="text-sm text-fontThree ">
                      {
                          step === "one"
                              ? "Enter the Email Address you registered with"
                              : "Enter the 4-digits code that was sent to name@mymail.com"
                      }
                      
                  </label>
                  <input
                      type={`${step === "one" ? 'email' : 'code'}`}
                      placeholder={`${step === "one" ? 'Enter your Email' : 'Enter code'}`}
                      className='form-input'
                  />
              </div>
          </form>
          
          <h1 className='text-xs text-fontFour/80'>
              {
                  step === "one"
                      ? "Note that you'll be sent an OTP to the email address provided"
                      : "Resend code"
              }
          </h1>
          
          <div className="absolute w-full flex px-[56px] justify-between  bottom-[54px]">
              <TextButton
                  onClick={() => {
                      router.push(`${step === "one" ? "/signin" : "/signin/password-reset"}`)
                  }}
                  text="Back"
                  color="text-fontTwo"
              />
              <TextButton
                  onClick={() => {
                      router.push(`${step === "one" ? "/signin/password-reset/otp-validation" : "/signin"}`)
                  }}
                  text="Proceed"
                  color="text-primaryTwo"
              />
          </div>
    </div>
  )
}

export default PasswordReset
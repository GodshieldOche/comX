import Link from 'next/link'
import React from 'react'
import Button from '../../Globals/Button'
import { useRouter, NextRouter } from 'next/router'

const SignIn : React.FC = () => {

    const router: NextRouter = useRouter()

  return (
      <div className='body-layout'>
          <div className='flex flex-col justify-center items-center space-y-2'>
              <h1 className="text-3xl text-fontOne">Sign In to ComX</h1>
              <h2 className="text-sm text-fontTwo">Enter your login credentials below. </h2>
          </div>
          {/* form */}
          <form className="w-full space-y-5 ">
              <div className='space-y-2'>
                  <label htmlFor="email" className="text-sm text-fontTwo ">Your Email</label>
                  <input
                      type="email"
                      placeholder='Enter your Email'
                      className='form-input'
                  />
              </div>
              <div className='space-y-2'>
                  <label htmlFor="password" className="text-sm text-fontTwo ">Your Password</label>
                  <input
                      type="password"
                      placeholder='********'
                      className='form-input'
                  />
              </div>
              <div className='flex items-center justify-between !mb-10'>
                  <div className="flex items-center space-x-1">
                    <input type="checkbox" id="stay" name="stay" value="" className="!p-3" />
                    <label htmlFor="stay" className="text-sm text-mainBlack">Stay Signed in</label>
                  </div>
                  <Link href="/signin/password-reset">
                      <a>
                          <h1 className='text-sm text-primaryTwo'>Forgot Password?</h1>
                      </a>
                  </Link>
              </div>
              <Button
                  color="bg-primaryOne"
                  textColor="text-mainWhite"
                  text="Sign in"
                  onClick={(e) => {
                      e.preventDefault()
                      router.push('/signin')
                  }}
              />
              <Button
                  color="bg-[#F8FAFB]"
                  textColor="text-fontThree"
                  text="Back"
                  onClick={(e) => {
                      e.preventDefault()
                      router.push('/')
                  }}
              />
          </form>
    </div>
  )
}

export default SignIn
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import TextButton from '../../Globals/TextButton'

const RegistrationSuccessful: React.FC = () => {

  const router : NextRouter = useRouter() 

  return (
    <>
      <div className='h-fit my-auto flex flex-col items-center justify-center space-y-4'>
        <Image src="/image-2.png" width={273} height={273} alt="Welcome Image" />
        <h1 className="text-3xl text-fontOne ">
          Registration Complete
        </h1>
        <p className="text-center text-xs text-fontTwo font-light !mb-8">Dear [fName]. Your registration is now complete.<br/>
          You may proceed to your dashboard and start trading commodities.
        </p>

        <TextButton
          text="Go to Dashboard"
          color="text-primaryTwo"
          onClick={() => {
            router.push('/dashboard/market/order-book')
          }}
        />
      </div>
    </>
  )
}

export default RegistrationSuccessful
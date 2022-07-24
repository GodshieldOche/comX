import React, { useEffect, useState } from 'react'
import ButtonLink from '../../Globals/ButtonLink';
import BasicInformation from './BasicInformation';
import LoginDetails from './LoginDetails';
import OtpVerification from './OtpVerification';
import RegistrationSuccessful from './RegistrationSuccessful';
import { useRouter, NextRouter } from 'next/router';

const FormWrapper: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [type, setType] = useState<string>('');

    const router: NextRouter = useRouter();

    useEffect(() => {
        if (router.pathname === '/register/corporate') {
            setType('corporate');
        } else {
            setType('individual');
        }
    }, [])

    const formDisplay = () => {
        if (page === 1) {
            return <BasicInformation type={type} setPage={setPage} />
        } else if (page === 2) { 
            return <LoginDetails type={type} setPage={setPage} />
        } else if (page === 3) {
            return <OtpVerification type={type} setPage={setPage} />
        } else {
            return <RegistrationSuccessful />
        }
    }


  return (
      <div className='body-layout'>
          {
              page !== 4 && 
              <div className='flex flex-col justify-center items-center space-y-2'>
                      <h1 className="text-3xl text-fontOne tracking-[0.2px] ">
                          { page === 1 || page === 2 ? 'Register new account' : 'Account Details' }
                      </h1>
                  <h2 className="text-sm text-fontTwo">Sign up for an account and start trading today </h2>
              </div>
          }
          {
              page === 1 && 
              <div className=' w-full !mt-[50px]'>
                      <h1 className='text-sm text-fontThree mb-[14px]'>Select the category that best describes you</h1>
                      <div className="flex items-center space-x-3">
                          <ButtonLink path="/register/individual" text="Individual" active={router.pathname === '/register/individual'} />
                          <ButtonLink path="/register/corporate" text="Corporate" active={router.pathname === '/register/corporate'} />
                      </div>
              </div>
          }
          
          {
              formDisplay()
          }
      </div>
  )
}

export default FormWrapper
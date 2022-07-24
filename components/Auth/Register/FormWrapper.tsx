import React, { useEffect, useRef, useState } from 'react'
import ButtonLink from '../../Globals/ButtonLink';
import BasicInformation from './BasicInformation';
import LoginDetails from './LoginDetails';
import OtpVerification from './OtpVerification';
import RegistrationSuccessful from './RegistrationSuccessful';
import { useRouter, NextRouter } from 'next/router';

const FormWrapper: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [type, setType] = useState<string>('');

    const progress = useRef<HTMLDivElement>(null)
    const steps = progress.current?.querySelectorAll('.progress-step')

    useEffect(() => {
        steps?.forEach((step, index) => {
            if (index < page) {
                step.classList.remove('bg-[#E8ECEF]')
                step.classList.add('bg-primaryTwo')
            } else {
                step.classList.remove('bg-primaryTwo')
                step.classList.add('bg-[#E8ECEF]')
            }
        })
    }, [page, steps])

    const slider = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (page !== 4 && slider.current && steps) {
            slider.current.style.width = `${(page / (steps.length - 1) )* 100}%`
       }

    }, [page, slider.current, steps])

    const router: NextRouter = useRouter();

    useEffect(() => {
        if (router.pathname === '/register/corporate') {
            setType('corporate');
        } else {
            setType('individual');
        }
    }, [router.pathname])



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
      <>
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
        
        <div className="w-full mt-[40px] px-[49px] space-y-3">
                <h1 className='text-base tracking-[0.3px] text-center'>1/4</h1>
                <div
                    ref={progress}
                    className='progress-bar'
                >
                    <div ref={slider} className='block absolute top-[40%] h-[4px] bg-primaryTwo '></div>
                    <div className="progress-step w-[15px] h-[15px] rounded-full bg-[#E8ECEF] z-40"></div>
                    <div className="progress-step w-[15px] h-[15px] rounded-full bg-[#E8ECEF] z-40"></div>
                    <div className="progress-step w-[15px] h-[15px] rounded-full bg-[#E8ECEF] z-40"></div>
                    <div className="progress-step w-[15px] h-[15px] rounded-full bg-[#E8ECEF] z-40"></div>
                </div>
        </div>
      </>
  )
}

export default FormWrapper
import React, { useEffect, useRef, useState } from 'react'
import ButtonLink from '../../Globals/ButtonLink';
import BasicInformation from './BasicInformation';
import LoginDetails from './LoginDetails';
import OtpVerification from './OtpVerification';
import RegistrationSuccessful from './RegistrationSuccessful';
import { useRouter, NextRouter } from 'next/router';
import Manager from '../../../lib/encryption'
import { useDispatch } from 'react-redux';
import { manager, postRegister } from '../../../redux/features/register';

export type data = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    auth_type: string;
    referral_code: string;
    phone: string;
    phoneCode: string;
    occupation: string;
}


export type corporate = {
    email: string;
    password: string;
    date_of_incorporation: string;
    company_name: string;
    company_website: string;
    nature_of_business: string;
    auth_type: string;
    rc_number: string;
    referral_code: string;
    company_phone: string;
}

const dataInitialState = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    auth_type: 'password',
    referral_code: '',
    phone: '',
    phoneCode: '',
    occupation: 'Farmer',
}

const corporateInitialState = {
    email: '',
    password: '',
    date_of_incorporation: '',
    company_name: '',
    company_website: 'www.youtube.com',
    nature_of_business: '',
    auth_type: 'password',
    rc_number: "",
    referral_code: "",
    company_phone: "",
}




const FormWrapper: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [type, setType] = useState<string>('');
    const [data, setData] = useState<data>(dataInitialState);
    const [corporate, setCorporate] = useState<corporate>(corporateInitialState);

    const dispatch = useDispatch();

// Progress bar steps
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
    
// Progress bar sliders
    const slider = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (page !== 4 && slider.current && steps) {
            slider.current.style.width = `${(page / (steps.length - 1) )* 100}%`
       }

    }, [page, slider.current, steps])


    // scroll top

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

// Routing
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
            return <BasicInformation type={type} setPage={setPage} setData={setData} data={data}
                setCorporate={setCorporate} corporate={corporate} scrollToTop={scrollToTop} />
        } else if (page === 2) { 
            return <LoginDetails type={type} setPage={setPage} setData={setData} data={data}
                setCorporate={setCorporate} corporate={corporate} scrollToTop={scrollToTop} />
        } else if (page === 3) {
            return <OtpVerification type={type} setPage={setPage} corporate={corporate} data={data}   />
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
                <h1 className='text-base tracking-[0.3px] text-center'>{`${page}/4`}</h1>
                <div
                    ref={progress}
                    className='progress-bar'
                >
                    <div ref={slider} className='block absolute top-[40%] h-[4px] bg-primaryTwo z-30 '></div>
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
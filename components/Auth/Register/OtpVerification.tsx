import React, { useState } from 'react'
import { Formik, ErrorMessage, Form, Field, connect, getIn } from 'formik';
import * as yup from 'yup';
import TextButton from '../../Globals/TextButton';
import { useDispatch, useSelector } from 'react-redux';
import { postOTP, userData } from '../../../redux/features/register';
import Error from '../../Globals/Error';
import { errorState, errorType, setModalMessage, setModalState, setModalType } from '../../../redux/features/error';
import { corporate, data } from './FormWrapper';
import { getSession } from '../../../redux/features/session';

interface Props {
  type: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: data;
  corporate: corporate;
}



const OtpVerification: React.FC<Props> = ({type, setPage, data, corporate}) => {

  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  
  const dispatch = useDispatch();
  const state = useSelector(errorState)
  const typeError = useSelector(errorType)

  const handleVerifyOtp = () => { 
    
    
    dispatch(getSession()).then((res: any) => {
      if (res.payload.token) {
        dispatch(postOTP({ otp, token : res.payload.token })).then((res: any) => {
          if (res.payload.errors) {
            dispatch(setModalMessage(res.payload.errors))
            dispatch(setModalType("otp"))
            dispatch(setModalState(true))
          } else {
            setPage((prevPage) => prevPage + 1);
          }
        })
      }
    })
 

  }



  return (
    <>

      <form className="w-full space-y-5 !mt-[35px] ">
        <div className='space-y-2'>
          <label htmlFor="email" className="text-sm text-fontThree ">
            {
              type === "individual"
                ? `Enter the 4-digits code that was sent to ${data.phoneCode + data.phone} and ${data.email}`
                : `Enter the 4-digits code that was sent to ${corporate.email}`
            }
          </label>
          <input
            type="code"
            placeholder="Enter code"
            className='form-input'
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value)
            }}
          />
        </div>
      </form>
      
      {
        type === "individual"
          ? <h1 className='text-xs text-fontFour/80 cursor-pointer !mt-[17px] '> Resend code</h1>
          :
          <div className='w-full flex flex-col space-y-2 !mt-[17px]'>
              <h1 className='text-xs text-fontFour/80 cursor-pointer'> Resend code</h1>
              <h1 className='text-xs text-fontFour/80 cursor-pointer'>Verify via Phone Call</h1>
          </div>
      }

      <div>
        {
          state && typeError === "otp" && <Error />
        }
      </div>
    
      <div className="absolute w-full flex px-[56px] justify-between  bottom-[54px]">
        <TextButton
          onClick={() => {
            setPage((prevPage) => prevPage - 1);
          }}
          text="Back"
          color="text-fontTwo"
        />
        <TextButton
          onClick={handleVerifyOtp}
          text="finish"
          color="text-primaryTwo"
        />
      </div>

    </>
  )
}

export default OtpVerification
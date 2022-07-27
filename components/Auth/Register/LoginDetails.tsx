import React from 'react'
import { Formik, ErrorMessage, Form, Field, } from 'formik';
import * as yup from 'yup';
import TextButton from '../../Globals/TextButton';
import jsonData from '../../../data.json';
import Input from '../../Formik/Input';
import { corporate, data } from './FormWrapper';
import { useDispatch } from 'react-redux';
import { postRegister } from '../../../redux/features/register';
import { setModalMessage, setModalState, setModalType } from '../../../redux/features/error';
import { postCorporateRegister } from '../../../redux/features/corporateRegister';



const personSchema = yup.object().shape({
  password: yup.string().min(8).required('This field is required.'),
  confirmPassword: yup.string().required('This field is required.').oneOf([yup.ref('password'), null], 'Passwords must match'),
  phoneNumber: yup.string().required('This field is required.'),
})


const corporateSchema = yup.object().shape({
  email: yup.string().email('Email address is incorrect').required('This field is required.'),
  password: yup.string().min(8).required('This field is required.'),
  confirmPassword: yup.string().required('This field is required.').oneOf([yup.ref('password'), null], 'Passwords must match'),
})



interface IndividualValues {
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  phoneCode: string;
}

interface CorporateValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  type: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<data>>;
  data: data;
  setCorporate: React.Dispatch<React.SetStateAction<corporate>>;
  corporate: corporate;
  scrollToTop: () => void;
}

type formData = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  auth_type: string;
  referral_code: string;
  phone: string;
  phoneCode?: string;
  occupation: string;
}

const LoginDetails: React.FC<Props> = ({ type, setPage, setData, data, corporate, setCorporate, scrollToTop}) => {


  const dispatch = useDispatch();

  const telCodeArray = jsonData

  const initialIndividualValues: IndividualValues = {
    password: data.password,
    confirmPassword: "",
    phoneNumber: data.phone,
    phoneCode: data.phoneCode,
  };


  const initialCorporateValues: CorporateValues = {
    email: corporate.email,
    password: corporate.password,
    confirmPassword: ""
  };



  const handleRegister = async (formData: any) => {
    
    dispatch(postRegister(formData)).then((res: any) => {
      if (res.payload.responseCode === "106") {
        scrollToTop()
        setPage((prevPage) => prevPage + 1);
      } else {
        if (res.payload.errors && res.payload.message === 'Validation Error') {
          dispatch(setModalMessage(res.payload.errors.phone[0]))
          dispatch(setModalType("form"))
          dispatch(setModalState(true))
          setPage(1)
        } else {
          dispatch(setModalMessage(res.payload.message))
          dispatch(setModalType("form"))
          dispatch(setModalState(true))
          scrollToTop()
          setPage(1)
          
        }
      }
    })
  }


  const handleCorporateRegister = async (formData: any) => { 
    dispatch(postCorporateRegister(formData)).then((res: any) => {
      if (res.payload.responseCode === "106") {
        scrollToTop()
        setPage((prevPage) => prevPage + 1);
      } else {
        // if (res.payload.errors && res.payload.message === 'Validation Error') {
        //   dispatch(setModalMessage(res.payload.errors.phone[0]))
        //   dispatch(setModalType("form"))
        //   dispatch(setModalState(true))
        //   setPage(1)
        // } else {
        dispatch(setModalMessage(res.payload.message))
        dispatch(setModalType("form"))
        dispatch(setModalState(true))
        scrollToTop()
        setPage(1)
        
        // }
      }
    })
  }
  

  return (
    <>
      {
        type === "individual" &&
        <Formik
          initialValues={initialIndividualValues}
          validationSchema={personSchema}
          onSubmit={({password, phoneNumber, phoneCode}, actions) => {
            setData((data) => ({
              ...data,
              password,
              phone: phoneNumber,
              phoneCode
            }))

            let formData: formData =  { ...data }
            
            delete formData.phoneCode;

            handleRegister({ ...formData, password, phone: phoneCode + phoneNumber })
            actions.setSubmitting(false);

          }}
        >
          {({ errors, touched, handleSubmit, values, handleChange }) => (
            <Form className="w-full space-y-5 !mt-[52px] ">

              <Input
                label='Password'
                name='password'
                type="password"
                value={values.password}
                handleChange={handleChange}
                placeholder='Enter your password'
                errors={errors.password}
                touched={touched.password}
                />
                
              <Input
                label='Confirm Password'
                name='confirmPassword'
                type="password"
                value={values.confirmPassword}
                handleChange={handleChange}
                placeholder='Confirm Password'
                errors={errors.confirmPassword}
                touched={touched.confirmPassword}
                />



              <div className='space-y-2'>
                  <label htmlFor="phoneNumber" className="text-sm text-fontTwo ">Phone Number</label>
                  <div className='grid grid-cols-12 gap-[8px] items-center'>
                    <Field id="phoneCode" name="phoneCode" type="tel"
                      className={`form-input col-span-3`}
                      onChange={handleChange}
                      value={values.phoneCode}
                      as="select"
                      >                  
                      {
                        telCodeArray.countries.map((option, index) => (
                          <option key={option.name} value={option.code}>
                            {option.code}
                          </option>
                        ))
                      }
                    </Field>
                    
                    <Field id="phoneNumber" name="phoneNumber" type="tel"
                      className={`form-input col-span-9 ${errors.phoneNumber && touched.phoneNumber ? '!border-secondaryOne' : ''}`}
                      placeholder="Enter your phone number" />

                  </div>
                  <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="phoneNumber" component="div" />
              </div>

              <div className="w-full flex items-center justify-center !mt-[56px]">
                <TextButton
                  onClick={handleSubmit}
                  text="verify account"
                  color="text-primaryTwo"
                />
              </div>
            </Form>
          )}
        </Formik>
      }


      {
        type === "corporate" &&
        <Formik
          initialValues={initialCorporateValues}
          validationSchema={corporateSchema}
          onSubmit={({email, password}, actions) => {
            setCorporate((data) => ({
              ...data,
              email,
              password
            }))
            handleCorporateRegister({ ...corporate, company_phone: password, rc_number: password,  password, email })
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched, handleSubmit, values, handleChange }) => (
            <Form className="w-full space-y-5 !mt-[52px] ">
              
                <Input
                  label='Company Email'
                  name='email'
                  type="email"
                  value={values.email}
                  handleChange={handleChange}
                  placeholder='Enter Email'
                  errors={errors.email}
                  touched={touched.email}
                />

                <Input
                  label='Password'
                  name='password'
                  type="password"
                  value={values.password}
                  handleChange={handleChange}
                  placeholder='Enter your password'
                  errors={errors.password}
                  touched={touched.password}
                />

                <Input
                  label='Confirm Password'
                  name='confirmPassword'
                  type="password"
                  value={values.confirmPassword}
                  handleChange={handleChange}
                  placeholder='Confirm Password'
                  errors={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />


              <div className="w-full flex items-center justify-center !mt-[56px]">
                <TextButton
                  onClick={handleSubmit}
                  text="verify account"
                  color="text-primaryTwo"
                />
              </div>
            </Form>
          )}
        </Formik>
      }
      
    </>
  )
}

export default LoginDetails
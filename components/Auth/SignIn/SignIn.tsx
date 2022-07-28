import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../../Globals/Button'
import { useRouter, NextRouter } from 'next/router'
import { Formik, Form } from 'formik';
import Input from '../../Formik/Input';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { postSignIn } from '../../../redux/features/signin';
import { setModalMessage, setModalState, setModalType } from '../../../redux/features/error';



const personSchema = yup.object().shape({
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
    password: yup.string().required('This field is required.'),
    stayLoggedIn: yup.boolean().optional(),
})


interface Values {
    email: string;
    password: string;
}



export type data = {
    email: string;
    password: string;
    auth_type: string;
}


const initialState = {
    email: '',
    password: '',
    auth_type: 'password',
}

const SignIn : React.FC = () => {
    const [data, setData] = useState<data>(initialState);
    const [stay, setStay] = useState<boolean>(false);

    const initialValues: Values = {
        email: data.email,
        password: data.password,
    };

    const router: NextRouter = useRouter()
    const dispatch = useDispatch()


    const handleLoggin = (formData: data, stay: boolean) => { 
        console.log(formData, stay)

        dispatch(postSignIn({ formData, stay })).then((res : any) => {
            if(res.payload.responseCode === "100") {
                router.push('/dashboard/market/order-book')
            } else {
                dispatch(setModalMessage(res.payload.message))
                dispatch(setModalType("form"))
                dispatch(setModalState(true))
            }
        })
        
    }

  return (
      <div className='body-layout'>
          <div className='flex flex-col justify-center items-center space-y-2'>
              <h1 className="text-3xl text-fontOne">Sign In to ComX</h1>
              <h2 className="text-sm text-fontTwo">Enter your login credentials below. </h2>
          </div>
          {/* form */}

          <Formik
              initialValues={initialValues}
              validationSchema={personSchema}
              onSubmit={({ email, password }, actions) => {
                  setData((data) => ({
                      ...data,
                      email,
                    password
                  }))

                  handleLoggin({...data, email, password}, stay)
                  actions.setSubmitting(false);
              }}
          >
              {({ errors, touched, handleSubmit, values, handleChange }) => (
                  <Form className="w-full space-y-5 ">
                      <Input
                          label='Your Email'
                          name='email'
                          type="email"
                          value={values.email}
                          handleChange={handleChange}
                          placeholder='Enter your Email'
                          errors={errors.email}
                          touched={touched.email}
                      />
                      <Input
                          label='Your Password'
                          name='password'
                          type="password"
                          value={values.password}
                          handleChange={handleChange}
                          placeholder='********'
                          errors={errors.password}
                          touched={touched.password}
                      />

                      <div className='flex items-center justify-between !mb-10'>
                          <div className="flex items-center space-x-1">
                              <input
                                  type="checkbox"
                                  id="stay"
                                  name="stay"
                                  onChange={() => setStay(!stay)}
                                  className="!p-3" />
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
                              handleSubmit()
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
                      
                  </Form>
              )}
          </Formik>
    </div>
  )
}

export default SignIn
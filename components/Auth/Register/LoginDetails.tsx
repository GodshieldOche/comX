import React from 'react'
import { Formik, ErrorMessage, Form, Field, } from 'formik';
import * as yup from 'yup';
import TextButton from '../../Globals/TextButton';



const personSchema = yup.object().shape({
  password: yup.string().required('This field is required.'),
  confirmPassword: yup.string().required('This field is required.').oneOf([yup.ref('password'), null], 'Passwords must match'),
  phoneNumber: yup.string().required('This field is required.'),
})


const corporateSchema = yup.object().shape({
  email: yup.string().email('Email address is incorrect').required('This field is required.'),
  password: yup.string().required('This field is required.'),
  confirmPassword: yup.string().required('This field is required.').oneOf([yup.ref('password'), null], 'Passwords must match'),
})



interface IndividualValues {
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

interface CorporateValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  type: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoginDetails: React.FC<Props> = ({type, setPage}) => {

  const initialIndividualValues: IndividualValues = {
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  };


  const initialCorporateValues: CorporateValues = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  return (
    <>
      {
        type === "individual" &&
        <Formik
          initialValues={initialIndividualValues}
          validationSchema={personSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-full space-y-5 !mt-[52px] ">

              <div className='space-y-2'>
                <label htmlFor="password" className="text-sm text-fontTwo ">Password</label>
                <Field id="password" name="password" type="password"
                  className={`form-input ${errors.password && touched.password ? '!border-secondaryOne' : ''}`}
                  placeholder="Enter your password" />
                <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="password" component="div" />
              </div>

              <div className='space-y-2'>
                <label htmlFor="confirmPassword" className="text-sm text-fontTwo ">Confirm Password</label>
                <Field id="confirmPassword" name="confirmPassword" type="password"
                  className={`form-input ${errors.confirmPassword && touched.confirmPassword ? '!border-secondaryOne' : ''}`}
                  placeholder="Confirm Password" />
                <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="confirmPassword" component="div" />
              </div>

              <div className='space-y-2'>
                <label htmlFor="phoneNumber" className="text-sm text-fontTwo ">Phone Number</label>
                <Field id="phoneNumber" name="phoneNumber" type="tel"
                  className={`form-input ${errors.phoneNumber && touched.phoneNumber ? '!border-secondaryOne' : ''}`}
                  placeholder="Enter your phone number" />
                <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="phoneNumber" component="div" />
              </div>

              <div className="w-full flex items-center justify-center !mt-[56px]">
                <TextButton
                  onClick={() => {
                    setPage((prevPage) => prevPage + 1);
                  }}
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
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-full space-y-5 !mt-[52px] ">

              <div className='space-y-2'>
                <label htmlFor="email" className="text-sm text-fontTwo ">Company Email</label>
                <Field id="email" name="email" type="email"
                  className={`form-input ${errors.email && touched.email ? '!border-secondaryOne' : ''}`}
                  placeholder="Enter Email" />
                <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="email" component="div" />
              </div>

              <div className='space-y-2'>
                <label htmlFor="password" className="text-sm text-fontTwo ">Password</label>
                <Field id="password" name="password" type="password"
                  className={`form-input ${errors.password && touched.password ? '!border-secondaryOne' : ''}`}
                  placeholder="Enter your password" />
                <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="password" component="div" />
              </div>

              <div className='space-y-2'>
                <label htmlFor="confirmPassword" className="text-sm text-fontTwo ">Confirm Password</label>
                <Field id="confirmPassword" name="confirmPassword" type="password"
                  className={`form-input ${errors.confirmPassword && touched.confirmPassword ? '!border-secondaryOne' : ''}`}
                  placeholder="Confirm Password" />
                <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="confirmPassword" component="div" />
              </div>

              <div className="w-full flex items-center justify-center !mt-[56px]">
                <TextButton
                  onClick={() => {
                    setPage((prevPage) => prevPage + 1);
                  }}
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
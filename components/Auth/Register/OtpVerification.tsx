import React from 'react'
import { Formik, ErrorMessage, Form, Field, } from 'formik';
import * as yup from 'yup';
import TextButton from '../../Globals/TextButton';


const codeSchema = yup.object().shape({
  code: yup.string().min(4).max(4).required('This field is required.'),
})

// const corporateSchema = yup.object().shape({
//   code: yup.string().min(4).max(4).required('This field is required.'),
// })


interface CodeValue {
  code: string;
}

// interface CorporateValues {
//   code: string;
// }


interface Props {
  type: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const OtpVerification: React.FC<Props> = ({type, setPage}) => {

  const intialValue: CodeValue = {
    code: '',
  };


  return (
    <>
      <Formik
        initialValues={intialValue}
        validationSchema={codeSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full space-y-5 !mt-[35px] ">

            <div className='space-y-2'>
              <label htmlFor="code" className="text-sm text-fontTwo ">Enter 4-digit code that was sent to name@mymail.com</label>
              <Field id="code" name="code" type="code"
                className={`form-input ${errors.code && touched.code ? '!border-secondaryOne' : ''}`}
                placeholder="Enter code" />
              <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="code" component="div" />
            </div>

          </Form>
        )}
      </Formik>

      {
        type === "corporate"
          ? <h1 className='text-xs text-fontFour/80 cursor-pointer !mt-[17px] '> Resend code</h1>
          :
          <div className='w-full flex flex-col space-y-2 !mt-[17px]'>
              <h1 className='text-xs text-fontFour/80 cursor-pointer'> Resend code</h1>
              <h1 className='text-xs text-fontFour/80 cursor-pointer'>Verify via Phone Call</h1>
          </div>
      }

      <div className="absolute w-full flex px-[56px] justify-between  bottom-[54px]">
        <TextButton
          onClick={() => {
            setPage((prevPage) => prevPage - 1);
          }}
          text="Back"
          color="text-fontTwo"
        />
        <TextButton
          onClick={() => {
            setPage((prevPage) => prevPage + 1);
          }}
          text="finish"
          color="text-primaryTwo"
        />
      </div>

    </>
  )
}

export default OtpVerification
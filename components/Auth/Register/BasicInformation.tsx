import React from 'react'
import { Formik, ErrorMessage, Form, Field,} from 'formik';
import * as yup from 'yup';
import TextButton from '../../Globals/TextButton';


const personSchema = yup.object().shape({
    firstName: yup.string().required('This field is required.'),
    lastName: yup.string().required('This field is required.'),
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
})

const companySchema = yup.object().shape({
    companyName: yup.string().required('This field is required.'),
    businessType: yup.string().required('This field is required.'),
    dateOfIncorporation: yup.string().required('This field is required.'),

})



interface IndividualValues {
    firstName: string;
    lastName: string;
    email: string;
}

interface CorporateValues {
    companyName: string;
    businessType: string;
    dateOfIncorporation: string;
}

interface Props {
    type: string;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const BasicInformation: React.FC<Props> = ({type, setPage}) => {

    const initialIndividualValues: IndividualValues = {
        firstName: '',
        lastName: '',
        email: ''
    };

    const initialCorporateValues: CorporateValues = {
        companyName: '',
        businessType: '',
        dateOfIncorporation: ''
    };

  return (
      <div className="w-full h-full">
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
                      <Form className="w-full space-y-5 ">
                          <div className="grid w-full grid-cols-2 gap-4">
                              <div className='space-y-2'>
                                  <label htmlFor="firstName" className="text-sm text-fontTwo ">Your First Name</label>
                                  <Field id="firstName" name="firstName"
                                      className={`form-input ${errors.firstName && touched.firstName ? '!border-secondaryOne' : ''}`}
                                      placeholder="Enter your First Name" />
                                  <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="firstName" component="div" />
                              </div>
                              <div className='space-y-2'>
                                  <label htmlFor="lastName" className="text-sm text-fontTwo ">Your Last Name</label>
                                  <Field id="lastName" name="lastName"
                                      className={`form-input ${errors.lastName && touched.lastName ? '!border-secondaryOne' : ''}`}
                                      placeholder="Enter your Last Name" />
                                  <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="lastName" component="div" />
                              </div>
                          </div>
                          
                            <div className='space-y-2'>
                                <label htmlFor="email" className="text-sm text-fontTwo ">Your Email</label>
                                <Field id="email" name="email"
                                    className={`form-input ${errors.email && touched.email ? '!border-secondaryOne' : ''}`}
                                    placeholder="Enter your Email" />
                                <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="email" component="div" />
                            </div>

                              <div className="w-full flex items-center justify-center !mt-[56px]">
                                  <TextButton
                                      onClick={() => {
                                          setPage((prevPage) => prevPage + 1);
                                      }}
                                      text="Next Step"
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
                  validationSchema={companySchema}
                  onSubmit={(values, actions) => {
                      console.log({ values, actions });
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                  }}
              >
                  {({ errors, touched }) => (
                      <Form className="w-full space-y-5 ">
                          
                          <div className='space-y-2'>
                              <label htmlFor="companyName" className="text-sm text-fontTwo ">Company Name</label>
                              <Field id="companyName" name="companyName"
                                  className={`form-input ${errors.companyName && touched.companyName ? '!border-secondaryOne' : ''}`}
                                  placeholder="Enter Company Name" />
                              <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="companyName" component="div" />
                          </div>
                          
                          <div className="grid w-full grid-cols-2 gap-4">
                              <div className='space-y-2'>
                                  <label htmlFor="businessType" className="text-sm text-fontTwo ">Type of Business</label>
                                  <Field id="businessType" name="businessType"
                                      className={`form-input ${errors.businessType && touched.businessType ? '!border-secondaryOne' : ''}`}
                                      placeholder="Select Type of Business" />
                                  <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="businessType" component="div" />
                              </div>
                              <div className='space-y-2'>
                                  <label htmlFor="dateOfIncorporation" className="text-sm text-fontTwo ">Date of Incorporation</label>
                                  <Field id="dateOfIncorporation" name="dateOfIncorporation"
                                      className={`form-input ${errors.dateOfIncorporation && touched.dateOfIncorporation ? '!border-secondaryOne' : ''}`}
                                      placeholder="Select Date" />
                                  <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name="dateOfIncorporation" component="div" />
                              </div>
                          </div>


                          <div className="w-full flex items-center justify-center !mt-[56px]">
                              <TextButton 
                                      onClick={() => {
                                        setPage((prevPage) => prevPage + 1);
                                      }}
                                      text="Next Step"
                                      color="text-primaryTwo"
                                  />
                          </div>
                      </Form>
                  )}
              </Formik>
            }
          
      </div>
  )
}

export default BasicInformation
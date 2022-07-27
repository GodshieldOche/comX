import React, { useEffect } from 'react'
import { Formik, ErrorMessage, Form, Field,} from 'formik';
import * as yup from 'yup';
import TextButton from '../../Globals/TextButton';
import Input from '../../Formik/Input';
import { corporate, data } from './FormWrapper';
import Select from '../../Formik/Select';
import Date from '../../Formik/Date';


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
    setData: React.Dispatch<React.SetStateAction<data>>;
    data: data;
    setCorporate: React.Dispatch<React.SetStateAction<corporate>>;
    corporate: corporate;
    scrollToTop: () => void;
}

const BasicInformation: React.FC<Props> = ({ type, setPage, setData, data, corporate, setCorporate, scrollToTop}) => {

    const businessOptions = [
        {name: "Select Type of Business", code: ""},
        {name: "Farming", code: "Farming"},
        {name: "Tailor", code: "Tailor"},
    ]

    const initialIndividualValues: IndividualValues = {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email
    };

    const initialCorporateValues: CorporateValues = {
        companyName: corporate.company_name,
        businessType: corporate.nature_of_business,
        dateOfIncorporation: corporate.date_of_incorporation
    };

  return (
      <div className="w-full h-full">
          {
              type === "individual" &&
              <Formik
                  initialValues={initialIndividualValues}
                  validationSchema={personSchema}
                  onSubmit={({email, firstName, lastName}, actions) => {
                      setData((data) => ({
                          ...data,
                          email,
                          first_name: firstName,
                          last_name: lastName
                      }))
                      scrollToTop()
                      setPage((prevPage) => prevPage + 1);
                      actions.setSubmitting(false);
                  }}
              >
                      {({ errors, touched, handleSubmit, values, handleChange }) => (
                      <Form className="w-full space-y-5 ">
                        <div className="grid w-full grid-cols-2 gap-4">
                            <Input
                                label='Your First Name'
                                name='firstName'
                                type="text"
                                value={values.firstName}
                                handleChange={handleChange}
                                placeholder='Enter your First Name'
                                errors={errors.firstName}
                                touched={touched.firstName}
                            />
                            <Input
                                label='Your Last Name'
                                name='lastName'
                                type="text"
                                value={values.lastName}
                                handleChange={handleChange}
                                placeholder='Enter your Last Name'
                                errors={errors.lastName}
                                touched={touched.lastName}
                            />
                        </div>
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
                          

                        <div className="w-full flex items-center justify-center !mt-[56px]">
                            <TextButton
                                onClick={handleSubmit}
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
                  onSubmit={({businessType, companyName, dateOfIncorporation}, actions) => {
                      setCorporate((data) => ({
                          ...data,
                          nature_of_business: businessType,
                          company_name: companyName,
                          date_of_incorporation: dateOfIncorporation
                      }))
                      scrollToTop()
                      setPage((prevPage) => prevPage + 1);
                      actions.setSubmitting(false);
                  }}
              >
                      {({ errors, touched, values, handleChange, handleSubmit }) => (
                      <Form className="w-full space-y-5 ">
                          
                        <Input
                            label='Company Name'
                            name='companyName'
                            type="type"
                            value={values.companyName}
                            handleChange={handleChange}
                            placeholder='Enter your Company Name'
                            errors={errors.companyName}
                            touched={touched.companyName}
                        />
                        
                          
                        <div className="grid w-full grid-cols-2 gap-2">
                            <Select
                                label='Type of Business'
                                name='businessType'
                                value={values.businessType}
                                handleChange={handleChange}
                                errors={errors.businessType}
                                touched={touched.businessType}
                                options={businessOptions}
                            />

                            <Date 
                                label='Date of Incorporation'
                                name='dateOfIncorporation'
                                type="date"
                                value={values.dateOfIncorporation}
                                handleChange={handleChange}
                                placeholder='Select Date'
                                errors={errors.dateOfIncorporation}
                                touched={touched.dateOfIncorporation}
                            />
                                  
                          </div>


                          <div className="w-full flex items-center justify-center !mt-[56px]">
                              <TextButton 
                                      onClick={handleSubmit}
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
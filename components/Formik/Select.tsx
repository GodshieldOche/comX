import { ErrorMessage, Field } from 'formik';
import React from 'react'

interface Props {
    label: string;
    name: string;
    value: string;
    handleChange: any;
    errors: any;
    touched: any;
    options: {name: string, code: string}[];
}

const Select: React.FC<Props> = ({ label, name, errors, touched, value, options, handleChange }) => {
  return (
      <div className='space-y-2'>
          <label htmlFor={name} className="text-sm text-fontTwo ">{label}</label>
          <Field id={name} name={name} className={`form-input  w-full ${errors && touched ? '!border-secondaryOne' : ''}`}
              as="select"
              value={value}
              onChange={handleChange}
          >
              {
                  options.map((option, index) => (
                      <option key={option.code} value={option.code}>
                          {option.name}
                      </option>
                  ))
              }
          </Field>
          <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name={name} component="div" />
      </div>
  )
}

export default Select
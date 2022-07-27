import { ErrorMessage, Field } from 'formik'
import React from 'react'

interface Props {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    type: string;
    handleChange: any;
    errors: any;
    touched: any;
}

const Input: React.FC<Props> = ({ label, name, placeholder, errors, type, touched, value, handleChange}) => {
  return (
      <div className='space-y-2' >
          <label htmlFor={name} className="text-sm text-fontTwo ">{label}</label>
          <Field id={name} name={name} type={type} value={value}
              className={`form-input ${errors && touched ? '!border-secondaryOne' : ''}`}
              onChange={handleChange}
              autoComplete="on"
              placeholder={placeholder} />
          <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name={name} component="div" />
      </div>
  )
}

export default Input
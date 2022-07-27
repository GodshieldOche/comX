import { ErrorMessage, Field } from 'formik';
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

const Date: React.FC<Props> = ({ label, name, placeholder, errors, type, touched, value, handleChange }) => {
  return (
      <div className='space-y-2'>
          <label htmlFor={name} className="text-sm text-fontTwo ">{label}</label>
          <Field type={type}
              id={name} name={name}
              value={value}
              onChange={handleChange}
              className={`form-input ${errors && touched ? '!border-secondaryOne' : ''}`}
              placeholder={placeholder} />
          <ErrorMessage className="text-[10px] font-medium text-secondaryOne" name={name} component="div" />
      </div>
  )
}

export default Date
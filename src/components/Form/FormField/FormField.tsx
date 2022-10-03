// Native Imports
import React from 'react';

// Supporting Imports
import {useFormikContext} from 'formik';

// Styles Import
// import styles from './FormFieldStyles';
import {InputProps} from '../../Common/Input/Input';

import {Input} from '@Components';

export interface FormFieldProps extends InputProps {
  name: string;
}

const FormField = (props: FormFieldProps) => {
  const {setFieldTouched, touched, handleChange, errors, values} =
    useFormikContext();
  const {name} = props;
  // console.log('Touched', touched[name], errors[name]);

  return (
    <Input
      {...props}
      onBlur={() => {
        setFieldTouched(name);
      }}
      onChangeText={handleChange(name)}
      // @ts-ignore
      value={values[name]}
      // @ts-ignore
      errorMessage={errors[name]}
      // @ts-ignore
      errorVisibility={touched[name]}
    />
  );
};

export default FormField;

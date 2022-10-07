// Native Imports
import React from 'react';

// Supporting Imports
import {useFormikContext} from 'formik';

// Styles Import
import {ButtonProps} from '../../Common/Button/Button';

import {Button} from '@Components';

export interface SubmitButtonProps extends ButtonProps {
  // name: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const {handleSubmit} = useFormikContext();
  const {name} = props;

  return <Button name={name} onPress={handleSubmit} />;
};

export default SubmitButton;

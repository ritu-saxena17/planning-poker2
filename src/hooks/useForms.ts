import React from 'react';
import { useGlobalContext } from '../context/AppContext';

type ErrorType = {
  name?: string,
  spectator?: Boolean
}

const useForm = () => {
  // Errors
  const [errors, setErrors] = React.useState<ErrorType>({});
  const { values, setValues } = useGlobalContext()
  const onChange = (key: string, value: string | Boolean) => {
    setValues({ ...values, [key]: value });
  };

  const validate = (key: string) => {
    switch (key) {
      case 'name':
        if (values.name.length < 1)
          setErrors({ ...values, name: 'Error' })
        else {
          delete errors.name
        }
        break
      default:
        break
    }

  }
  return {
    values,
    onChange,
    validate,
    errors
  }
};

export { useForm };

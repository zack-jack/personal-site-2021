import React, { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';
import { stringToCamel } from '../utils/stringManipulations';

interface InputTextAreaProps {
  error: string;
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  className?: string;
}

const InputTextArea = ({
  error,
  id,
  label,
  placeholder,
  register,
  className = '',
}: InputTextAreaProps): ReactElement => (
  <div
    className={classNames('c-input-wrapper', { [`${className}`]: className })}
  >
    <label htmlFor={id} className="c-input-label">
      {label}
    </label>
    <textarea
      id={id}
      aria-describedby={`${id}-error`}
      data-testid={id}
      placeholder={placeholder}
      className={classNames('c-input-textarea__field c-input-field mt-3', {
        'c-input-field--error': !!error,
      })}
      {...register(stringToCamel(label))}
    />
    <p
      id={`${id}-error`}
      data-testid={`${id}-error`}
      className="c-input-error mt-2"
    >
      {error}
    </p>
  </div>
);

export default InputTextArea;

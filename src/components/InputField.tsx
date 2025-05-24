import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, ...rest }) => {
  return (
    <div className="animated-border">
      <div className="flex flex-col">
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
        <input
          id={id}
          className="input-field"
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputField;
import React, {FC, ChangeEvent} from "react";

interface IInputProps {
  className?: string;
  type?: string;
  title?: string;
  placeholder?: string;
  value?: string;
  htmlFor?: string;
  label?: string;
  id?: string;
  onChange?: (event:ChangeEvent<HTMLInputElement>) => void;
}

const Input:FC<IInputProps> = ({
  className,
  type = 'text',
  title,
  placeholder,
  value,
  htmlFor,
  label,
  id,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor}
      className={className}>
        {label}
      </label>
      <input
        className={`input ${className}`}
        type={type}
        title={title}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
import React, { useState } from "react";

interface ICheckboxProps {
  label: string;
  inputStyle?: string;
  labelStyle?: string;
  containerStyle?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  inputStyle,
  labelStyle,
  containerStyle,
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const CheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div className={containerStyle}>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <input
        className={inputStyle}
        type="checkbox"
        id={label}
        checked={isChecked}
        onChange={CheckboxHandler}
      />
    </div>
  );
};

export default Checkbox;

import React, {FC, ChangeEvent} from "react";

interface IInputProps {
  //inputStyle?: string;
  labelStyle?: string;
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
  labelStyle,
  //inputStyle,
  type = 'text',
  title,
  placeholder,
  //value,
  //htmlFor,
  label,
  //id,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor='textInputID'
      className={labelStyle}>
        {label}
      </label>
      <input
        className='w-[531px] h-[74px] border px-[9px] pt-[10px] pb-[11px] bg-[#141516] focus:border-[#078DEE] disabled:bg-[#3f4043] rounded-md'
        type={type}
        title={title}
        placeholder={placeholder}
        //value={value}
        id='textInputID'
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
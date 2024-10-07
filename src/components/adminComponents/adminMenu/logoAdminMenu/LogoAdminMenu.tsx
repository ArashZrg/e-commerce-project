import { MouseEventHandler } from "react";

interface IHandelClick{
    handelClick:MouseEventHandler
    isChecked:boolean
}
const LogoAdminMenu:React.FC<IHandelClick> = ({handelClick,isChecked}) => {
  return (
    <label >
      
      <div className="w-16 h-14  bg-base-side cursor-pointer flex flex-col items-center justify-center">
        <input className="hidden peer" type="checkbox" onClick={handelClick} checked={isChecked}/>
        <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.85rem]  peer-checked:rotate-[-45deg]"  />
        <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
        <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.85rem] peer-checked:rotate-[45deg]" />
      </div>
    </label>
  );
};

export default LogoAdminMenu;

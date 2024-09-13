interface IButtonProps {
  onClick?: () => void;
  children: string;
  //className?: string;
}

const Button:React.FC<IButtonProps> = ({onClick, children}) => {
  return (
    <button onClick={onClick} className='w-[135px] h-[48px] rounded-3xl bg-[#DB2777] hover:bg-[#831747] text-center content-center py-[8px] px-[32px]'>{children}</button>
  )
}

export default Button;
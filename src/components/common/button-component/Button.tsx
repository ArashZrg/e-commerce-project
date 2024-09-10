interface IButtonProps {
  onClick?: () => void;
  children: string;
  className?: string;
}

const Button:React.FC<IButtonProps> = ({onClick, children, className}) => {
  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}

export default Button;
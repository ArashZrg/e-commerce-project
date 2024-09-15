interface IButtonProps {
  onClick?: () => void;
  children: string;
  className: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;

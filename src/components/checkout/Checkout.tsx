import { ReactNode } from "react";

interface ICheckoutProps {
  children: ReactNode;
}
const Checkout = ({ children }: ICheckoutProps) => {
  return (
    <div className="w-full flex justify-center items-start bg-purple-600 h-full p-12">
      {children}
    </div>
  );
};

export default Checkout;

import CardInfo from "./cardInfo/CardInfo";
import Button from "../../common/button/Button";

const Cart = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[90%] h-[48.4rem] gap-[3.2rem] flex flex-col">
        <div className="p-6  w-full flex flex-col gap-5 h-[60%] overflow-auto">
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
        <div className=" w-[50%] h-[40%] flex flex-col justify-between">
          <p className="text-[2rem] font-medium font-Iran-Yekan text-text-primary dark:text-dark-text-primary">
            تعداد (3)
          </p>
          <p className="font-Iran-Yekan text-text-primary dark:text-dark-text-primary text-[2.4rem]">
            10،000تومان
          </p>
          <Button className="bg-primary-main rounded-full text-text-button font-bold text-[2rem] py-3">
            تکمیل خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

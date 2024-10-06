import Button from "../button/Button";

interface IStatusProps {
  isNeedButton: boolean;
  information: IInformation;
  status: string;
}

interface IInformation {
  _id: string;
  name: string;
  email: string;
  address: string;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

const Status = ({ isNeedButton, information, status }: IStatusProps) => {
  const infoItems = [
    { label: "شماره سفارش", value: information._id },
    { label: "نام", value: information.name },
    { label: "ایمیل", value: information.email },
    { label: "آدرس", value: information.address },
    { label: "روش پرداخت", value: "درگاه پرداخت پاسارگاد" },
  ];

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} تومان`;
  };

  const summaryItems = [
    {
      label: "قمیت محصولات",
      value: formatPrice(
        information.totalPrice -
          (information.shippingPrice + information.taxPrice)
      ),
    },
    { label: "هزینه ارسال", value: formatPrice(information.shippingPrice) },
    { label: "مالیات", value: formatPrice(information.taxPrice) },
    { label: "مبلغ نهایی", value: formatPrice(information.totalPrice) },
  ];

  const textStyle = "text-[1.6rem] font-normal text-text-primary py-2";
  const boldTextStyle = "text-[1.6rem] font-bold text-text-secondary py-2";

  return (
    <div className="w-[35%] h-[90%] font-Iran-Yekan">
      <p className="font-medium text-[2rem]">آدرس دریافت</p>
      <div className="text-primary-main font-bold text-[1.6rem] flex flex-col gap-4 my-4">
        {infoItems.map(({ label, value }) => (
          <p key={label}>
            {label} : <span className={textStyle}>{value}</span>
          </p>
        ))}
      </div>
      <div className="text-[1.6rem] font-bold text-text-primary w-full bg-base-card rounded-md pr-4 py-3">
        {status}
      </div>
      <p className="font-medium text-[2rem] my-4">خلاصه خرید</p>
      {summaryItems.map(({ label, value }) => (
        <div key={label} className="flex justify-between items-center w-full">
          <p className={boldTextStyle}>{label} :</p>
          <p className={textStyle}>{value}</p>
        </div>
      ))}
      {isNeedButton ? (
        <Button className="bg-primary-main text-text-button text-center w-full rounded-full py-[0.8rem] px-[3.2rem] font-medium text-[2rem]">
          پرداخت
        </Button>
      ) : null}
    </div>
  );
};

export default Status;

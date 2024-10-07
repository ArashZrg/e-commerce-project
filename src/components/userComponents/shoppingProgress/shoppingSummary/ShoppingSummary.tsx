import Table from "../../../common/table/Table";
import Button from "../../../common/button/Button";
import orderService from "../../../../services/orderService";
import { useEffect, useState } from "react";
import { useAddressInfoStore } from "../../../../stores/shoppingProgressStore";
import productService from "../../../../services/productService";
import {
  IAddressInfoStore,
  IItems,
  IShippingAddress,
  IOrderItems,
} from "../../../../types/orderTypes";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CartStore from "../../../../stores/cartStore";

const ShoppingSummary = () => {
  const headers = ["عکس", "نام محصول", "تعداد", "قیمت", "قیمت نهایی"];
  const navigate = useNavigate();
  const { cartItems } = CartStore();
  console.log("cartItems in shopping", cartItems);
  const [Items, setItems] = useState<IItems[]>([]);
  const [orderItems, setorderItems] = useState<IOrderItems[]>([]);
  const [travelPay] = useState(10000);
  const calcSummaryItems = () => {
    const total = Items.map((item) => item.قیمت * item.تعداد).reduce(
      (acc, cur) => acc + cur,
      0
    );

    return total;
  };
  const SummaryPrice = calcSummaryItems();
  const calcSummary = {
    SummaryPrice,
    tax: SummaryPrice * 0.1,
    totalPrice: SummaryPrice + travelPay + SummaryPrice * 0.1,
  };

  const summaryItems = [
    { label: "قیمت محصولات", value: `${calcSummary.SummaryPrice} تومان` },
    { label: "هزینه ارسال", value: `${travelPay} تومان` },
    { label: "مالیات", value: `${calcSummary.tax} تومان` },
    { label: "مبلغ نهایی", value: `${calcSummary.totalPrice} تومان` },
  ];
  const { address, city, postalCode, paymentMethod }: IAddressInfoStore =
    useAddressInfoStore();
  const [shippingAddress] = useState<IShippingAddress>({
    city,
    address,
    postalCode,
  });
  const getProducts = async (id: string) => {
    const prouduct = await productService.getProduct(id);
    return prouduct;
  };

  const getorederlist = async () => {
    try {
      const products = await Promise.all(
        cartItems.map((id) => getProducts(id))
      );
      const items = products.map((product) => ({
        عکس: product.image,
        "نام محصول": product.name,
        تعداد: 1,
        قیمت: product.price,
        "قیمت نهایی": product.price * 1,
      }));
      // "قیمت نهایی": product.price * product.quantity,
      // تعداد: product.quantity,
      const orderItems = products.map((product) => ({
        name: product.name,
        // qty: product.quantity,
        qty: 1,
        _id: product._id,
      }));
      setItems(items);
      setorderItems(orderItems);
    } catch (error) {
      toast.error(`لطفا مجدد تلاش کنید! : ${error}`);
    }
  };
  const createOrder = async () => {
    try {
      const order = await orderService.createOrder(
        orderItems,
        paymentMethod,
        shippingAddress
      );
      navigate(`/checkout/${order._id}`);
      toast.success("سفارش شما با موفقیت ثبت شد");
    } catch (error) {
      toast.error("لطفا مجدد تلاش کنید! ");
      console.error(error);
    }
  };

  const infoItems = [
    { label: "روش پرداخت", value: paymentMethod },
    {
      label: "آدرس دریافت",
      value: `${shippingAddress.city} ${shippingAddress.address} ${shippingAddress.postalCode}`,
    },
  ];
  useEffect(() => {
    getorederlist();
  }, [cartItems]);

  useEffect(() => {
    getorederlist();
  }, []);

  return (
    <>
      <Toaster />
      <div className=" w-full h-full flex justify-center items-center">
        <div className=" w-full flex flex-col justify-center items-center gap-20">
          <div className=" w-5/6  gap-16 flex flex-col ">
            <Table
              optionalWidth="w-full"
              optionalHeight="h-fit"
              items={Items}
              headers={headers}
            />
            <div className=" h-[30rem] gap-8 w-full flex flex-col justify-between items-center">
              <p className="w-full h-12  text-[2.4rem] leading-10  font-medium">
                خلاصه خرید
              </p>
              <div className="bg-base-side w-full  flex flex-row justify-between items-center p-12 rounded-xl">
                {infoItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col h-28 gap-6 justify-center items-start w-1/4"
                  >
                    <p className="h-12  text-[2.4rem] leading-10  font-medium">
                      {item.label}
                    </p>
                    <span className="text-text-secondary text-[1.6rem] font-bold">
                      {item.label.split(" ")[0]}:
                      <span className="text-text-primary text-[1.6rem] font-normal">
                        {item.value}
                      </span>
                    </span>
                  </div>
                ))}

                <div className="flex flex-col justify-between items-center gap-2">
                  {summaryItems.map(({ label, value }) => (
                    <div
                      className="w-full flex flex-row justify-between items-start  text-[1.6rem] leading-10 h-10"
                      key={label}
                    >
                      <p className="text-text-secondary font-bold">{label} :</p>
                      <p className="text-text-primary font-normal">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={createOrder}
                className="bg-primary-main rounded-2xl font-bold py-3 px-12 h-20 w-full leading-10 text-text-button text-[2rem]"
              >
                ثبت سفارش
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingSummary;

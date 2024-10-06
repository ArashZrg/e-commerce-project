import { useEffect, useState } from "react";
import Table from "../../common/table/Table";
import orderService from "../../../services/orderService";
import { IUserOrderResponse } from "../../../types/orderTypes";
import { IAdminOrderResponse } from "../../../types/orderTypes";
import { isAdmin } from "../../../stores/adminStore";
import photo from "./iphone-14-pro-model-unselect-gallery-1-202209.png"

interface IOrders {
  [index: string]: string | number | boolean | JSX.Element;
}

const headers = [
  "عکس", 
  "نام محصول", 
  "تاریخ", 
  ...(isAdmin() ? ["کاربر"] : []), 
  "قیمت نهایی", 
  "پرداخت", 
  "ارسال", 
  "عملیات"
];

const Orders : React.FC = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    fetchOrders()
  },[])

  async function fetchOrders () {
    let newOrder: IOrders[];

    if (isAdmin()) {
      const response = await orderService.getAllOrdersAdmin();
          newOrder = response.map((order: IAdminOrderResponse) => 
            order.orderItems.map((item) => ({
              "عکس": item.image ? item.image : photo, 
              "نام محصول": item.name,
              "تاریخ": new Date(order.createdAt).toLocaleDateString('fa-IR'),
              "کاربر": order.user ? order.user.username : "Marzi",
              "قیمت نهایی": order.totalPrice.toLocaleString('fa-IR'),
              "پرداخت": order.isPaid ? "پرداخت شده" : "پرداخت نشده",
              "ارسال": order.isDelivered ? "ارسال شده" : "ارسال نشده",
              "عملیات": "جزئیات",
              "orderId": order._id,
            }))
          ).flat(); 
    } else {
      const response = await orderService.getAllOrdersMine();
          newOrder= response.map((order: IUserOrderResponse) => 
            order.orderItems.map((item) => ({
              "عکس": item.image ? item.image : photo,
              "نام محصول": item.name,
              "تاریخ": new Date(order.createdAt).toLocaleDateString('fa-IR'),
              "قیمت نهایی": order.totalPrice.toLocaleString('fa-IR'),
              "پرداخت": order.isPaid ? "پرداخت شده" : "پرداخت نشده",
              "ارسال": order.isDelivered ? "ارسال شده" : "ارسال نشده",
              "عملیات": "جزئیات",
              "orderId": order._id,
            }))
          ).flat();
    }        

        setOrders(newOrder)
  }

  return (
    <div className="min-h-screen pt-24 px-8">
      <Table optionalWidth="w-full" items={orders} headers={headers} />
    </div>
  )
}

export default Orders
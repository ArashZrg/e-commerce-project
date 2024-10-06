import CardInfo from "./cardInfo/CardInfo";
import Button from "../../common/button/Button";
import CartStore from "../../../stores/cartStore";
import { useEffect, useState } from "react";
import productService from "../../../services/productService";
interface Product {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: {
    _id: string;
    name: string;
    __v: number;
  };
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Review {
  name: string;
  rating: number;
  comment: string;
  user: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const cartItems = CartStore((state) => state.cartItems);

  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await Promise.all(
        cartItems.map((productId) => productService.getProduct(productId))
      );
      setProducts(productData);
    };

    if (cartItems.length > 0) {
      fetchProductData();
    } else {
      setProducts([]);
    }
  }, [cartItems]);

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[90%] h-[48.4rem] gap-[3.2rem] flex flex-col">
        <div className="p-6 w-full flex flex-col gap-5 h-[60%] overflow-auto">
          {products.map((product) => (
            <CardInfo
              key={product._id}
              img={product.image}
              productName={product.name}
              productCategory={product.category.name}
              productPrice={product.price}
              optionCount={product.countInStock}
            />
          ))}
        </div>
        <div className="w-[50%] h-[40%] flex flex-col justify-between">
          <p className="text-[2rem] font-medium font-Iran-Yekan text-text-primary">
            تعداد ({products.length})
          </p>
          <p className="font-Iran-Yekan text-text-primary text-[2.4rem]">
            {products.reduce((total, product) => total + product.price, 0)}{" "}
            تومان
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

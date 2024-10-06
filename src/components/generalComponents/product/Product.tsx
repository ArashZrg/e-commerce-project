import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbBrandAppgallery } from "react-icons/tb";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import LikeIcon from "./likeIcon/LikeIcon";
import Button from "../../common/button/Button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import axiosClient from "../../../api/axiosClient";

const Product: React.FC = () => {
  const fetchProduct = async (id: string) => {
    const res = await axiosClient.get(`/products/${id}`);
    return res.data;
  };
  const [isLiked, setIsLiked] = useState(true);
  const location = useLocation();
  const id = location.state?.id;
  const {
    isLoading,
    isError,
    error,
    data: selectProduct,
  } = useQuery({
    queryKey: ["selectProduct"],
    queryFn: () => fetchProduct(id),
  });

  const handleLikeIcon = () => {
    setIsLiked(!isLiked);
  };
  if (isLoading) {
    return (
      <div className="text-green-600 w-full h-full flex justify-center items-center text-5xl">
        <h1>...Loading</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-600 w-full h-full flex justify-center items-center text-5xl">
        <h1>Error: {error.message}</h1>
      </div>
    );
  }
  return (
    <div className=" flex flex-col w-[90%] h-full gap-5 justify-start items-center ">
      <LikeIcon handleLikeIcon={handleLikeIcon} isLiked={isLiked} />
      <div className=" w-[90%] h-[80%] flex justify-between items-center mt-[9.5rem] mx-auto">
        <img
          src={selectProduct.image}
          alt={selectProduct.name}
          className="w-[45%] h-full"
        />
        <div className=" w-[55%] h-full flex flex-col px-28 justify-between ">
          <p className="font-Iran-Yekan font-medium text-[2.4rem] text-text-primary dark:text-dark-text-primary text-right">
            {selectProduct.name}
          </p>
          <p className="text-text-primary dark:text-dark-text-primary font-normal text-[1.6rem] text-right">
            {selectProduct.description}
          </p>
          <p className="text-text-primary dark:text-dark-text-primary text-right text-[4.8rem] font-medium font-Iran-Yekan">
            {selectProduct.price}
          </p>
          <div className="flex justify-between items-center font-normal text-[1.6rem]">
            <div className="flex flex-col justify-center items-start gap-6">
              <p className="flex justify-center items-center gap-1">
                <FaStar className="inline" />
                <p>
                  <span className="text-text-secondary">امتیاز</span> :
                </p>
                <span>{selectProduct.rating}</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaCartShopping className="inline" />
                <p>
                  <span className="text-text-secondary">تعداد</span> :
                </p>
                <span>{selectProduct.quantity}</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <MdInventory className="inline" />
                <p>
                  <span className="text-text-secondary">موجودی</span> :
                </p>
                <span>{selectProduct.countInStock}</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-6">
              <p className="flex justify-center items-center gap-1">
                <TbBrandAppgallery className="inline" />
                <p>
                  <span className="text-text-secondary">برند</span> :
                </p>
                <span>{selectProduct.category?.name}</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <MdOutlineAccessTimeFilled className="inline" />
                <p>
                  <span className="text-text-secondary">زمان بروزرسانی</span> :{" "}
                </p>
                <span>{selectProduct.updatedAt}</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaStar className="inline" />
                <p>
                  <span className="text-text-secondary">نظرات</span> :
                </p>
                <span>{selectProduct.numReviews}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex justify-center items-center gap-2">
              <p className="font-normal text-[1.6rem] text-text-primary">
                5000 نظر
              </p>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <select className="w-[9.6rem] h-[4rem] rounded-[0.8rem] p-[0.8rem] text-[1.6rem] dark:bg-dark-base-text-field dark:border dark:border-dark-base-text-field-stroke">
              <option value="1">1</option>
            </select>
          </div>

          <Button className=" bg-primary-main text-text-button w-[14.3rem] h-[4rem] rounded-[0.8rem] text-center py-[0.8rem] px-[1.2rem]">
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
      <div className="bg-black w-[90%] h-[80%] flex justify-between items-center mx-auto p-5 gap-4">
        <div className="bg-white text-[1.6rem] text-text-primary flex flex-col gap-4 w-[10%]">
          <Link to="/r1">نظرات</Link>
          <Link to="/r2">ثبت نظر</Link>
          <Link to="/r3">ممم</Link>
        </div>
        <div className="bg-white w-[90%] h-full ">a</div>
      </div>
    </div>
  );
};

export default Product;

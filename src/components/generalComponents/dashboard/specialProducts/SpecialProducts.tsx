import React from "react";
import Button from "../../../common/button/Button";
import ProductCard from "../../../common/productCard/ProductCard";

interface ISpecialProduct {
  productImg: string;
  productTitle: string;
  productPrice: string;
}
interface ISpecialProducts {
  SpecialProducts: ISpecialProduct[];
}

const SpecialProducts: React.FC<ISpecialProducts> = ({ SpecialProducts }) => {
    return (
          <div className="flex flex-col gap-y-16">
            <div className="flex justify-between items-center h-28">
            <p className="font-normal text-[4rem] text-text-primary dark:text-dark-text-primary">
              محصولات ویژه
            </p>
            <Button
              children="فروشگاه"
              className="w-[13.5rem] h-20 rounded-full justify-center bg-primary-main font-bold text-[2rem] text-text-button"
            />
          </div> 
          <div className="grid grid-cols-4 h-full gap-8 w-full">
            {SpecialProducts.map((Product, index) => (
                <ProductCard
                    key={index}
                    productTitleStyle="text-text-primary text-[1.1rem] text-normal"
                    padding="px-2"
                    fontSize="text-[1.1rem]"
                    badgeTitle={Product.productPrice}
                    src={Product.productImg}
                    alt={Product.productTitle}
                    productTitle={Product.productTitle}
                />
            ))}
          </div>
        </div>
  );
};

export default SpecialProducts


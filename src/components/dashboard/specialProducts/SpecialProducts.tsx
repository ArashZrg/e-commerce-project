import Button from "../../common/button/Button";
import ProductCard from "../../common/productCard/ProductCard";

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
    <>
    <div className="h-[50%] w-full bg-green-400 text-[9rem]"><h1>top</h1></div>
      <div className="flex flex-col h-[50%] justify-center items-center w-full bg-gray-600">
        <div className="flex flex-col w-[90%] h-full bg-green-600">
          <div className="flex flex-row justify-between h-28">
            <p className="font-normal text-[4rem] text-text-primary">محصولات ویژه</p>
            <Button children="فروشگاه" className="w-[13.5rem] h-20 rounded-2xl justify-center bg-primary-main font-bold text-[2rem] text-text-button"/>
          </div>
          <div className="flex flex-wrap flex-grow-0 flex: 0 1 calc(25% - 20px) bg-pink-200 h-full gap-8 justify-center w-full">
            {SpecialProducts.map((Product, index) => (
              <ProductCard
                key={index}
                productTitleStyle="text-[1.8rem]"
                padding="px-2.5"
                fontSize="text-[1.2rem]"
                badgeTitle={Product.productPrice}
                src={Product.productImg}
                alt={Product.productTitle}
                productTitle={Product.productTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProducts;

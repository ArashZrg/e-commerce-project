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
      <div className="h-[50%] w-full bg-green-400 text-[9rem]">
        <h1>top</h1>
      </div>
      <div className="flex flex-col h-[50%] justify-center items-center w-full">
        <div className="flex flex-col w-[90%] h-full gap-16">
          <div className="flex flex-row justify-between h-28">
            <p className="font-normal text-[4rem] text-text-primary">
              محصولات ویژه
            </p>
            <Button
              children="فروشگاه"
              className="w-[13.5rem] h-20 rounded-2xl justify-center bg-primary-main font-bold text-[2rem] text-text-button"
            />
          </div>
          <div className="grid grid-cols-4  overflow-y-scroll h-full gap-8 mx-auto w-full">
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
      </div>
    </>
  );
};

export default SpecialProducts;

import { MdDeleteForever } from "react-icons/md";

interface ICartInfoProps {
  img: string;
  productName: string;
  productCategory: string;
  productPrice: number;
  optionCount: number;
}

const CardInfo: React.FC<ICartInfoProps> = ({
  img,
  productName,
  productCategory,
  productPrice,
  optionCount,
}) => {
  return (
    <div className="flex justify-between items-center w-full h-[30%]">
      <div className="flex-2 h-full">
        <img src={img} alt="pictire" className="w-full h-full" />
      </div>
      <div className="flex-1  h-full font-Iran-Yekan flex flex-col justify-between pr-10">
        <p className="font-normal text[1.6rem] text-primary-main text-right">
          {productName}
        </p>
        <p className="font-normal text-[1.6rem] text-right text-text-primary">
          {productCategory}
        </p>
        <p className="text-text-primary text-right text-[1.6rem] font-bold">
          {productPrice}
        </p>
      </div>
      <div className="flex-2  flex gap-[1.6rem] pl-3 justify-center items-center h-full">
        <select className="w-[5.2rem] h-[2.3rem] transition-transform">
          {[...Array(optionCount).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <MdDeleteForever className="w-[1.4rem] h-[1.6rem] text-red-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default CardInfo;

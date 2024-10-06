import { MdDeleteForever } from "react-icons/md";
const CardInfo = () => {
  return (
    <div className="flex justify-between items-center w-full h-[30%]">
      <div className="flex-2 h-full">
        <img src="random" alt="pictire" className="w-full h-full" />
      </div>
      <div className="flex-1  h-full font-Iran-Yekan flex flex-col justify-between pr-10">
        <p className="font-normal text[1.6rem] text-primary-main text-right">
          Apple IPhone 14 Pro
        </p>
        <p className="font-normal text-[1.6rem] text-right text-text-primary dark:text-dark-text-primary">
          Apple
        </p>
        <p className="text-text-primary dark:text-dark-text-primary text-right text-[1.6rem] font-bold">
          10,000 تومان
        </p>
      </div>
      <div className="flex-2  flex gap-[1.6rem] pl-3 justify-center items-center h-full">
        <select className="w-[5.2rem] h-[2.3rem] transition-transform dark:border dark:border-x-dark-base-text-field-stroke dark:rounded-lg dark:bg-dark-base-text-field"></select>
        <MdDeleteForever className="w-[1.4rem] h-[1.6rem] text-red-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default CardInfo;

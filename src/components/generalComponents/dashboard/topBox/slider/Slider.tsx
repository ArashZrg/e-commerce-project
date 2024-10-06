import { useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { FaStar, FaShoppingCart, FaClock, FaBox } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";

interface IItem {
    id: string,
    src: string,
    productTitle: string,
    productPrice: number,
    productDescription: string,
}

interface ISliderProps {
    items : IItem[]
}

const Slider : React.FC<ISliderProps> = ( {items} ) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const newIndex = currentIndex !== 0 ? currentIndex - 1 : items.length - 1;
        setCurrentIndex(newIndex) 
    }

    const nextSlide = () => {
        const newIndex = currentIndex === items.length -1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex) 
    }

  return (
    <div className="relative w-[55%]">
        <IoIosArrowDroprightCircle onClick={prevSlide} className="absolute text-3xl top-[50%] transform -translate-y-1/2 -right-10 cursor-pointer" />
        {items.map((item, index) => {
            return (
                <div 
                    key={index}    
                    className={`
                        ${currentIndex === index ? "flex" : "hidden"} 
                        flex-col gap-[1.6rem]`}
                >
                    <img src={item.src} alt={item.productTitle} className="aspect-video rounded-[0.8rem] object-cover" />
                    <div className="w-full flex gap-[3.2rem]">
                        <div className="flex flex-col w-[45%] text-[1.2rem] text-text-primary">
                            <h4>{item.productTitle}</h4>
                            <span className="self-end">
                                {item.productPrice}
                            </span>
                            <p className="line-clamp-4 pt-[2.4rem]">{item.productDescription}</p>
                        </div>
                        <div className="w-[55%] grid grid-flow-col grid-cols-auto grid-rows-3     items-start">
                            <div className="flex gap-[0.8rem] items-center" >
                                <FaStar className="text-[1.2rem]" />
                                <p className="text-[1.2rem] text-text-secondary font-normal" >
                                    امتیاز : 
                                    <span className="text-text-primary"> 5</span>
                                </p>
                            </div>
                            <div className="flex gap-[0.8rem] items-center" >
                                <FaShoppingCart className="text-[1.2rem]" />
                                <p className="text-[1.2rem] text-text-secondary font-normal" >
                                    تعداد : 
                                    <span className="text-text-primary" > 52</span>
                                </p>
                            </div>
                            <div className="flex gap-[0.8rem] items-center" >
                                <FaBox className="text-[1.2rem]" />
                                <p className="text-[1.2rem] text-text-secondary font-normal" >
                                    موجودی : 
                                    <span className="text-text-primary"> 10</span>
                                </p>
                            </div>
                            <div className="flex gap-[0.8rem] items-center" >
                                <AiFillShop className="text-[1.2rem]" />
                                <p className="text-[1.2rem] text-text-secondary font-normal" >
                                    برند : 
                                    <span className="text-text-primary" > اپل</span>
                                </p>
                            </div>
                            <div className="flex gap-[0.8rem] items-center" >
                                <FaClock className="text-[1.2rem]" />
                                <p className="text-[1.2rem] text-text-secondary font-normal" >
                                    زمان بروزرسانی : 
                                    <span className="text-text-primary" > چند لحظه قبل</span>
                                </p>
                            </div>
                            <div className="flex gap-[0.8rem] items-center" >
                                <FaStar className="text-[1.2rem]" />
                                <p className="text-[1.2rem] text-text-secondary font-normal" >
                                    نظرات :  
                                    <span className="text-text-primary"> ۴۲۰۲</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        <IoIosArrowDropleftCircle onClick={nextSlide} className="absolute text-3xl top-[50%] transform -translate-y-1/2 -left-10 cursor-pointer" />
    </div>
  )
}

export default Slider
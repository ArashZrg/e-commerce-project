import { useForm, FieldValues } from "react-hook-form";
import Input from "../common/input/Input"
import Button from "../common/button/Button";
import { useState } from "react";




const CreateProduct = () => {
  const {register, handleSubmit} = useForm();

  

  const [selectedImage, setSelectedImage] = useState<File | null | undefined>(null);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file);
  };

  return (
    <div   className="ml-7 m-auto flex flex-col bg-[#CED2D7] text-right w-[109.4rem] max-h-[112.4rem] p-5">
      
      <div  className="flex flex-col justify-center gap-2 ">
      <p className="text-black text-2xl font-medium mb-12">
      محصول جدید
      </p>
      
        <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex flex-col gap-6">
          <div>
            {selectedImage && <img 
            src={URL.createObjectURL(selectedImage)} 
            alt="Product Image" 
            className="max-w-[80rem] max-h-[48rem] m-auto"/>}
            <input type="file" 
              id="image" 
              className="hidden" 
              accept="image/*"  
             {...register("image")} 
             onChange={handleImageChange}
            />
            <label htmlFor="image" className=" flex flex-row justify-center items-center w-full bg-white h-[12.4rem] border border-gray-300  border-dashed text-black text-center rounded-md">آپلود عکس</label>
          </div>

          <div className= "h-[7.4rem] w-full">
            <Input 
            {...register("productName")}
            id="productName"
            placeholder="نام محصول را وارد نمایید"
            label="نام"
            inputStyle= "w-full rounded-xl p-4 text-right bg-white text-black block"
            labelStyle= " text-black text-2xl block mb-5 w-full" 
            />
          </div>

          <div className="m-2 h-[7.4rem] w-full flex flex-row justify-between">
            <Input 
            {...register("price")}
            id="price"
            placeholder="قیمت محصول را وارد نمایید"
            label="قیمت"
            inputStyle="w-[53rem] rounded-xl p-4 text-right bg-white text-black "
            labelStyle="  text-black text-2xl block mb-5"
            />
            <Input 
            {...register("brand")}
            id="brand"
            placeholder="برند محصول را وارد نمایید"
            label="برند"
            inputStyle="w-[53rem] rounded-xl p-4 text-right bg-white text-black "
            labelStyle="  text-black text-2xl block mb-5"
            />
          </div>

          <div className="m-2 h-[17.5rem] w-full">
            <label htmlFor="info" className=" text-black text-2xl block mb-5 w-full">توضیحات</label>
           <textarea
           {...register("info")}
           id="info"
           placeholder="توضیحات محصول را وارد نمایید"
           className="w-full rounded-xl h-[14rem] p-4 text-right bg-white text-black block"
            >
            </textarea>
            
          </div>

          <div className="m-2 h-[64px] w-full flex flex-row justify-between">
            <div className="flex flex-col">
            <label htmlFor="select" className=" text-black text-2xl block mb-5">موجودی</label>
            <select 
             {...register("select")}
            id="select" 
            className="w-[53rem] rounded-xl p-4 text-right bg-white text-black">
              <option value="موجودی">موجودی</option>
            </select>
            
            </div>
            <Input 
            {...register("purchasableCount")}
            id="purchasableCount"
            placeholder="تعداد قابل خرید را وارد نمایید"
            label="تعداد قابل خرید"
            inputStyle="w-[53rem] rounded-xl p-4 text-right bg-white text-black "
            labelStyle=" text-black text-2xl block mb-5"
            />
          </div>

          <div className=" m-2 flex flex-col gap-2">
          <Button children="ساخت محصول جدید"/>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default CreateProduct;
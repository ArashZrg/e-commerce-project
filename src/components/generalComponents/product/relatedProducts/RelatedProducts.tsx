import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productService from "../../../../services/productService";
import { IProductType } from "../../../../types/productTypes";
import ProductCard from "../../../common/productCard/ProductCard";
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

const RelatedProducts = () => {
  const [category, setCategory] = useState<string>("");
  const [relatedProducts, setRelatedProduct] = useState([]);
  const { id } = useParams();

  const fetchProduct = async () => {
    const res = await productService.getProduct(String(id));
    setCategory(res.category);
  };

  const fetchRealateProducts = async () => {
    fetchProduct();
    const response = await productService.getAllProducts();
    const arr = response.filter((res: Product) => {
      if (res.category._id === category) {
        return res;
      }
    });
    setRelatedProduct(arr);
  };

  useEffect(() => {
    fetchRealateProducts();
  }, []);
  return (
    <div className="w-[45%] grid grid-cols-2 grid-rows-2 gap-[3.2rem]">
      {relatedProducts.map((item: IProductType, index) => (
        <ProductCard
          key={index}
          src={item?.image}
          alt={item?.name}
          productTitle={item?.name}
          productTitleStyle="text-text-primary text-[1.1rem] text-normal"
          badgeTitle={item?.price}
          padding="px-2"
          fontSize="text-[1.1rem]"
        />
      ))}
    </div>
  );
};

export default RelatedProducts;

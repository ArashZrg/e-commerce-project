import { useEffect, useState } from "react";
import { useFavoritesStore } from "../../../stores/favoritesStore";
import ProductCard from "../../common/productCard/ProductCard"
import productService from "../../../services/productService";

interface IFavoriteProduct {
    title: string;
    price: number;
    image: string;
    _id: string;
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

interface IProduct {
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

const Favorites : React.FC = () => {
    const [favoriteProducts, setFavoriteProducts] = useState<IFavoriteProduct[]>([])
    const { favoriteProductsId } = useFavoritesStore() 

    useEffect(() => {
        fetchProducts()
    },[])

    async function fetchProducts() {
        const response = await Promise.all(
            favoriteProductsId.map((favorite) => {
                return productService.getProduct(favorite)
            })
        )

        const updatedFavoriteProducts = response.map((product: IProduct) => ({
            title: product.name,
            price: product.price,
            image: product.image,
            _id: product._id
        }))

        setFavoriteProducts(updatedFavoriteProducts)
    }

    return (
        <section className="w-full h-screen grid grid-cols-4 gap-[3.2rem] py-[3.2rem] px-[2.1rem] overflow-y-auto">
            {favoriteProducts.map((favoriteProduct) => {
                return (
                    <ProductCard 
                        id={favoriteProduct._id}
                        key={favoriteProduct._id}
                        productTitle={favoriteProduct.title} 
                        productTitleStyle="text-text-primary text-[1.8rem] text-normal"
                        badgeTitle={favoriteProduct.price.toString()}
                        padding="px-2.5"
                        fontSize="text-[1.2rem]"
                    />
                )
            })}
        </section>
    )
}

export default Favorites

////////////////////////// getProduct response //////////////////////////

// {
//     "_id": "66fe893150ad249af2a3a93a",
//     "name": "Iphone 13",
//     "image": "http://185.8.174.74:8090/uploads/image-1727957204311.jpeg",
//     "quantity": 6,
//     "category": "66f945636e4773b72e1d612f",
//     "description": "This is a good phone",
//     "rating": 4,
//     "numReviews": 2,
//     "price": 2000,
//     "countInStock": 6,
//     "reviews": [
//         {
//             "name": "gp3",
//             "rating": 5,
//             "comment": "به شما ناهارم دادن ؟",
//             "user": "66eff925f00721236cdfab80",
//             "_id": "66ffbd510ce8ee84905c1348",
//             "createdAt": "2024-10-04T10:02:57.689Z",
//             "updatedAt": "2024-10-04T10:02:57.689Z"
//         },
//         {
//             "name": "gp1",
//             "rating": 3,
//             "comment": "مفتش گرونه",
//             "user": "66eff90df00721236cdfab7a",
//             "_id": "66ffed9ff3f62decd0daf706",
//             "createdAt": "2024-10-04T13:29:03.550Z",
//             "updatedAt": "2024-10-04T13:29:03.550Z"
//         }
//     ],
//     "createdAt": "2024-10-03T12:08:17.066Z",
//     "updatedAt": "2024-10-04T13:29:03.553Z",
//     "__v": 2
// }
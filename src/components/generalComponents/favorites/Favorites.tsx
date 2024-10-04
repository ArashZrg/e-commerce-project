import ProductCard from "../../common/productCard/ProductCard"

interface IFavoriteProduct {
    productTitle : string;
    badgeTitle : string;
}
  
interface IFavoritesProps {
    favoriteProducts: IFavoriteProduct[];
}

const Favorites : React.FC<IFavoritesProps> = ({favoriteProducts}) => {
  return (
    <section className="w-full h-screen grid grid-cols-4 gap-[3.2rem] py-[3.2rem] px-[2.1rem] overflow-y-auto">
        {favoriteProducts.map((favouriteProduct, index) => {
            return (
                <ProductCard
                key={index}
                productTitle={favouriteProduct.productTitle} 
                productTitleStyle="text-text-primary dark:text-white text-[1.8rem] text-normal"
                badgeTitle={favouriteProduct.badgeTitle}
                padding="px-2.5"
                fontSize="text-[1.2rem]"
                />
            )
        })}
    </section>
  )
}

export default Favorites
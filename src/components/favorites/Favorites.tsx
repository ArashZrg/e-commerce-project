import ProductCard from "../common/productCard/ProductCard"

interface IFavoriteProduct {
    productTitleStyle ?: string;
    productTitle : string;
    badgeTitle : string;
    padding : "px-2" | "px-2.5";
    fontSize : "text-[1.1rem]" | "text-xs";  
    id : number;
}
  
interface IFavoritesProps {
    favoriteProducts: IFavoriteProduct[];
}

const Favorites : React.FC<IFavoritesProps> = ({favoriteProducts}) => {
  return (
    <section className="w-full grid grid-cols-4 gap-[3.2rem] py-[3.2rem] px-[2.1rem] overflow-y-auto">
        {favoriteProducts.map((favouriteProduct) => {
            return (
                <ProductCard 
                key={favouriteProduct.id}
                productTitle={favouriteProduct.productTitle} 
                productTitleStyle={favouriteProduct.productTitleStyle}
                badgeTitle={favouriteProduct.badgeTitle}
                padding={favouriteProduct.padding}
                fontSize={favouriteProduct.fontSize}
                id={favouriteProduct.id}
                />
            )
        })}
    </section>
  )
}

export default Favorites
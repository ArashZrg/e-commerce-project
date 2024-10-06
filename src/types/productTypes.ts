export interface IProductType {
    name: string,
    description: string,
    price: number,
    category: string,
    quantity: number,
    image: string
}


export interface IFilterType {
    categories: string[],
    price: number[]
}
export interface IOrderItems {
    _id: string,
    name: string,
    qty: number
}

export type IPaymentMethod = string

export interface IShippingAddress {
    address: string,
    city: string,
    postalCode: string
}

interface IOrderItemsResponse {
    image: string,
    name: string,
    qty: number,
    price : number,
    product : string,
    _id: string,
}

export interface IUserOrderResponse {
    shippingAddress : IShippingAddress,
    _id : string,
    user : string,
    orderItems : IOrderItemsResponse[],
    itemsPrice : number,
    taxPrice : number,
    shippingPrice : number,
    totalPrice : number,
    isPaid : boolean,
    isDelivered : boolean,
    createdAt : string,
    updatedAt : string,
    __v : number,
}

interface IUserDetailsResponse {
    _id: string,
    username: string
}

export interface IAdminOrderResponse {
    shippingAddress : IShippingAddress,
    _id : string,
    user : IUserDetailsResponse,
    orderItems : IOrderItemsResponse[],
    itemsPrice : number,
    taxPrice : number,
    shippingPrice : number,
    totalPrice : number,
    isPaid : boolean,
    isDelivered : boolean,
    createdAt : string,
    updatedAt : string,
    __v : number,
}
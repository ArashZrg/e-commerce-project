import { create } from "zustand";

interface ICartStore {
    cartItems: string[];
    addItem: (item: string) => void;
    removeItem: (item: string) => void;
    clearCart: () => void
}

const CartStore = create<ICartStore>((set) => ({
    cartItems: [],
    addItem: (item) => {
        set((state) => ({
            cartItems: [...state.cartItems, item],
        }));
    },
    removeItem: (item) => {
        set((state) => ({
            cartItems: state.cartItems.filter((cartItem) => cartItem !== item),
        }));
    },
    clearCart: () => {
        set(() => ({
            cartItems: []
        }))
    }
}));


export default CartStore
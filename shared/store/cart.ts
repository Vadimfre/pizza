import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartDetails } from "../lib/GetCartDetails";

export type ICartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: ICartStateItem[];
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: any) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>()((set, get) => ({
  items: [],
  totalAmount: 0,
  loading: false,
  error: false,
  fetchCartItems: async () => {
    set({ loading: true, error: false });
    const data = await Api.cart.fetchCart();
    set(getCartDetails(data));
  },
  updateItemQuantity: async () => {},
  addCartItem: async () => {},
  removeCartItem: async () => {},
}));

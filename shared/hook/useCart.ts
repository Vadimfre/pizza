import { useEffect } from "react";
import { useCartStore } from "../store/cart";
import { CreateCartItemValues } from "../services/dto/cart.dto";
import { CartItem } from "@prisma/client";
import { ICartStateItem } from "../lib/GetCartDetails";
type ReturnProps = {
  items: ICartStateItem[];
  totalAmount: number;
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const [
    totalAmount,
    fetchCartItems,
    items,
    updateItemQuantity,
    removeCartItem,
    loading,
  ] = useCartStore((state) => [
    state.totalAmount,
    state.fetchCartItems,
    state.items,
    state.updateItemQuantity,
    state.removeCartItem,
    state.loading,
  ]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return {
    totalAmount,
    items,
    updateItemQuantity,
    removeCartItem,
    loading,
    addCartItem: async (values: CreateCartItemValues) => {},
  };
};

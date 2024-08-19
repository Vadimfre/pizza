import { CartDTO } from "../services/dto/cart.dto";
import { calcCartTotalPizzaPrice } from "./CalcCartItemTotalPrice";
export type ICartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  items: ICartStateItem[];
  totalAmount: number;
}
export const getCartDetails = (data: CartDTO): ReturnProps => {
  console.log("data", data);
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    disabled: false,
    price: calcCartTotalPizzaPrice(item),
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })) as ICartStateItem[];

  return {
    items,
    totalAmount: data.totalAmount,
  };
};

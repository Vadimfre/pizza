import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartTotalPizzaPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (acc, val) => acc + val.price,
    0
  );
  return (item.productItem.price + ingredientsPrice) * item.quantity;
};

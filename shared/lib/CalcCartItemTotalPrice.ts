import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartTotalPizzaPrice = (item: CartItemDTO): number => {
  console.log("item", item);
  const ingredientsPrice = item.ingredients.reduce(
    (acc, val) => acc + val.price,
    0
  );
  console.log("ingredientsPrice", ingredientsPrice);
  return (item.productItem.price + ingredientsPrice) * item.quantity;
};

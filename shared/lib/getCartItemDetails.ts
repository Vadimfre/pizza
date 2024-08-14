import { PizzaSize, PizzaType } from "../constants/pizza";
import { ICartStateItem } from "./GetCartDetails";

export const getCartItemDetails = (
  ingredients: ICartStateItem["ingredients"],
  pizzaType: PizzaType,
  pizzaSize: PizzaSize
): string => {
  const details = [];

  if (pizzaSize) {
    const typeName = pizzaType === 1 ? "Традиционное" : "Тонкое";
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(", ");
};

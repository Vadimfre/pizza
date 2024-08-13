import { ProductItem } from "@prisma/client";
import { calcPizzaPrices } from "./CalcPizzaPrices";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: any[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcPizzaPrices(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const textDetails = `${size} см, ${mapPizzaType[type]} пицца,`;

  return { totalPrice, textDetails };
};

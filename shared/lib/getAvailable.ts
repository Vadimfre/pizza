import { ProductItem } from "@prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/Variants";

export const getAvaiblePizzaSizes = (
  items: ProductItem[],
  type: PizzaType
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};

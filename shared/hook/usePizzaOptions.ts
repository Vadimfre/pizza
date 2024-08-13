import { useEffect, useState } from "react";
import { Variant } from "../components/shared/Variants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvaiblePizzaSizes } from "../lib/getAvailable";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredients: Set<number>;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
  availableSizes: Variant[];
}
export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvaiblePizzaSizes(items, type);

  useEffect(() => {
    const isAvaibleSize = availableSizes?.find(
      (item) => Number(item.value) === size && item.disabled
    );
    const avaibleSize = availableSizes?.find((item) => !item.disabled);

    if (isAvaibleSize && avaibleSize) {
      setSize(Number(avaibleSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availableSizes,
  };
};

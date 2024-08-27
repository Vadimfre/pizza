"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { cn } from "@/shared/lib/utils";
import { useCartStore } from "@/shared/store/cart";
import { FC } from "react";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "./modals/ChoosePizzatForm";
import { ChooseProductForm } from "./modals/ChooseProductForm";
import { readingMessage } from "@/shared/lib/preparingMessage";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ProductForm: FC<Props> = ({
  className,
  product,
  onSubmit: __onSubmit,
}) => {
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);
  const firstItem = product.items[0];
  const isPizzaForm = firstItem && firstItem.pizzaType !== null;

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(product.name + " добавлена в корзину");
      readingMessage("Товар добавлен в корзину", "Приятного аппетита");
      __onSubmit?.();
    } catch (err) {
      toast.error("Не удалось добавить товар в корзину");
      readingMessage(
        "Не удалось добавить товар в корзину",
        "Попробуйте еще раз"
      );
      console.error(err);
    }
  };
  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  } else {
    return (
      <ChooseProductForm
        imageUrl={product.imageUrl}
        name={product.name}
        onSubmit={onSubmit}
        price={firstItem.price}
        loading={loading}
      />
    );
  }
};

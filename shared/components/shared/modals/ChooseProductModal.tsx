"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "./ChoosePizzatForm";
import { ChooseProductForm } from "./ChooseProductForm";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";
interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = firstItem && firstItem.pizzaType !== null;
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onAddProduct = () => {
    addCartItem({
      productItemId: firstItem.id,
    });
  };
  const onAddPizza = async (productItemId: number, ingredients: number[]) => {
    try {
      await addCartItem({
        productItemId,
        ingredients,
      });
      toast.success("Пицца добавлена в корзину");
      router.back();
    } catch (error) {
      toast.error("Не удалось добавить пиццу в корзину");
      console.log(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <div className="max-w-[1860px] min-h-[580px]">
        <DialogContent
          className={cn(
            "p-0 w-[1060px] max-w-[1060px] min-h-[580px] bg-white overflow-hidden",
            className
          )}
        >
          {isPizzaForm ? (
            <ChoosePizzaForm
              imageUrl={product.imageUrl}
              name={product.name}
              ingredients={product.ingredients}
              items={product.items}
              onSubmit={onAddPizza}
              loading={loading}
            />
          ) : (
            <ChooseProductForm
              imageUrl={product.imageUrl}
              name={product.name}
              onSubmit={onAddProduct}
              price={firstItem.price}
              loading={loading}
            />
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
};

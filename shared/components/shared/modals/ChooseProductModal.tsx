"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "./ChoosePizzatForm";
import { ChooseProductForm } from "./ChooseProductForm";
interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = firstItem && firstItem.pizzaType !== null;
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
            />
          ) : (
            <ChooseProductForm
              imageUrl={product.imageUrl}
              name={product.name}
            />
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
};

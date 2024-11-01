"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductForm } from "../ProductForm";
interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <div className="max-w-[1860px] min-h-[580px]">
        <DialogContent
          className={cn(
            "p-0 w-[1060px] max-w-[1060px] min-h-[580px] bg-white overflow-hidden max-xl:w-[980px] max-lg:w-[500px]",
            className
          )}
        >
          <ProductForm product={product} onSubmit={() => router.back()} />
        </DialogContent>
      </div>
    </Dialog>
  );
};

"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <div className="max-w-[1860px] min-h-[580px]">
        <DialogContent
          className={cn(
            "p-0 w-[1860px] max-w-[1860px] min-h-[580px] bg-white overflow-hidden",
            className
          )}
        >
          <Title text={product.name} />
        </DialogContent>
      </div>
    </Dialog>
  );
};

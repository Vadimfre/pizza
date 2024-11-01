"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./Product-card";
import { cn } from "@/shared/lib/utils";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/shared/store/category";
import { Product } from "@prisma/client";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
  title: string;
  categoryId: number;
  items: ProductWithRelations[];
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px] max-xl:grid-cols-2 max-lg:grid-cols-1", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

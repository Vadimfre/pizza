import { Container } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ChoosePizzaForm } from "@/shared/components/shared/modals/ChoosePizzatForm";
import { ChooseProductForm } from "@/shared/components/shared/modals/ChooseProductForm";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";
import { ProductForm } from "@/shared/components/shared/ProductForm";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}

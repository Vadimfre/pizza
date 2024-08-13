import { Container, Title } from "@/shared/components/shared";
import { ChooseProductModal } from "@/shared/components/shared/modals/ChooseProductModal";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ChooseProductModal product={product} />;
    </Container>
  );
}

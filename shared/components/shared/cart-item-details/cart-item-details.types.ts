import { Ingredient } from "@prisma/client";

export interface CartItemProps {
  id: number;
  imageUrl: string;
  ditails: string;
  name: string;
  price: number;
  quantity: number;
}

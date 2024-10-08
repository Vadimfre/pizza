import { Ingredient } from "@prisma/client";

export interface CartItemProps {
  disabled?: boolean;
  id: number;
  imageUrl: string;
  ditails: string;
  name: string;
  price: number;
  quantity: number;
}

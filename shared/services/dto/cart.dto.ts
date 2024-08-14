import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: ProductItem & { product: Product };
  ingredients: Ingredient[];
};

// export type CartItemDTO = CartItem & {
//   ingredients: Ingredient[];
//   productItem: ProductItem & { product: Product };
// };

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

import { FC } from "react";
import { CheckoutItem } from "../cart-item";
import { WhiteBlock } from "../white-block";
import { getCartItemDetails } from "@/shared/lib/getCartItemDetails";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { ICartStateItem } from "@/shared/lib/GetCartDetails";

interface Props {
  className?: string;
  items: ICartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;

  removeCartItem: (id: number) => void;
}

export const CheckoutCart: FC<Props> = ({
  items,
  className,
  onClickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title="1. Корзина" className={className}>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CheckoutItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            ditails={getCartItemDetails(
              item.ingredients,
              item.pizzaType as PizzaType,
              item.pizzaSize as PizzaSize
            )}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onClickCountButton={(type) =>
              onClickCountButton(item.id, item.quantity, type)
            }
            onClickRemove={() => removeCartItem(item.id)}
          />
        ))}
      </div>
    </WhiteBlock>
  );
};

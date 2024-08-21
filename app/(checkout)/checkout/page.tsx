"use client";
import { Container, Title } from "@/shared/components/shared";
import { CheckoutItem } from "@/shared/components/shared/cart-item";
import { CheckoutItemDetails } from "@/shared/components/shared/checkoutItemDetails";
import { CheckoutSideBar } from "@/shared/components/shared/checkoutSideBart";
import { WhiteBlock } from "@/shared/components/shared/white-block";
import { Button, Input } from "@/shared/components/ui";
import { Textarea } from "@/shared/components/ui/textarea";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hook/useCart";
import { getCartItemDetails } from "@/shared/lib/getCartItemDetails";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        <div
          style={{ gap: "20px" }}
          className="flex flex-col gap-10 flex-1 mb-20"
        >
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
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
                  disabled={item.disabled}
                />
              ))}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес Доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Адрес доставки"
              />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <CheckoutSideBar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}

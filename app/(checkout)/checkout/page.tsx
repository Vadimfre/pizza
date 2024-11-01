"use client";
import { createOrder } from "@/app/actions";
import { Container, Title } from "@/shared/components/shared";
import { CheckoutAdressForm } from "@/shared/components/shared/checkout/checkout-adress-form";
import { CheckoutCart } from "@/shared/components/shared/checkout/checkout-cart";
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/shared/components/shared/checkout/checkout-form-schemas";
import { CheckoutPersonalInfo } from "@/shared/components/shared/checkout/checkout-personal-form";
import { CheckoutSideBar } from "@/shared/components/shared/checkoutSideBart";
import { useCart } from "@/shared/hook/useCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const [subbmitting, setSubbmitting] = useState(false);
  const { totalAmount, items, loading, updateItemQuantity, removeCartItem } =
    useCart();
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues): Promise<void> => {
    try {
      setSubbmitting(true);
      const url = await createOrder(data);

      toast.success("Заказ успешно оформлен! Переход на оплату...");
      if (url) {
        location.href = url;
      }
    } catch (error) {
      setSubbmitting(false);
      console.log(error);
      toast.error("Не удалось создать заказ");
    }
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10 max-xl:flex-col">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalInfo disabled={loading} />

              <CheckoutAdressForm disabled={loading} />
            </div>
            <div className="w-[450px] max-xl:w-full">
              <CheckoutSideBar
                totalAmount={totalAmount}
                loading={loading || subbmitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}

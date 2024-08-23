import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { CheckoutItemDetails } from "./checkoutItemDetails";
import { WhiteBlock } from "./white-block";
import { Button, Skeleton } from "../ui";
import { FC } from "react";

interface Props {
  totalAmount: number;
  loading?: boolean;
  subbmitting?: boolean;
}

export const CheckoutSideBar: FC<Props> = ({
  totalAmount,
  loading,
  subbmitting,
}) => {
  const VAT = 15;
  const DELIVERY_PRICE = 250;

  const vatPrice = totalAmount * (VAT / 100);
  const deliveryPrice = DELIVERY_PRICE;
  const totalPrice = totalAmount + vatPrice + deliveryPrice;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className=" h-11 w-48" />
        ) : (
          <span className=" h-11 text-[34px] font-extrabold">{`${totalPrice} ₽`}</span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-300" />
            Стоимость товаров:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-16 rounded-[6px]" />
          ) : (
            `${totalAmount} ₽`
          )
        }
      />

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-300" />
            Налоги:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-16 rounded-[6px]" />
          ) : (
            `${vatPrice} ₽`
          )
        }
      />

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-16 rounded-[6px]" />
          ) : (
            `${deliveryPrice} ₽`
          )
        }
      />
      <Button
        loading={subbmitting}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};

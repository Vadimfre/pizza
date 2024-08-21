import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { CheckoutItemDetails } from "./checkoutItemDetails";
import { WhiteBlock } from "./white-block";
import { Button } from "../ui";
import { FC } from "react";

interface Props {
  totalAmount: number;
}

export const CheckoutSideBar: FC<Props> = ({ totalAmount }) => {
  const VAT = 15;
  const DELIVERY_PRICE = 250;

  const vatPrice = totalAmount * (VAT / 100);
  const deliveryPrice = DELIVERY_PRICE;
  const totalPrice = totalAmount + vatPrice + deliveryPrice;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className=" text-4xl font-extrabold">{`${totalPrice} ₽`}</span>
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-300" />
            Стоимость товаров:
          </div>
        }
        value={`${totalAmount} ₽`}
      />

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-300" />
            Налоги:
          </div>
        }
        value={`${vatPrice} ₽`}
      />

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={`${deliveryPrice} ₽`}
      />
      <Button
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};

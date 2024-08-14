import { cn } from "@/shared/lib/utils";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import { CartItemInfo } from "./cart-item-details/cart-item-info";
import { CountButton } from "./count-button";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";
import { Trash2Icon } from "lucide-react";
interface Props extends CartItemProps {
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
  className,
  id,
  imageUrl,
  ditails,
  name,
  price,
  quantity,
}) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItemDetailsImage src={imageUrl} />
      <div className="flex-1">
        <CartItemInfo name={name} details={ditails} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={() => {}} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
            <Trash2Icon
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

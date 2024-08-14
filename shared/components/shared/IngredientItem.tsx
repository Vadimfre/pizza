import { cn } from "@/shared/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  onClick,
  active,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col text-black items-center justify-center rounded-xl w-32 cursor-pointer shadow-md bg-white relative",
        { "border border-primary": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute  top-2 left-2 text-primary" />
      )}
      <img width={110} height={110} src={imageUrl} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};

"use client";

import { cn } from "@/lib/utils";
import { Key } from "lucide-react";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: ReadonlyArray<Variant>;
  onClick?: (value: Variant["value"]) => void;
  className?: string;
  selectedValue?: Variant["value"];
}

export const GroupVariants: React.FC<Props> = ({
  items,
  className,
  selectedValue,
  onClick,
}) => (
  <div
    className={cn(
      className,
      "flex justify-between cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400"
    )}
  >
    {items.map((item) => (
      <button
        key={item.name}
        onClick={() => onClick?.(item.value)}
        className={cn(
          "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400",
          {
            "bg-white shadow": item.value === selectedValue,
            "text-gray-500 opacity-50 pointer-events-none": item.disabled,
          }
        )}
      >
        {item.name}
      </button>
    ))}
  </div>
);

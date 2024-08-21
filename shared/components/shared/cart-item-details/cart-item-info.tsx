import { cn } from "@/shared/lib/utils";

interface Props {
  details: string;
  name: string;
  className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ details, name, className }) => {
  return (
    <div>
      <div className={cn("flex items-center gap-2", className)}>
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      <p className="text-xs text-gray-400 w-[90%]">{details}</p>
    </div>
  );
};

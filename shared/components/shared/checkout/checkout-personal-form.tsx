import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { FormInput } from "@/shared/components/shared/form/FormInput";

interface Props {
  disabled?: boolean;
  className?: string;
}

export const CheckoutPersonalInfo: FC<Props> = ({ className, disabled }) => {
  return (
    <WhiteBlock title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
        <FormInput
          disabled={disabled}
          name="name"
          className="text-base"
          placeholder="Имя"
        />
        <FormInput
          disabled={disabled}
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
        />
        <FormInput
          disabled={disabled}
          name="email"
          className="text-base"
          placeholder="E-Mail"
        />
        <FormInput
          disabled={disabled}
          name="phone"
          className="text-base"
          placeholder="Телефон"
        />
      </div>
    </WhiteBlock>
  );
};

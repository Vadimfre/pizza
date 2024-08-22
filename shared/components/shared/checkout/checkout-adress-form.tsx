"use client";

import { WhiteBlock } from "../white-block";
import { FormInput } from "../form/FormInput";
import { FC } from "react";
import { FormTextarea } from "../form/FormTextArea";
import { AdressInput } from "../addres-input";

interface Props {
  disabled?: boolean;
  className?: string;
}

export const CheckoutAdressForm: FC<Props> = ({ className, disabled }) => {
  return (
    <WhiteBlock title="3. Адрес Доставки">
      <div className="flex flex-col gap-5">
        <FormInput
          disabled={disabled}
          name="address"
          className="text-base"
          placeholder="Адрес доставки"
        />

        <FormTextarea
          disabled={disabled}
          name={"comment"}
          className="text-base"
          placeholder="Комментарий к заказу"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};

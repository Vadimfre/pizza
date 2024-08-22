"use client";

import { AddressSuggestions } from "react-dadata";
import { FC, useState } from "react";

interface Props {
  onChange?: (value: string) => void;
}

export const AdressInput: FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="4c39418c768f4d60982195a62307ce7b374d0e19"
      onChange={(data) => onChange?.(data!.value)}
    />
  );
};

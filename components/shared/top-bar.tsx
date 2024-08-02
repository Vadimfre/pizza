import React from "react";
import { Container } from "./container";
import { Categories } from "./Categories";
import { SortPopup } from "./sort-popup";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 py-5 px-5 shadow-lg z-10 bg-white",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;

import React from "react";
import { Container } from "./container";
import { Categories } from "./Categories";
import { cn } from "@/shared/lib/utils";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 py-5 px-5 shadow-lg z-10 bg-white",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories items={categories} />
      </Container>
    </div>
  );
};

export default TopBar;

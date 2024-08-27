import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xl font-poppins font-semibold text-orange-400 text-center sm:text-left ",
        className
      )}
    >
      Mat<span className="text-teal-600 font-bold">Dan</span>
    </h1>

  );
};

export default Logo;

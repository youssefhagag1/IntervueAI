import React from "react";
import { cn } from "../lib/utils";
import IText from "@/types/text";

export function Title({ className, children }: IText) {
  return <p className={cn("text-3xl font-bold text-center", className)}>{children}</p>;
}
export function SubTitle({ className, children }: IText) {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>;
}

function Text({ className, children }: IText) {
  return <p className={cn("text-sm w-full", className)}>{children}</p>;
}

export default Text;

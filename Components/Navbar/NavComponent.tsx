import Link from "next/link";
import React from "react";

interface Props {
  to:string
  label: string;
  isActive?: boolean;
}

export const NavComponent = ({ to, label, isActive }: Props) => {
  return (
    <Link
      href={to}
      className={`${
        isActive ? "text-black font-semibold" : "text-[#7d7777]"
      } leading-[27px] text-[17px] cursor-pointer`}
    >
      {label}
    </Link>
  );
};

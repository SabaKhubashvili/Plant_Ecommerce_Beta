import { Arrow_Left } from "@/public/svg";
import Link from "next/link";
import React from "react";

interface Props {
  to: string;
  label: string;
  onClick?:()=>void
}

export const MenuComponent = ({ to, label,onClick }: Props) => {
  return (
    <Link 
    onClick={onClick}
      href={to}
      className=" select-none cursor-pointer flex items-center gap-2 hover:gap-4 transition-all duration-200 text-lg"
    >
      <div className="w-4">
        <Arrow_Left />
      </div>
      {label}
    </Link>
  );
};

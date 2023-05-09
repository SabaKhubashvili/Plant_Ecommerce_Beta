import { CategoriesHomeComponent } from "@/types";
import React from "react";

export const AboutUsComponent = ({
  icon,
  title,
  desc,
}: CategoriesHomeComponent) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 basis-1/3 h-[14rem]">
        <div className="bg-[#C1DCDC] p-5 rounded-full">
            <img src={`/svg/direct/${icon}.svg`} alt="" />
        </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <h3 className="text-[18px] font-medium">{title}</h3>
        <p className="text-neutral-400 text-[18px] font-medium text-center xl:w-[23rem]">{desc}</p>
      </div>
    </div>
  );
};

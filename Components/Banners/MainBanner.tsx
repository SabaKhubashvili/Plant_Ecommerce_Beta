import React from "react";

interface Props {
  image?: string;
  title: string;
  outline?: boolean;
}

export const MainBanner = ({ image = "ShopBanner", title, outline }: Props) => {
  return (
    <section
      className={`
  
    w-full bg-[url('/Images/Banners/ShopBanner.webp')]
     bg-no-repeat bg-center h-[20rem]  relative
    `}
    >
      {outline && (
        <div className="bg-[#00000062] w-full h-full absolute z-30" />
      )}
      <div
        className="flex justify-center items-center h-full w-full
        text-white font-bold lg:text-[100px] md:text-[70px] text-[50px] break-all 
        absolute z-40
        "
      >
        {title}
      </div>
    </section>
  );
};

import {
  Arrow_Left,
  Cart,
  MenuSvg,
  SignOut,
} from "@/public/svg";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { MenuComponent } from "./MenuComponent";
import { UseCreateProductModal } from "@/hooks/UseCreateProductModal";

interface Props {
  currentUser: any;
}

export const Menu = ({ currentUser }: Props) => {
  const { data } = useSession();
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const CreateProductModal = UseCreateProductModal();

  
  

  return (
    <div className="flex justify-end items-center relative">
      <div className="flex gap-10 items-center border-r-[2px] border-black px-10">
        <Link  href={'/cart'}  className="cursor-pointer">
          <Cart />
        </Link>
      </div>
      <div
        className="mx-10 cursor-pointer  flex-grow h-full w-fit py-1"
        onClick={() => {
          setMenuToggle((prevToggle) => !prevToggle);
        }}
      >
        <MenuSvg />
      </div>
      {menuToggle && (
        <div className="absolute p-4 flex items-end flex-col left-0 top-10 w-full bg-[#D5D8DC] rounded-md">
          {!currentUser ? (
            <React.Fragment>
              <MenuComponent onClick={()=>{setMenuToggle(false)}} to="/auth/Login" label="Login" />
              <MenuComponent onClick={()=>{setMenuToggle(false)}}  to="/auth/Register" label="Register" />
            </React.Fragment>
          ) : (
            <React.Fragment>
                <div className="flex justify-between select-none cursor-pointer  items-center gap-5 hover:gap-10 transition-all duration-200 text-lg" 
                onClick={()=>{
                CreateProductModal.onOpen() 
                setMenuToggle(false)
                }}>
                        <div className="w-4">
                         <Arrow_Left />
                        </div>
                    Add a product
              </div>
              <div
                onClick={() => {
                  setMenuToggle(false)
                  signOut();
                }}
                className=" flex justify-between select-none cursor-pointer  items-center gap-5 hover:gap-10 transition-all duration-200 text-lg"
              >
                <div className="w-5">
                  <SignOut />
                </div>
                Sign out
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

import React, { useCallback, useState } from "react";
import { Container } from "../Container";
import { Cart, Close, Logo, MenuSvg, UserSvg } from "@/public/svg";
import { NavComponent } from "./NavComponent";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "./Menu";
import { signOut, useSession } from "next-auth/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import { SmallNavComponent } from "./SmallNavComponent";
import { UseCreateProductModal } from "@/hooks/UseCreateProductModal";
import { TbLogout } from "react-icons/tb";

export const Navbar = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const router = useRouter();
  const productModal = UseCreateProductModal()
  const isAboveLargeScreens = useMediaQuery("(min-width:1024px)");
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const [isTopOfPage, setIsTopOfPage] = React.useState<boolean>(true);

  React.useEffect(() => {
    const isScrolled = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", isScrolled);
    return () => window.addEventListener("scroll", isScrolled);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-0  h-fit w-full top-0 z-50 transition-all duration-300 ${
          isTopOfPage ? "py-8" : "py-6 bg-[#FFFFE0]"
        }`}
      >
        <Container>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-20 items-center lg:basis-5/6">
              <div
                onClick={() => {
                  router.push("/");
                }}
                className=" cursor-pointer"
              >
                <Logo />
              </div>
              {isAboveLargeScreens && (
                <div className="flex gap-4">
                  <NavComponent
                    label="Home"
                    isActive={pathname == "/" ? true : false}
                    to="/"
                  />
                  <NavComponent
                    label="Products"
                    isActive={pathname == "/shop" ? true : false}
                    to="/shop"
                  />

                </div>
              )}
            </div>
            <div className="lg:basis-1/6">
              {isAboveLargeScreens ? (
                <Menu currentUser={data?.user} />
              ) : (
                <div
                  onClick={() => {
                    setMenuToggle((prev) => !prev);
                  }}
                  className="cursor-pointer"
                >
                  <MenuSvg />
                </div>
              )}
            </div>
          </div>
        </Container>
      </nav>
      {menuToggle && !isAboveLargeScreens && (
        <div
          className="fixed h-full w-[300px] top-0 z-50 right-0 bg-[#FFFFE0]
                flex flex-col gap-10 py-20 px-10 justify-between
                "
        >
          <div className="self-end w-10" onClick={() => setMenuToggle(false)}>
            <Close />
          </div>
          <div className="flex flex-col gap-5">
            <SmallNavComponent label="Home" to="/" onClick={()=>{setMenuToggle(false)}} />
            <SmallNavComponent label="Products" to="/shop" onClick={()=>{setMenuToggle(false)}} />
            {!data ? (
              <React.Fragment>
                <Link
                  href="/auth/Login"
                  className="border-b-[1px] border-b-[#D5D8DC] border-solid 
                            font-bold text-xl
                            "
                  onClick={() => {
                    setMenuToggle(false);
                  }}
                >
                  Login
                </Link>
                <Link
                  href="/auth/Register"
                  className="border-b-[1px] border-b-[#D5D8DC] border-solid 
                            font-bold text-xl
                            "
                  onClick={() => {
                    setMenuToggle(false);
                  }}
                >
                  Register
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div
                  className="border-b-[1px] border-b-[#D5D8DC] border-solid 
                                font-bold text-xl"
                  onClick={() => {
                    productModal.onOpen();
                    setMenuToggle(false);
                  }}
                >
                  Create a product
                </div>
              </React.Fragment>
            )}
          </div>
          <div className="flex gap-4 items-center justify-center">
            {data && (
              <React.Fragment>
                <Link href={`/cart`} className="w-10 mx-auto" onClick={()=>{setMenuToggle(false)}}>
                  <Cart />
                </Link>
                <div className=" border-r-[2px] border-r-black border-solid h-full" />
                <div className="w-10 mx-auto" onClick={()=>{
                  signOut()
                  setMenuToggle(false)
                  }}>
                  <TbLogout size={24} />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </>
  );
};

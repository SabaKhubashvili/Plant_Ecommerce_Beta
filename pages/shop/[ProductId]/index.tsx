import { WritableBanner } from "@/Components/Banners/WritableBanner";
import { SecondaryButton } from "@/Components/Buttons/SecondaryButton";
import { Container } from "@/Components/Container";
import { EmptyClient } from "@/Components/Empty/EmptyClient";
import { Counter } from "@/Components/Inputs/Counter";
import { ProductComponent } from "@/Components/Sections/Shop/Products/ProductComponent";
import isAlreadyInCart from "@/actions/isAlreadyInCart";
import { Dropdown_down, Loading } from "@/public/svg";
import { CartInterface, ProductInterface } from "@/types";
import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type ProductProps = {
  id: string;
  userId: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

function Index({
  title,
  id,
  category,
  description,
  image,
  price,
}: ProductProps) {
  const [recommended, setRecommended] = useState<ProductInterface[]>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const ProductId = router.query.ProductId as string;

  const { data: isInCart } = isAlreadyInCart(ProductId);

  useEffect(() => {
    if (id)
      axios
        .post("/api/product/getSameAsCategory", {
          category: category,
          currentPostId: id,
        })
        .then((res) => {
          setRecommended(res.data);
        })
        .catch((error) => {
          console.log(error.data.message);
        });
  }, [id]);

  const [cartData, setCartData] = useState<CartInterface>({
    quantity: 1,
  });

  const onQuantityPlus = () => {
    if (cartData.quantity < 100)
      setCartData((prev: CartInterface) => ({
        ...prev,
        quantity: prev.quantity + 1,
      }));
  };

  const onQuantityMinus = () => {
    if (cartData.quantity > 1)
      setCartData((prev: CartInterface) => ({
        ...prev,
        quantity: prev.quantity - 1,
      }));
  };

  if (!id) {
    return (
      <EmptyClient title="Oops..." desc="Something Wrong Happened" padding />
    );
  }

  const handleToCart = () => {
    setIsLoading(true);
    if (!isInCart.alreadyInCart) {
      axios
        .post("/api/product/toCart", {
          quantity: cartData.quantity,
          productId: id,
        })
        .then((res) => {
          router.push("/cart");
          toast.success(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      axios
        .delete(`/api/product/delete/${ProductId}`)
        .then((res) => {
          router.reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <section className="py-[8rem]">
        <Container>
          <div className="flex justify-between w-full  gap-20 h-fit lg:flex-row flex-col">
            <div className="lg:basis-1/2 relative h-full max-h-[30rem]">
              <Image
                alt="Product Image"
                src={image}
                className="object-cover max-h-[30rem] w-full rounded-lg "
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-start flex-col items-start lg:basis-1/2 gap-[24px] h-fit">
              {/* Description */}
              <div className="flex flex-col gap-[16px]">
                {/* Description topContent */}
                <div className="flex flex-col gap-[8px]">
                  {/* Description title and price */}
                  <div className="font-bold text-[32px]">{title}</div>
                  <p className="text-[14px] text-neutral-500">{category}</p>
                  <div className="text-[#343434] font-normal text-[32px]">
                    $ {price}
                  </div>
                </div>

                <div className="text-[#34343499]">{description}</div>
              </div>
              <div className="flex gap-4 items-center">
                {/* Quantity */}
                <div className="text-[20px] text-[#343434]">Quantity</div>
                <div className="w-fit">
                  <Counter
                    onPlus={onQuantityPlus}
                    onMinus={onQuantityMinus}
                    value={cartData.quantity}
                  />
                </div>
              </div>
              <SecondaryButton label="Buy now" full onClick={() => {}} />

              <SecondaryButton
                label={
                  isInCart
                    ? isInCart.alreadyInCart
                      ? "Remove from cart"
                      : `Add to Cart`
                    : "...Loading"
                }
                outline
                full
                onClick={handleToCart}
                disabled={isLoading}
              />
            </div>
          </div>
        </Container>

        <div className="mt-[4rem]">
          <WritableBanner
            body={
              <div className="2xl:w-[80%] md:w-full mx-auto">
                <h1 className="pb-6 font-semibold text-white flex items-center gap-4 text-[25px] md:px-0 px-2 ">
                  Care Guide
                  <Dropdown_down White />
                </h1>
                <div className="bg-white rounded-lg p-[24px] flex flex-col gap-10  w-full ">
                  <div className="">
                    <h3 className=" text-main font-semibold">
                      Weekly Watering
                    </h3>
                    <p className=" text-gray-main font-light">
                      Calatheas enjoy weekly waterings, allowing the top 2’ of
                      soil to dry out partially. In winter, we recommend
                      watering less frequently to prevent overwatering and root
                      rot. This plant is not very drought tolerant, and extended
                      periods of dryness will cause leaf edges to brown.
                    </p>
                  </div>
                  <div className="">
                    <h3 className=" text-main font-semibold">
                      Light Requirements
                    </h3>
                    <p className=" text-gray-main font-light">
                      Calatheas thrive in medium, indirect sunlight but tolerate
                      lower light levels too. Bright direct sunlight can cause
                      the stunning colours on their leaves to fade, with
                      prolonged exposure likely to burn and scorch their leaves.
                    </p>
                  </div>
                  <div className="">
                    <h3 className=" text-main font-semibold">
                      Weekly Watering
                    </h3>
                    <p className=" text-gray-main font-light">
                      Your Calathea will also appreciate being placed in a humid
                      environment, which you can create with by misting it
                      frequently, placing it close to other plants or on a
                      pebble tray partly filled with water. Calatheas thrive in
                      steamy bathrooms and kitchens.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>
      {recommended ? (
        <Container>
          <h2 className="font-medium text-[26px] text-center pb-10">
            Recomended Plants
          </h2>
          <div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-x-10  gap-y-4">
            {recommended.map((product) => (
              <ProductComponent
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </Container>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const item = ctx.params;
  const host = ctx.req.headers.host;

  const { ProductId: productId } = item as { ProductId: string };

  let product = {};
  
  try {
    const fetch = await (await axios.post(`http://${host}/api/product/getById`, { productId })).data
    product = fetch
  }catch {
    return {
      props: {}
    }
  }

  return {
    props: {
      ...product,
    },
  };
};

export default Index;

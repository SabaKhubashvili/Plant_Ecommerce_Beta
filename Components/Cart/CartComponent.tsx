import Image from "next/image";
import React from "react";
import { Counter } from "../Inputs/Counter";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

interface Props {
  id: string;
  title: string;
  image: string;
  price: number;
  index: number;
  quantity: number;
}

export const CartComponent = ({
  id,
  title,
  image,
  price,
  index,
  quantity,
}: Props) => {
  const router = useRouter();

  const [quantityIn, setQuantity] = React.useState<number>(quantity);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onPlus = () => {
    if (quantityIn < 100) setQuantity((prev) => prev + 1);
  };

  const onMinus = () => {
    if (quantityIn > 1) setQuantity((prev) => prev - 1);
  };

  const onRemove = () => {
    setIsLoading(true);
    try {
      axios
        .delete(`/api/product/delete/${id}`)
        .then((res) => {
          router.refresh();
          toast.success("Sucesfully deleted");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      toast.error("Something wrong happened");
    }
  };

  const updateQuantityFunc = () =>{
    if(quantity !== quantityIn){
      axios.post('/api/product/updateQuantity',{quantity:quantityIn,productId:id})
          .then(res=>{
            toast.success(res.data.message)
            router.refresh()
          })
          .catch(error=>{
            console.log(error);
          })
    }else{
      return null
    }
  }

  return (
    <tr
      className={`  ${
        isLoading ? "opacity-75" : "opacity-100"
      } gap-10 flex py-[24px] border-t-[1px] border-[#3434342c] border-b-[1px] border-solid items-center`}
    ><td className="basis-1/2 flex gap-[48px]   ">
        <li className="flex flex-col justify-center text-[#34343457] font-medium text-[24px]">
          {/* Count */}
          {index + 1}
        </li>
        <ul className="flex gap-[24px] items-center">
          <li className="flex-grow  w-[160px] h-[120px] ">
            <Image
              src={image}
              alt="Product"
              width={200}
              height={200}
              className="object-cover h-full w-full rounded-lg"
            />
          </li>
          <li className="flex flex-col gap-[16px] min-w-[9rem]">
            <h4 className="font-medium text-[24px] leading-[33px]">{title}</h4>
            <h6
              onClick={onRemove}
              className=" font-light text-[20px] cursor-pointer border-b-[1px] border-[#9a9898] w-fit"
            >
              Remove
            </h6>
          </li>
        </ul>
      </td>
      <td className="basis-[16.67%] text-center  min-w-[3rem] font-normal">$ {price}</td>
      {/* Price */}
      <td className="basis-[16.67%] text-center">
        <ul className="w-28 mx-auto list-none relative">
          <Counter value={quantityIn} onPlus={onPlus} onMinus={onMinus} />
          {
            quantity !== quantityIn &&
            <li onClick={updateQuantityFunc}  className="absolute -bottom-8 right-0 left-0 mx-auto cursor-pointer bg-main w-full rounded-lg">Change now</li>
          }
        </ul>
      </td>
      {/* Quantity */}
      <td className="basis-[16.67%] text-center  min-w-[3rem] font-normal ">$ {price * quantity} </td></tr>
  );
};

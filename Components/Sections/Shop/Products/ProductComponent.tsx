import { SecondaryButton } from '@/Components/Buttons/SecondaryButton'
import { ProductInterface } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ProductComponent = ({
    id,
    title,
    image,
    price
}:ProductInterface) => {
    const router = useRouter();
  return (
    <Link href={`/shop/${id}`} className='w-full bg-white shadow-Category rounded-lg h-[23rem] flex flex-col justify-between self-center '>
        <img src={`${image}`} className='w-full flex-grow rounded-t-lg object-cover max-h-[12rem]' alt="Product" draggable={false} />
        <div className='flex flex-col gap-3 mt-4  p-2   '>
            <h2 className='text-[#343434] font-bold text-[20px]'>
                {title}
            </h2>
            <p className='text-[20px]'>${price}</p>
            <SecondaryButton
            label='Buy'
            full
            onClick={()=>{router.push(`shop/${id}`)}}
            />
        </div>
    </Link>
  )
}

import { ProductInterface } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export const TopSellingComponent = ({image,title,price,id}:ProductInterface) => {
  return (
    <Link  href={`/shop/${id}`} className='flex flex-col gap-2 basis-1/3'>
        <Image src={image} alt="Image" className='w-full h-full rounded-lg object-cover border-[2px] border-solid'
        width={200}
        height={200}
        />
        <div className='flex flex-col gap-1'>
            <div className='font-medium text-[18px]'>
                {title}
            </div>
            <div className=' text-neutral-500 text-[18px] font-medium'>
                ${price}
            </div>
        </div>
    </Link> 
  )
}

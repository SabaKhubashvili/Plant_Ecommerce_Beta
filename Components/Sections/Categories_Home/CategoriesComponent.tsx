import { SecondaryButton } from '@/Components/Buttons/SecondaryButton'
import { HomeCategoryInterface } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'

export function CategoriesComponent ({
    title,
    desc,
    image,
    button,
    main
}:HomeCategoryInterface)  {
    const router = useRouter();

  return (
    <div className={`basis-1/3 flex flex-col gap-4 ${!main && 'lg:-mt-[8rem]' }` }>
        <img src={`/Images/Other/${image}.webp`} className='mx-auto' alt="" />
        <div className='flex flex-col items-center justify-center text-center gap-4'>
            <h2 className='font-bold'>
                {title}
            </h2>
            {
                desc &&
                (
                    <p className='text-[#1e1e1e80] w-[14rem]'>{desc}</p>
                )
            }
            {
                button && 
                (
                    <SecondaryButton 
                     label='Explore'
                     outline
                     onClick={()=>{router.push('/shop')}}
                    />
                )
            }
        </div>
    </div>
  )
}

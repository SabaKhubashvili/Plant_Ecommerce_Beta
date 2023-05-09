import { useRouter } from 'next/navigation'
import React from 'react'

interface Props{
    title:string,
    desc:string
    showreset?:boolean
    padding?:boolean
}

export const EmptyClient = ({title,desc,showreset,padding}:Props) => {
  const router = useRouter();
  return (
    <div className={`flex justify-center gap-3 items-center flex-col ${padding && 'py-[20rem]'} `}>
      <h2 className='text-4xl font-bold'>
        {title}
      </h2>
        <p className='font-light text-neutral-400 text-xl'>
          {desc}
        </p>
        {
          showreset &&
          <div className='py-2 px-12 border-[1px] border-gray-400 cursor-pointer' onClick={()=>{
            router.push('/shop')
            router.refresh()
          }}>
            Reset
          </div>
        }
    </div>
  )
}

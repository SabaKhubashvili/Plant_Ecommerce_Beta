import { Arrow_Right } from '@/public/svg'
import React from 'react'

interface Props{
    label:string
    onClick?:()=>void
    outline?:boolean
    full?:boolean
    disabled?:boolean
}

export const SecondaryButton = ({label,onClick,outline,full,disabled}:Props) => {
  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    className={`outline-none 
    ${disabled ? 'opacity-75' : 'opacity-100'}
    ${full && 'w-full text-center flex justify-center text-2xl'}
    ${outline ? 'bg-white border-[1px] border-gray-400' : 'bg-[#C1DCDC]'}
     transition-all duration-200 py-[12px] px-[24px] flex  items-center gap-2 rounded-lg font-medium w-fit disabled:cursor-not-allowed disabled:opacity-75 select-none
    `}>
        {label}
        { !full &&

          <div className='w-6'>
            <Arrow_Right/>
        </div>
        }
    </button>
  )
}

import React from 'react'

interface Props{
    onPlus?:()=>void
    onMinus?:()=>void
    value?:number
}

export const Counter = ({onPlus,onMinus,value}:Props) => {
  return (
    <div className='relative w-full border-[3px] border-[#343434] text-[20px] border-solid rounded-lg py-[4px] px-4 flex gap-4 items-center justify-between'>
        <div className='flex select-none cursor-pointer' onClick={onMinus}>-</div>
        <div className='text-[#343434] select-none max-w-[5rem] '>{value}</div>
        <div className='flex select-none cursor-pointer' onClick={onPlus}>+</div>
    </div>
  )
}

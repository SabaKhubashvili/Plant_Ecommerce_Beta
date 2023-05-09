import React from 'react'

interface Props{
    label:string,
    onClick:()=>void,
}

export const FilterComponent = ({label,onClick}:Props) => {
  return (
    <li className='ml-6 text-[#343434] font-normal select-none cursor-pointer hover:text-black' onClick={onClick}>
        {label}
    </li>
  )
}

import React from 'react'

interface Props{
    label:string,
    disabled?:boolean
    handleClick?:()=>void
}

export const MainButton = ({label,disabled,handleClick}:Props) => {
  return (
    <button onClick={handleClick} className='w-full text-[#455a5a] font-bold text-2xl bg-white py-3 rounded-md disabled:cursor-not-allowed disabled:opacity-75' disabled={disabled}>
        {label}
    </button>
  )
}

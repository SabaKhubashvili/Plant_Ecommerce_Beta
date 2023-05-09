import Link from 'next/link'
import React from 'react'

interface Props{
    label:string
    to:string
    onClick?:()=>void
}

export const SmallNavComponent = ({label,to,onClick}:Props) => {
  return (
    <Link
    className="border-b-[1px] border-b-[#D5D8DC] border-solid 
                  font-bold text-xl"
    href={to}
    onClick={onClick}
    >
    {label}
  </Link>
  )
}

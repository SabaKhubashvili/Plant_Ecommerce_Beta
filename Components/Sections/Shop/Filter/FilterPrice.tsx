import React from 'react'

interface Props{
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    value?:number
}

export const FilterPrice = ({onChange,value}:Props) => {
  return (
    <div className='p-4 bg-white flex justify-between items-center w-full shadow-Category rounded-lg' >
        <input type="number" onChange={onChange} className='w-full outline-none rounded-xl py-2 ' placeholder='Price' />
    </div>
  )
}

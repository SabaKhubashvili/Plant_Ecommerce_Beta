import { SearchSvg } from '@/public/svg'
import React from 'react'


interface Props{
  onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
  onSubmit?:()=>void
}

export const SecondartTextInput = ({onChange,onSubmit}:Props) => {
  return (
    <div className='relative z-10'>
      <input type="text" 
      className='w-full py-3 rounded-lg outline-none pr-[4rem] pl-[1rem] text-[#3e3d3d]'
      placeholder='What are you looking for?'
      onChange={onChange}
      />
      <div className='absolute right-3 top-[0.4rem] z-0 bg-[#C1DCDC] p-2 rounded-lg cursor-pointer'
      onClick={onSubmit}
      >
        <SearchSvg/>
      </div>
    </div>
  )
}

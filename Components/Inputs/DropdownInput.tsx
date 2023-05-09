import { Arrow_Right, Dropdown_down } from '@/public/svg'
import React, { useState } from 'react'

interface Props{
    onSelect:(data:string)=>void
    Indoor:string[],
    Medical:string[],
    Outdoor:string[],
    label:any
}

export const DropdownInput = ({
    label,
    onSelect,
    Indoor,
    Medical,
    Outdoor
}:Props) => {

    const [isToggled,setIsToggled] = useState<boolean>(false)

  return (
    <div className='w-full'>
        <div className=' w-full border-[1px] border-gray-400 p-4 rounded-lg font-medium cursor-pointer
        flex justify-between items-center relative
        ' onClick={()=>setIsToggled(prev=>!prev)} >
            {label}
            <Dropdown_down/>

        </div>
            { isToggled &&
                <div className='absolute md:w-fit w-full bg-white left-0 py-4 flex flex-col gap-2'>
                    <div className='relative   '>
                        <div className='flex justify-between items-center gap-16  cursor-pointer peer !px-4'>
                            Outdoor
                            <Dropdown_down/>
                        </div>
                            <div className='z-30 md:top-0 top-6 w-full  rounded-lg hidden peer-hover:flex flex-col gap-2 hover:bg-red  absolute md:-right-[13rem] hover:flex md:w-[13rem] bg-white p-2'>
                             {
                                Outdoor.map((product,index)=>(
                                    <div  key={index} className='flex gap-2 hover:gap-4 items-center transition-all duration-200'>
                                        <p  className='cursor-pointer' onClick={()=>{
                                            onSelect(product)
                                            setIsToggled(false)
                                            }}>{product}</p>

                                        <div className='w-4'>
                                        <Arrow_Right/>
                                        </div>
                                    </div>
                                ))
                             }
                            </div>
                        </div>
                        <div className='relative '>
                        <div className='flex justify-between items-center gap-16  cursor-pointer peer  px-4'>
                            Indoor
                            <Dropdown_down/>
                        </div>
                            <div className='z-30  rounded-lg w-full hidden peer-hover:flex flex-col gap-2 hover:bg-red absolute md:-right-[13rem] md:top-0 top-6 hover:flex md:w-[13rem] bg-white p-2'>
                             {
                                Indoor.map((product,index)=>(
                                    <div  key={index} className='flex gap-2 hover:gap-4 items-center transition-all duration-200'>
                                        <p  className='cursor-pointer' onClick={()=>{
                                            onSelect(product)
                                            setIsToggled(false)
                                            }}>{product}</p>

                                        <div className='w-4'>
                                        <Arrow_Right/>
                                        </div>
                                    </div>
                                ))
                             }
                            </div>
                        </div>
                        <div className='relative '>
                        <div className='flex justify-between items-center gap-16  cursor-pointer peer  px-4'>
                            Medical
                            <Dropdown_down/>
                        </div>
                            <div className=' md:top-0 top-6  z-30  w-full rounded-lg hidden peer-hover:flex flex-col gap-2 hover:bg-red absolute md:-right-[13rem] hover:flex md:w-[13rem] bg-white p-2'>
                             {
                                Medical .map((product,index)=>(
                                    <div  key={index} className='flex gap-2 hover:gap-4 items-center transition-all duration-200'>
                                        <p className='cursor-pointer'  onClick={()=>{
                                            onSelect(product)
                                            setIsToggled(false)
                                            }}>{product}</p>

                                        <div className='w-4'>
                                        <Arrow_Right/>
                                        </div>
                                    </div>
                                ))
                             }
                            </div>
                        </div>
                </div>
            }
    </div>
  )
}

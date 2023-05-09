import React from 'react'
import { CategoriesIndoor, CategoriesMedical, CategoriesOutdoor } from '@/constants'
import { Dropdown_Right, Dropdown_down } from '@/public/svg'
import { FilterComponent } from './FilterComponent'
interface Props{
    onClick:(value:string)=>void
}

export const FilterCategory = ({onClick}:Props) => {
    const [filterMenus,setfilterMenus] = React.useState({
        indoor:false,
        outdoor:false,
        medical:false
    })
    
  return (
    <div className='flex flex-col gap-4 bg-white w-full py-4 px-6 shadow-Category rounded-lg'>
    <div>
        <h4 className='text-[20px]'>All Categories</h4>
        <p className='text-[14px] text-[#34343499]'>Plants on Sale</p>
    </div>
            
            <ul className='ml-3'>
                <li className='font-semibold text-[16px] select-none cursor-pointer flex items-center gap-2' onClick={()=>{setfilterMenus((prev)=>({...prev,indoor:!prev.indoor}))}}>
                {
                        filterMenus.indoor ? 
                            <Dropdown_down/>
                        :
                            <Dropdown_Right/>
                    }
                    
                    Indoor Plants
                </li>
                {
                    filterMenus.indoor &&
                    CategoriesIndoor.map((category,index)=>(
                        
                        <FilterComponent
                        key={index}
                        label={category}
                        onClick={()=>{
                            onClick(category)
                            setfilterMenus(prev=>({
                                ...prev,
                                indoor:false
                            }))
                        }
                    }
                        />
                        ))
                    }
            </ul>
            <ul className='ml-3'>
                <li className='font-semibold text-[16px] select-none cursor-pointer flex items-center gap-2' onClick={()=>{setfilterMenus((prev)=>({...prev,outdoor:!prev.outdoor}))}}>
                {
                        filterMenus.outdoor ? 
                            <Dropdown_down/>
                        :
                            <Dropdown_Right/>
                    }
                    
                    Outdoor Plants
                </li>
                {
                    filterMenus.outdoor &&
                    CategoriesOutdoor.map((category,index)=>(
                        
                        <FilterComponent
                        label={category}
                        onClick={()=>{
                            onClick(category)
                            setfilterMenus(prev=>({
                                ...prev,
                                outdoor:false
                            }))
                        }
                    }
                        key={index}
                        />
                        ))
                    }
            </ul>
            <ul className='ml-3'>
                <li className='font-semibold text-[16px] select-none cursor-pointer flex  items-center gap-2' onClick={()=>{setfilterMenus((prev)=>({...prev,medical:!prev.medical}))}}>
                    {
                        filterMenus.medical ? 
                            <Dropdown_down/>
                        :
                            <Dropdown_Right/>
                    }
                    
                    Medical Plants
                </li>
                {
                    filterMenus.medical &&
                    CategoriesMedical.map((category,index)=>(
                        
                        <FilterComponent
                        label={category}
                        onClick={()=>{
                            onClick(category)
                            setfilterMenus(prev=>({
                                ...prev,
                                medical:false
                            }))
                        }
                    }
                        key={index}
                        />
                        ))
                    }
            </ul>
</div>
  )
}

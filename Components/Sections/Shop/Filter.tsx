import React, { useState,useCallback } from 'react'

import { FilterCategory } from './Filter/FilterCategory'
import { FilterPrice } from './Filter/FilterPrice'
import { SecondaryButton } from '@/Components/Buttons/SecondaryButton'
import { FilterInterface } from '@/types'
import queryString from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'

export const Filter = () => {
    const [category,setCategory] = useState<string>()
    const [price,setPrice] = useState<number>()

    const params = useSearchParams()
    const router = useRouter()
    const onSubmit = useCallback(()=>{

      let currentQuery = {}

      if (params) {
        currentQuery = queryString.parse(params.toString())
      }
      const updatedQuery:any = {
        ...currentQuery,
        category,
        price
      }

      const url = queryString.stringifyUrl({
        url:'/shop',
        query:updatedQuery
      },{
        skipNull:true
      })

      router.push(url)
    },[
      params,
      category,
      price,
      router
    ])
      
  return (

        <div className='flex flex-col gap-8 items-center w-full '>
           
                   <FilterCategory
                   onClick={(category:string)=>{setCategory(category)} }
                   />
                   <FilterPrice 
                   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPrice(e.target.valueAsNumber)} }/>
                   <SecondaryButton
                   onClick={onSubmit}
                   label='Filter'
                   full
                   />
        </div>

  )
}

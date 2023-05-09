import React, { useState } from 'react'
import { Container } from '../Container'
import { SecondartTextInput } from '../Inputs'
import queryString from 'query-string'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

export const MainBanner = () => {
  
  const [searchData,setSearchData] = useState<string>('')
  const router = useRouter()

  const onSearch = () =>{
    if(searchData.length < 1){
     return toast.error('Enter Something')
    }
    const query = {
      name:searchData
    }
    const url = queryString.stringifyUrl({
      url:'/shop',
      query:query
    },{
      skipNull:true
    })

    router.push(url)
  }

  return (
    <div className="w-full pt-40">
    <Container>
      <div
        className=" bg-[#C1DCDC] w-full 
        flex justify-between  rounded-lg px-10 "
      >
        <div className="xl:basis-1/2 flex flex-col gap-10  pb-[8rem] pt-[4rem]">
          <div className="font-extrabold xs:text-7xl text-5xl sm:w-[30rem] h-fit">
            Buy your dream plants
          </div>
          <div className="flex flex-col justify-between  sm:w-[15rem] xs:flex-row">
            
            <div>
              <h4 className="text-[32px] font-semibold">50+</h4>
              <p>Plant Species</p>
            </div>
            <div className=" border-r-[1px] border-r-black border-solid" />
            <hr  />
            <div>
              <h4 className="text-[32px] font-semibold">100+</h4>
              <p>Customers</p>
            </div>
             
          </div>
          <div className="sm:w-[25rem] ">
            <SecondartTextInput
            onChange={(e)=>{setSearchData(e.target.value)}}
            onSubmit={onSearch}
            />
          </div>
        </div>
        <div className="basis-1/2 relative flex-col justify-end items-center xl:flex hidden 
        ">
            <div className="text-white relative z-10  before:z-[0] before:absolute before:content-MainBannerBackg before:w-auto before:h-auto before:bottom-[-5px]">
              <img src="/Images/MainBannerPlant.webp" alt="" className="relative z-10
              " />
              <div>
                <img src="/Images/Arrow_Left.webp" alt="Arrow" className='top-4 absolute -right-24' />
                <img src="/Images/Arrow_Right.webp" alt="Arrow" className='absolute -left-[11rem] bottom-20' />
              </div>
            </div>
        </div>
      </div>
    </Container>
  </div>
  )
}

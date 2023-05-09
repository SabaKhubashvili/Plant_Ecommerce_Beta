import React from 'react'
import { Container } from '../../Container'
import { SecondaryButton } from '../../Buttons/SecondaryButton'
import { TopSellingComponent } from './TopSellingComponent'
import getRecentProducts from '@/actions/getRecentProducts'
import { ProductInterface } from '@/types'
import { Loading } from '@/public/svg'
import { useRouter } from 'next/navigation'
import { EmptyClient } from '@/Components/Empty/EmptyClient'

export const TopSelling = () => {
    const router = useRouter()
    const {data,isLoading} = getRecentProducts()
if(isLoading){
    return <Loading/>
}
if(data.length <= 0){
    return <div className='pt-16'>
        <EmptyClient 
    title="There isn't any avaiable products"
    desc='Try and create some'
    />
    </div>
}
  return (
    <section className='w-full pt-16 '>
            <Container>
                <div className='flex xl:flex-row flex-col justify-between xl:items-center xl:gap-0 gap-8 '>
                    <div className='flex flex-col gap-3 xl:basis-1/6 self-start'>
                        <h2 className='text-[32px] font-bold'>Recent plants</h2>
                        <p className=' text-neutral-400'>Easiest way to healthy life by buying your favorite plants </p>
                        <SecondaryButton
                        label='See more'
                        onClick={()=>router.push('/shop')}
                        />
                    </div>

                <div className='flex flex-grow xl:justify-around xl:px-20 lg:justify-between xs:flex-row flex-col justify-center  gap-x-10 gap-y-2  '>

                    {
                        data.map((product:ProductInterface)=>(
                            <TopSellingComponent  key={product.id}
                                {...product}
                            />
                            ))
                        }
                    </div>
                </div>
               
            </Container>
    </section>
  )
}

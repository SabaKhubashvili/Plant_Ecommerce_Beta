import { Container } from '@/Components/Container'
import { AboutUsConst } from '@/constants'
import React from 'react'
import { AboutUsComponent } from './AboutUsComponent'

export const AboutUs = () => {
  return (
    <section className='w-full pt-20'>
        <Container>
            <div className='flex justify-center flex-col gap-10'>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='font-bold text-[32px] '>
                        About us
                    </h2>
                    <p className='text-[#1e1e1e80]'>Order now and appreciate the beauty of nature</p>
                </div>
                <div className='flex lg:justify-between justify-center  items-center gap-x-5 gap-y-4 lg:flex-nowrap flex-wrap md:flex-row flex-col '>
                    {
                        AboutUsConst.map((about,index)=>(
                            <AboutUsComponent
                            key={index}
                            {...about}
                            />
                        ))
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}

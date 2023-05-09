import { Container } from '@/Components/Container'
import { homeCategoryConst } from '@/constants'
import React from 'react'
import { CategoriesComponent } from './CategoriesComponent'

export const Categories = () => {
  return (
    <section className='w-full pt-16'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='text-center'>
                    <h2 className='text-[32px] font-bold'>Categories</h2>
                    <p className='text-[#1e1e1e80] text-[18px]'>Find what you are looking for</p>
                </div>
                <div className='bg-[#C1DCDC] w-full pt-[48px] pb-[70px]'>
                    <Container>
                        <div className='flex justify-between gap-10 lg:flex-row flex-col'>
                            {
                                homeCategoryConst.map((category,index)=>(
                                    <CategoriesComponent
                                        key={index}
                                        {...category}
                                    />
                                ))
                            }
                        </div>
                    </Container>
                </div>
            </div>
    </section>
  )
}

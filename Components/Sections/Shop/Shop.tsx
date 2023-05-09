import { Container } from '@/Components/Container'
import React from 'react'
import { Filter } from './Filter'
import { Products } from './Products/Products'

export const Shop = () => {

    
  return (
    <section className='w-full pt-16'>
        <Container>
            <div className='flex lg:items-start items-center justify-between gap-16 lg:flex-row flex-col '>
                <div className='lg:basis-1/4 w-full'>
                    <Filter/>
                </div>
                <div className='lg:basis-3/4'>
                    <Products/>    
                </div>
            </div>
        </Container>
    </section>
  )
}

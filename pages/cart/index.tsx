import { BillingDetails, Cart } from '@/Components/Cart'
import { Container } from '@/Components/Container'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <React.Fragment>
        <Head>
            <title>Cart |</title>
        </Head>
    <Container>
        <section className='mt-[6rem] flex flex-col justify-center gap-5'>
            <Cart/>
            <BillingDetails/>
        </section>
    </Container>
    </React.Fragment>
  )
}

export default index
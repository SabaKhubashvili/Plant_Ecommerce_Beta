import { MainBanner } from '@/Components/Banners/MainBanner'
import { Shop } from '@/Components/Sections/Shop/Shop'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Shop</title>
      </Head>

      <div className='mt-[6rem]'>
      <MainBanner
        outline
        title='Products'
        />
      </div>
      <Shop/>
    </React.Fragment>
  )
}

export default index
import React from 'react'

interface Props{
    body:React.ReactElement
}

export const WritableBanner = ({body}:Props) => {
  return (
    <section className='bg-[url("../public/Images/Banners/SingleProductBanners.webp")] bg-[#318888] pt-[70.5px] md:px-[120px] pb-[50.5px]
    '>
        {body}
    </section>
  )
}

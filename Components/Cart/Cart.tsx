import React from 'react'
import { CartComponent } from './CartComponent'
import getCartData from '@/actions/getCartData'
import { ProductInterface } from '@/types'
import { Loading } from '@/public/svg'

export const Cart = () => {

    const {data,isLoading,isError} = getCartData()



    
  return (
    <section className=' bg-white  py-[16px] rounded-[16px] px-[24px]
    flex flex-col gap-10
    '>
        <div className='p-[8px] flex flex-col gap-y-[15px] justify-center items-center w-fit mx-auto'>
            {/* Title */}
            <h2 className='font-bold text-[48px] leading-[55px] font-Unna'>
            Your Cart Items
            </h2>
            <hr className='w-[60%] border-[#343434] rounded-lg ' />
        </div>
        {!isLoading && data ?

        
        <section className='overflow-x-auto'>

        <table className='w-full pt-[4rem] '>
        {/* Table */}
            <thead className='w-full'>
            <tr className='flex pb-[18px] w-full'>
                    <th className='basis-1/2  leading-[27px] font-bold text-start'>Product</th>
                    <th className='basis-[16.67%] leading-[27px] text-center font-bold'>Price</th>
                    <th className='basis-[16.67%] leading-[27px] text-center font-bold'>Quantity</th>
                    <th className='basis-[16.67%] leading-[27px] text-center font-bold'>Final</th>
            </tr>
            </thead>


            <tbody>
                {
                    data.map((cart:any,index:number)=>(
                        <CartComponent key={index}  index={index} {...cart.product} quantity={cart.quantity} />
                    ))
                    }
            </tbody>
        </table>
        <div className='py-5 flex justify-end'>
            <div className='md:w-[484px] w-full '>

                <div className='flex flex-col gap-5 border-b-[1px] border-[#34343466] border-solid w-full pb-[24px]'>
                    <div className='flex justify-between'>
                        <h4>Subtotal</h4>
                        <h4>$99.0</h4>
                    </div>
                    <div className='flex justify-between'>
                        <h4>Shipping</h4>
                        <h4>$10</h4>
                    </div>
                </div>
                <div className='flex justify-between font-semibold pt-[16px]'>
                    <h4>Total</h4>
                    <h4>$99.0</h4>
                </div>
            </div>
        </div>
    </section>
    :
    <Loading/>
}
    </section>
  )
}

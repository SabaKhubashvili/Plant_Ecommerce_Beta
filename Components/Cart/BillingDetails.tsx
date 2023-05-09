import React, { useState } from 'react'
import { BillingTextInput } from '../Inputs'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { SecondaryButton } from '../Buttons/SecondaryButton'

export const BillingDetails = () => {
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const{
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<FieldValues>({
      defaultValues:{
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        streetadress:'',
        streetnumber:'',
        city:'',
        country:'',
        differentareas:false
      }
    })


    
    const onSubmit: SubmitHandler<FieldValues> = (data:any) => {

      setIsLoading(true)
      console.log(data);
      
    };
    

  return (

      <section className='w-full rounded-lg bg-white p-[24px]'>
          <div className='flex  xl:flex-row flex-col gap-[120px] justify-between'>
            
            <div className='flex flex-col gap-[32px] basis-1/2  '>
              {/* Left Section */}
              <h2 className='text-[24px] font-bold'>Billing Details</h2>
              <div className='flex gap-[16px] sm:flex-row flex-col '>
                <BillingTextInput 
                id='firstname' 
                label='First Name*' 
                placeholder='Saba'
                disabled={isLoading}
                register={register} 
                errors={errors} 
                required
                />
                <BillingTextInput 
                id='lastname' 
                label='Last name*' 
                placeholder='Khubashvili'
                disabled={isLoading}
                register={register} 
                errors={errors} 
                required
                />
              </div>
              
              <div className='flex gap-[16px] sm:flex-row flex-col'>
                <BillingTextInput 
                id='phone' 
                label='Phone*' 
                placeholder='+995'
                disabled={isLoading}
                register={register} 
                errors={errors} 
                required
                />
                <BillingTextInput 
                id='email' 
                label='Email Address*' 
                type='email'
                placeholder='khubashvili.saba12@gmail.com'
                disabled={isLoading}
                register={register} 
                errors={errors} 
                required
                />
              </div>
              <div className='flex gap-[16px]'>
                <BillingTextInput 
                id='streetadress' 
                label='Street Address*' 
                placeholder='House No./ Apartment No./ Plot No.'
                disabled={isLoading}
                register={register} 
                errors={errors} 
                required
                full
                secondaryInputPlaceId='streetnumber'
                secondaryInputPlaceholder='Street Name/ Locality'
                />
              </div>
              <div className='flex gap-[16px] sm:flex-row flex-col'>
                <BillingTextInput 
                id='city' 
                label='City*' 
                placeholder='Tbilisi'
                disabled={isLoading}
                register={register} 
                errors={errors} 
                required
                />
                <BillingTextInput 
                id='country' 
                label='Country*' 
                placeholder='Georgia'
                disabled={isLoading}
                register={register} 
                errors={errors} 
                required
                />
              </div>
                <div className='flex flex-col gap-[40px]'>
                  <h2 className='text-[24px] font-bold'>Billing Details</h2>
                  <div className='flex flex-col gap-[16px]'> 
                    <div className='flex gap-[8px]'>

                      <input type="checkbox"  {...register('otherpay')}    className='border-black' disabled={isLoading} />
                      <h6 className='font-semibold text-[16px]'>Pay by Razorpay   Cards, NetBanking, Wallet & UPI</h6>
                    </div>
                    <div className='text-[12px] xs:w-[406px] w-full'>
                    Your personal data will be used to process your order
                    , support your experience throughout this
                     website, and for other purposes described in our Privacy Policy
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex flex-col basis-1/2 justify-between'>
              {/* Right Section */}
              <div className='flex flex-col  gap-[40px]'>

                  <h2 className='text-[24px] font-bold leading-[24px] gap-[20px] flex items-center'>
                    <input type="checkbox" {...register('differentareas')}   className='border-black'   disabled={isLoading} />
                    Ship to a Different Address
                    
                  </h2>
                    <div className='w-full '>
                      <BillingTextInput 
                        id='notes' 
                        label='Order notes (optional)' 
                        placeholder='Order notes (optional)'
                        disabled={isLoading}
                        register={register} 
                        errors={errors} 
                        full
                        optional
                        />
                    </div>
                  </div>

              <div className=' flex justify-end items-end pt-[10px]  '>

              <SecondaryButton full label='Place Order' onClick={handleSubmit(onSubmit)}/>
              </div>
            </div>
          </div>
      </section>

  )
}

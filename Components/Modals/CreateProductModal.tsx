import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Modal } from './Modal'
import { UseCreateProductModal } from '@/hooks/UseCreateProductModal'
import { DropdownInput, ImageInput, TextInput } from '../Inputs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CategoriesIndoor, CategoriesMedical, CategoriesOutdoor } from '@/constants';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

enum Pages{
  Categories = 1,
  Price = 2,
  Image = 3
}

export const CreateProductModal = () => {
    const useProductModal = UseCreateProductModal();
    const Router = useRouter()
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [page,setPage] = useState<Pages>(Pages.Categories)
    const{
      register,
      handleSubmit,
      setValue,
      reset,
      formState:{
        errors
      }, watch,
    } = useForm<FieldValues>({
      defaultValues:{
        title:'',
        desc:'',
        category:'',
        price:0,
        image:''
      }
    })
    const categorie = watch('category');
    const image = watch('image')

    const categorieLabel = useMemo(()=>{
     if(categorie.length > 0){
      return categorie
     }else{
      return 'Choose a categorie'
     }
    },[categorie])

    
    const onNext = () =>{

        setPage(prev=>prev+1)
      }
    const onPrevious = () => {
      setPage(prev=>prev-1)
    }

    const ActionLabel = useMemo(()=>{
      if(page === Pages.Image){
        return 'Create'
      }
      else{
        return 'Next'
      }
    },[page])

    const SecondaryLabel = useMemo(()=>{
      if(page === Pages.Categories){
        return undefined;
      }
      else{
        return 'Previous'
      }
    },[page])

    const setCustomValue = (id:string,value:any) =>{
      setValue(id,value,{
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
    }

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
      if(page !== Pages.Image){
        return onNext();
      }
      setIsLoading(true)

      axios.post('api/product/createProduct',data)
          .then(res=>{
            useProductModal.onClose()
            reset();
            toast.success('Succesfully created product');
            Router.refresh()
            setPage(Pages.Categories)
          }) .catch((error) => {
            toast.error(error.response.data.message);
            
          })
          .finally(()=>{
            setIsLoading(false)
          })
      
        
    }

    let bodyContent = (
        <div className='flex flex-col gap-2'>
          <div>
              <TextInput
              id='title'
              label='Title'
              errors={errors}
              required
              disabled={isLoading}
              register={register}
              />
          </div>
          <div>
              <TextInput
              id='desc'
              label='Description'
              errors={errors}
              disabled={isLoading}
              required
              register={register}
              big
              />
          </div>
          <div>
            <DropdownInput
              Indoor={CategoriesIndoor}
              Outdoor={CategoriesOutdoor}
              Medical={CategoriesMedical}
              label={categorieLabel}
              onSelect={(data:string)=>{setCustomValue('category',data)
              }}
            />
          </div>
        </div>
    )
    if(page === Pages.Price){
      bodyContent = (
        <div className='flex flex-col gap-2'>
            <div className=''>
              <TextInput
              id='price'
              label='Price'
              errors={errors}
              required
              disabled={isLoading}
              register={register}
              type='number'
              />
            </div>
        </div>
      )
    }
    if(page === Pages.Image){
      bodyContent = (
        <div className='w-full'>
            <ImageInput
              onChange={(value)=>{setCustomValue('image',value)}}
              value={image}
              />
        </div>
      )
    }
  return (
    <Modal
        isOpen={useProductModal.isOpen}
        onClose={useProductModal.onClose}
        title='Create a product'
        subTitle='People can buy your plants'
        actionLabel={ActionLabel}
        mainAction={handleSubmit(onSubmit)}
        secondaryAction={onPrevious}
        secondaryLabel={SecondaryLabel}
        bodyContent={bodyContent}
        disabled={isLoading}
    />
  )
}

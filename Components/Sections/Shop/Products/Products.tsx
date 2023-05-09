import React,{useEffect} from 'react'
import { ProductComponent } from './ProductComponent'
import { ProductInterface } from '@/types'
import getProducts from '@/actions/getProducts'
import { EmptyClient } from '@/Components/Empty/EmptyClient'
import { Loading } from '@/public/svg'
import { useRouter } from 'next/router'

export const Products = () => {
  const [filteredProducts,setFilteredProducts] = React.useState<ProductInterface[]>()
  const router = useRouter()
  const category = router.query.category as string
  const price = router.query.price as string
  const name = router.query.name as string
  const {data,isLoading,isError} = getProducts() 

  useEffect(()=>{
    
    if(data){

      if(price || category || name){

        
        let filtered = data.filter((product:ProductInterface)=>{
          if(price && category && product.category){
            return product.category.includes(category) && product.price <= parseInt(price)
          }
          if(category && product.category){
            return product.category.includes(category)
          }
          if(price){
            return product.price <= parseInt(price)
        }
        if(name){
          return product.title.includes(name)
        }
       
      })
      setFilteredProducts(filtered)
    }



    }
    

  },[category,price,data])
  
  
  if (isLoading) {
    return <Loading/>
  }

  if(data.length <= 0){
    return <EmptyClient
      title='Oops'
      desc='There are no products'
      showreset
    />
  }

  
  
  return (
    <div className='w-full grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-x-10  gap-y-4 '>
      {
        filteredProducts ?

          filteredProducts.map((product:ProductInterface)=>(
            <ProductComponent
            key={product.id}
            {...product}
            />
            ))
        :
          data.map((product:ProductInterface)=>(
              <ProductComponent
              key={product.id}
              {...product}
              />
          ))
      }
        
    </div>
  )
}

import React from 'react'


interface Props{
    children:React.ReactNode
}

export const Container = ({children}:Props) => {
  return (
    <div className='max-w-[1800px] max-auto xl:px-20 lg:px-16 md:px-10 sm:px-6 px-2 mx-auto '>
        {children}
    </div>
  )
}

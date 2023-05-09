
import { CreateProductModal } from '@/Components/Modals/CreateProductModal'
import { Navbar } from '@/Components/Navbar'
import { Footer } from '@/Components/Sections'
import '@/styles/globals.css'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>

      <Toaster/>
      <CreateProductModal/>

      <Navbar/>
      
      <Component {...pageProps} />

      <Footer/>
      
      </QueryClientProvider>
    </SessionProvider>
  
    )
}
export default MyApp
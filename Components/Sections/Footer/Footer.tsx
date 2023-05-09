import { Container } from '@/Components/Container'
import { Facebook, Linkedin, Logo, Gmail, Github } from '@/public/svg'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <section className='w-full py-[48px] bg-[#C1DCDC] mt-16 '>
        <Container>
            <div className='w-full 
            flex justify-between
            lg:flex-row flex-col lg:gap-0 gap-10
            '>
                <div className='flex flex-col gap-5 flex-grow'>
                    <Logo/>

                    <p className=' text-[#1e1e1e80] font-medium w-40'>
                     We help you find your dream plant
                    </p>
                    <div className='flex gap-5'>
                        <a target='_blank' href='https://www.facebook.com/profile.php?id=100011187067102' className='border-[1px] border-solid border-[#1e1e1e80] p-3 rounded-full w-[3rem] flex items-center justify-center'>
                            <Facebook/>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/sabakhubashvili/' className='border-[1px] border-solid border-[#1e1e1e80] p-3 rounded-full w-[3rem] flex items-center justify-center'>
                            <Linkedin/>
                        </a>
                        <a target='_blank' href='mailto:khubashvili.saba12@gmail.com' className='border-[1px] border-solid border-[#1e1e1e80] p-3 rounded-full w-[3rem] flex items-center justify-center'>
                            <Gmail/>
                        </a>
                        <a target='_blank' href='https://github.com/SabaKhubashvili' className='border-[1px] border-solid border-[#1e1e1e80] p-3 rounded-full w-[3rem] flex items-center justify-center'>
                            <Github/>
                        </a>
                    </div>
                </div>

                <div className='flex gap-10 xxs:flex-row flex-col '>
                    <ul className='flex flex-col gap-4'>
                        <li className='font-bold'>Information</li>
                        <Link href={'/about'} className='text-[#1e1e1e80]' >About</Link>
                        <Link href={'/shop'} className='text-[#1e1e1e80]' >Product</Link>
                        <Link href={'/blog'} className='text-[#1e1e1e80]' >Blog</Link>
                    </ul>
                    <ul className='flex flex-col gap-4'>
                        <li className='font-bold'>Company</li>
                        <Link href={'/'} className='text-[#1e1e1e80]' >Community    </Link>
                        <Link href={'/'} className='text-[#1e1e1e80]' >Career</Link>
                        <Link href={'/'} className='text-[#1e1e1e80]' >Our story</Link>
                    </ul>
                    <ul className='flex flex-col gap-4'>
                        <li className='font-bold'>Contact</li>
                        <Link href={'/contact'} className='text-[#1e1e1e80]' >Getting Started</Link>
                        <Link href={'/contact'} className='text-[#1e1e1e80]' >Pricing</Link>
                        <Link href={'/contact'} className='text-[#1e1e1e80]' >Resources</Link>
                    </ul>
                </div>  

            </div>
            <div className='w-full text-[#1e1e1e80] pt-10 font-medium leading-[27px]'>
                2023 all Right Reserved Term of use GREENMIND
            </div>
        </Container>
    </section>
  )
}

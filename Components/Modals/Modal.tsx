import React, { useCallback, useEffect, useState } from 'react'
import { SecondaryButton } from '../Buttons/SecondaryButton'
import { Close } from '@/public/svg'

interface Props{
    isOpen:boolean
    title:string,
    subTitle:string,
    bodyContent:React.ReactElement,
    actionLabel:string,
    mainAction:()=>void,
    secondaryAction?:()=>void,
    secondaryLabel?:string
    onClose:()=>void,
    disabled?:boolean
}

export const Modal = ({
    isOpen,
    title,
    subTitle,
    bodyContent,
    actionLabel,
    mainAction,
    secondaryAction,
    secondaryLabel,
    disabled,
    onClose
}:Props) => {

    const [showModal,setShowModal] = useState<boolean>(isOpen)

    useEffect(()=>{
        setShowModal(isOpen)
    },[isOpen])

    const handleSubmit = useCallback(()=>{
        if(disabled){
            return null;
        }
        mainAction()
    },[disabled,mainAction])

    const handleSecondaryAction = useCallback(()=>{
        if(disabled){
            return null;
        }
        if(!secondaryAction || !secondaryLabel){
            return null;
        }

        secondaryAction()
    },[disabled,secondaryAction,secondaryLabel])

    const handleClose = useCallback(()=>{
        if(disabled){
            return null;
        }

        setShowModal(false);

        setTimeout(()=>{
            onClose()
        },300)
    },[disabled,onClose])
    
  if (!isOpen) {
    return null;
  }


  return (
    <div className='fixed inset-0 z-[100]  outline-none bg-neutral-700/70
    flex justify-center items-center
    '>
        <div className='relative 2xl:w-3/6 xl:w-3/5 md:w-3/4 w-full mx-auto my-6 md:h-auto'>
            <div className={` 
           translate
           duration-300
           h-full
           ${showModal ? 'translate-y-0' : 'translate-y-full'}
           ${showModal ? 'opacity-100' : 'opacity-0'}

            `}>
                <div className='translate h-full md:h-auto border-0 rounded-lg 
                     shadow-lg relative flex flex-col w-full bg-white focus:outline-none gap-3 p-4'>
                        <div className='absolute right-6 top-6 w-6 cursor-pointer' onClick={()=>{handleClose()}} >
                            <Close/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[18px] font-semibold '>
                                {/* Title */}
                                {title}
                            </div>
                            <div className='font-medium text-neutral-400 text-[14px]'>
                                {subTitle}
                            </div>
                        </div>
                        {bodyContent}

                        <div className='w-full flex gap-2'>
                            {
                                secondaryAction && secondaryLabel && (
                                    <SecondaryButton 
                                        label={secondaryLabel}
                                        onClick={handleSecondaryAction}
                                        outline
                                        full
                                    />
                                )
                            }
                            <SecondaryButton
                                label={actionLabel}
                                onClick={handleSubmit}
                                disabled={disabled}
                                full
                            />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

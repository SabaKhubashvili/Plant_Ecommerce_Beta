import { create } from 'zustand'


interface ProductModalStore{
    isOpen:boolean
    onOpen:()=>void
    onClose:()=>void
}

export const UseCreateProductModal = create<ProductModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>{set({isOpen:true})},
    onClose:()=>{set({isOpen:false})}
}))
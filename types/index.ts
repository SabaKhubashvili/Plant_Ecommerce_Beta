export interface ProductInterface{
    id: string
    userId?:string
    image:string
    title:string
    price:number
    category?:string 
    description?:string
    createdAt?:Date 
    updatedAt?:Date

}
export interface AboutHomeComponent{
    icon:string,
    title:string,
    desc:string
}
export interface HomeCategoryInterface{
    image:string,
    title:string,
    desc?:string
    button?:boolean
    main?:boolean
}
export interface ReviewsInterface{
    name:string,
    review:string ,
    profession:string,
    rating:number,
    image?:string,
}
export interface CategoryInterface{
    label:string,
}
export interface FilterInterface{
    price?:number,
    category?:string
}

export interface CartInterface{
    quantity:number
}
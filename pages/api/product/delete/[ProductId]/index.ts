import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/Libs/prismadb'
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    if(req.method !== 'DELETE'){
        return res.status(405).json({message:'Method not allowed'}) 
    }
    const ProductId = req.query.ProductId as string

    const session = await getServerSession(req,res,authOptions)
    if(!session || !session.user || !session.user.email){
        return res.status(501).json({message:'Unathorized'})
    }

    const user = await prisma.user.findUnique({
        where:{
            email:session.user.email
        }
    })
    if(!user){
        return res.status(501).json({message:'Unathorized'})
    }

    if(!ProductId){
        return res.status(502).json({message:'Not enough data'})
    }

    const deleteProduct = await prisma.cart.deleteMany({
        where:{
            userId:user.id,
            productId:ProductId
        }
    })

    if(!deleteProduct){
        return res.status(404).json({message:'Product not found'})
    }

    return res.status(200).json({message:"Succefully removed from cart"})
}
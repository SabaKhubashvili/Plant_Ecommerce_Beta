import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import prisma from '@/Libs/prismadb'

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    if(req.method !== "POST"){
        return res.status(405).json({message:'Method not allowed'}) 
    }

    const session =  await getServerSession(req,res,authOptions)
    const{
        productId
    } = req.body

    if(!productId){
        return res.status(502).json({message:'Not enough data'})
    }
    if(!session || !session.user || !session.user.email ){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const userData = await prisma.user.findUnique({
        where:{
            email: session.user.email
        }
    })
    if(!userData){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const cartData = await prisma.cart.findFirst({
        where:{
            productId,
            userId:userData.id
        }
    })
    if(cartData){
        return res.status(200).json({alreadyInCart:true})
    }else{
        return res.status(200).json({alreadyInCart:false})
    }

}
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import prisma from '@/Libs/prismadb'

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    if(req.method !== "GET"){
        return res.status(405).json({message:'Method not allowed'}) 
    }
    const session = await getServerSession(req,res,authOptions);

    if(!session || !session.user || !session.user.email ){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const userEmail = session.user.email as string

    const userData = await prisma.user.findUnique({
        where:{
            email: userEmail
        }
    })
    if(!userData){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const cartData = await prisma.cart.findMany({
        where:{
            userId:userData.id,
            
        },
        select:{
            product:true,
            quantity:true
        }
    })

    return res.status(200).json(cartData)
    
}
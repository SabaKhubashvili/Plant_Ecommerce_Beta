import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/Libs/prismadb'
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
){

    if(req.method !== 'POST'){
         return res.status(405).json({message:'Method not allowed'})
    }
    
    const {
        quantity,
        productId
    } = req.body

    if(!productId || !quantity){
        return res.status(502).json({message:'Not enough data'})
    }

    const session = await getServerSession(req,res,authOptions)

    if(!session || !session.user || !session.user.email){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const userData = await prisma.user.findUnique({
        where:{
            email:session.user.email
        }
    })


    if(!userData){
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const product = await prisma.product.findUnique({
        where:{
            id:productId
        }
    })
    if(!product){
        return res.status(502).json({message:'Not enough data'})
    }
    try{

        const cartData = await prisma.cart.create({
            data:{
                userId:userData.id,
                productId:product.id,
                quantity:quantity
            }
        })
        return res.status(200).json({message:"Sucesfully saved in Cart"})
    }catch(error){
        return res.status(500).json({message:'Something wrong happened'})
    }
    
}

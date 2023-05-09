import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/Libs/prismadb'
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'POST'){
        return res.status(405).json({ message: "Method not allowed" });
    }
    
    const session = await getServerSession(req, res, authOptions)

   
    if(!session || !session.user || !session.user.email){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
        where:{
            email: session.user.email
        }
    })

    if(!user){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const {
            title,
            desc,
            category,
        price,
        image
    } = req.body
    
    if(!title || !desc || !category || !price || !image){
        return res.status(400).json({message:'All fields are required'})
    }
    
    try{
    const product = await prisma.product.create({
        data:{
            userId:user.id,
            title,
            description:desc,
            category,
            price:parseInt(price,10),
            image
        }
    })
    return res.status(200).json({product});
}catch(err){
    return res.status(400).json({message:'Something wrong happened'})
}

   
}
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/Libs/prismadb'



export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    
    if(req.method !== 'GET'){
        return res.status(405).json({message:'Method not allowed'})
   }
    
   const plants = await prisma.product.findMany({
        orderBy:{
            createdAt:'desc'
        },
        take:3
   })
   return res.status(200).json(plants)
}
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/Libs/prismadb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
){

    if(req.method !== 'POST'){
         return res.status(405).json({message:'Method not allowed'})
    }
    
    const {
        category,
        currentPostId
    } = req.body

    
    if(!category || !currentPostId){
        return res.status(502).json({message:'Not enough data'})
    }
    
    const sameCategory = await prisma.product.findMany({
        where:{
            id:{not:currentPostId},
            category:category
        },
        take:3
    })

    if(sameCategory.length < 3){
        const leftLength = 3 - sameCategory.length
        const otherRecommended = await prisma.product.findMany({
            take: leftLength,
            where: {
                id: { not: currentPostId },
            }
        })
        const objectsOnly = otherRecommended.filter(item => typeof item === 'object' && item !== null);
        sameCategory.push(...objectsOnly)
    }

    return res.status(200).json(sameCategory)
}

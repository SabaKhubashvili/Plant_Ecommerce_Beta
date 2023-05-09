import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/Libs/prismadb'

export default async function getAll(   
  req: NextApiRequest,
  res: NextApiResponse
)  {

    if(req.method !== 'GET'){
        return res.status(405).json({ message: "Method not allowed" });
    }
    try{

      const products = await prisma.product.findMany({
        orderBy:{
          createdAt:'desc'
        }
      })
      
      return res.status(200).json(products)
     }catch(err){
       return res.status(500).json({message:'Something wrong happened'})
     }

}

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/Libs/prismadb";
import bcrypt from "bcrypt";



async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
        if (req.method !== "POST") {
          return res.status(405).json({ message: "Method not allowed" });
        }

    const {
      name,
      email,
      password
    } = req.body

    if(!name || !email || !password){
      return res.status(400).json({message:'All fields are required'})
    }

    const alreadyRegistered = await prisma.user.findUnique({
      where:{
        email
      }
    })
    if(alreadyRegistered){
      return res.status(409).json({message:'Email is already registered'})
    }

    const hashedPassword = await bcrypt.hash(password,12)

    const newUser = await prisma.user.create({
      data:{
        name,
        email,
        hashedPassword
      }
    })

    return  res.status(200).json({message:'Succesfully Registered',user:newUser})
}

export default handler;
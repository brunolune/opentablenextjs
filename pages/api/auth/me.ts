import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler (
    req: NextApiRequest,
    res:NextApiResponse
){
    const bearerToken =req.headers["authorization"] as string;
    const token = bearerToken.split(" ")[1];

    const payload = jwt.decode(token) as {email:string};

    if(!payload){
        return res.status(401).json({errorMessage: "Unauthorized request (no payload)",})
    }

    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    });

    return res.json({user});
}
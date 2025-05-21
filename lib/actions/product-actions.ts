'use server'

import { PrismaClient } from "../generated/prisma"
import { convertPrismaObjToJSObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
// Get latest products
export async function getLatestProducts() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,//<< will get 4 products at a time
        orderBy: {createdAt: 'desc'},
    })

    return convertPrismaObjToJSObj(data)
}


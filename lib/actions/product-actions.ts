'use server'

import { prisma } from "../../db/prisma";
import { convertPrismaObjToJSObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
// Get latest products
export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,//<< will get 4 products at a time
        orderBy: {createdAt: 'desc'},
    })

    return convertPrismaObjToJSObj(data)
}
// Get single product by slug

export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: {slug: slug}
    })
}


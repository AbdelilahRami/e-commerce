import {Router} from 'express';
import { Request, Response, NextFunction } from 'express';
import {PrismaClient} from "@prisma/client";
import {Cart} from "../models/cart";

const prisma = new PrismaClient()
const catalogueRouter = Router();


catalogueRouter.get('/visible_authenticated', async (req:Request, res:Response, next: NextFunction) => {
    const products =  await prisma.product.findMany({
        where: {
            visible_authenticated: 1
        }
    });
    return res.json(products)
})

catalogueRouter.get('/visible_public', async (req:Request, res:Response, next: NextFunction) => {
    const products =  await prisma.product.findMany({
        where: {
            visible_public: 1
        },
        include: {
            categories: true
        }
    });
    return res.json(products)
})

catalogueRouter.post('/', async (req:Request, res:Response, next: NextFunction)=> {

    const {label,description,price, category_id, thumbnail_url, visible_public,visible_authenticated}= req.body;
    const product = await prisma.product.create({
        data: {
            label,description,price,category_id,thumbnail_url,visible_public,visible_authenticated
        }
    })
    return res.json({product: product})
})

export {catalogueRouter}


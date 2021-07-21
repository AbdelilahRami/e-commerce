import {json, Router} from 'express';
import {Request, Response, NextFunction} from 'express';
import {PrismaClient} from "@prisma/client";
import {Md5} from 'ts-md5/dist/md5';
import {body} from "express-validator";
import {BadRequestError} from "../errors/bad-request-error";
import {requestValidator} from "../middlewares/validate-request";

const prisma = new PrismaClient()
const usersRouter = Router();

usersRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany();
    return res.json(users);
});

usersRouter.post('/signup', [body("email").isEmail().withMessage("Email must be valid"),
                body("password").trim().notEmpty().withMessage("Please provide a password"),
                body("name").trim().notEmpty().withMessage("Please provide a your name")],
                requestValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        const {email, name, password} = req.body;
        const userExits = await prisma.user.findFirst({where: {email: email}});
        if (userExits) {
            throw new BadRequestError("User already exists !");
        }
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password_hash: Md5.hashStr(password)
            }
        });
        await prisma.user.update({
            where: {
                id: user.id
            }, data: {
                password_hash: Md5.hashStr(user.id.toString().concat(password))
            }
        })
        return res.json({message: 'Success your account has been created', name: user.name, email: user.email});
    });

usersRouter.post('/login', [body("email").isEmail().withMessage("Email must be valid"),
                               body("password").trim().notEmpty().withMessage("Please provide a password")],
                               requestValidator,
    async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    let user = null;
    try {
        user = await prisma.user.findFirst({where: {email: email}});
    } catch (e) {
        next()
    }
    const passwordValid = user ? validatePassword(user.id, password, user.password_hash) : false
    if (passwordValid) {
        return res.status(200).send({message: 'Success you are logged  in'});
    } else {
        return res.status(401).send({message: 'Error invalid credentials'});
    }

})

function validatePassword(userId: number, password: string, storedPassword: string): boolean {
    return Md5.hashStr(userId.toString().concat(password)) === storedPassword;
}

export default usersRouter;

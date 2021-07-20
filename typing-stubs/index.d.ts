import {Cart} from "../models/cart";
import session from 'express-session';
declare module "express-session" {
    interface SessionData {
        cart: Cart;
    }
}

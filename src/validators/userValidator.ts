import {body} from "express-validator";

export const userSignupValidator = [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Please provide a password"),
    body("name").trim().notEmpty().withMessage("Please provide a your name")
];

export const userLoginValidator = [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Please provide a password"),
]

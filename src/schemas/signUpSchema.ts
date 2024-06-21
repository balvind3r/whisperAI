import {z} from "zod"

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters long")
    .max(20, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain any special characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Enter a valid E-Mail Address"}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"})
})
import { createZodDto } from "nestjs-zod"
import { z } from "nestjs-zod/z"

export const CreateUserSchema = z.object({
    name: z.string({
        required_error: "Name is required"
    }).min(3).max(255),
    email: z.string({
        required_error: "Email is required"
    }).email(),
    username: z.string({
        required_error: "Username is required"
    }).min(3).max(255),
    password: z.string({
        required_error: "Password is required"
    }).min(3).max(255),
})


export class CreateUserSchemaDTO extends createZodDto(CreateUserSchema) {}

export const CreateUserResponseSchemaDTO = CreateUserSchema.omit({ password: true})

export type CreateUserResponseSchemaDTO = z.infer<typeof CreateUserResponseSchemaDTO>
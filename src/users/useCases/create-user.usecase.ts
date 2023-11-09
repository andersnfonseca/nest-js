import { PrismaService } from "src/db/prisma.service"

export type CreateUserDTO = {
    username: string,
    password: string,
    email: string,
    name: string,
}

export class CreateUserUseCase {
    
    constructor(private prismaService: PrismaService) {}

    async execute(data: CreateUserDTO) {

        const user = await  this.prismaService.user.findFirst({
            where: {
                OR: [
                    { username: data.username },
                    { email: data.email }
                ]
            }
        })

        if (user) {
            throw new Error('User already exists')
        }

        return await this.prismaService.user.create({
            data,
        })
    }
}
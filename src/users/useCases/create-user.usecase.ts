import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common"
import { hash } from "bcrypt"
import { PrismaService } from "src/db/prisma.service"
import { CreateUserDTO } from "../dto/user.dto"
import { IUserRepository } from "../repositories/user.repository"


@Injectable()
export class CreateUserUseCase {
    private readonly looger = new Logger(CreateUserUseCase.name)
        
    constructor(private userRepository: IUserRepository) {}

    async execute(data: CreateUserDTO) {

        const user = await  this.userRepository.findUserByUsernameOrEmail({
            username: data.username,
            email: data.email
        })

        if (user) {
            this.looger.error(`User ${data.username} already exists...`)
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
        }

        const password = await hash(data.password, 10)

        return await this.userRepository.save({
            ...data,
            password
        }) 
    }
}
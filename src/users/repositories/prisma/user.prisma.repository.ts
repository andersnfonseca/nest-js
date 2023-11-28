import { UsernameAndEmail, UserCreatedDTO, CreateUserDTO } from "src/users/dto/user.dto";
import { IUserRepository } from "../user.repository";
import { PrismaService } from "src/db/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
 export class UserPrismaRepository implements IUserRepository {

    constructor(private prismaService: PrismaService) {}
    findById(id: string): Promise<UserCreatedDTO> {
        return this.prismaService.user.findUnique({
            where: {
                id: Number(id)
            }
        })
    }

     async findUserByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDTO> {
       return await this.prismaService.user.findFirst({
        where: {
            OR: [{username: data.username}, {email: data.email}]
        }
       })
     }
     async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
         return this.prismaService.user.create({
            data
         })
     }
    
 }
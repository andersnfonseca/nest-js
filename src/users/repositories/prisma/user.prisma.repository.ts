import { UsernameAndEmail, UserCreatedDTO, CreateUserDTO } from "src/users/dto/user.dto";
import { IUserRepository } from "../user.repository";
import { PrismaService } from "src/db/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
 export class UserPrismaRepository implements IUserRepository {

    constructor(private prismaService: PrismaService) {}
    
    findById(id: string): Promise<UserCreatedDTO | null> {
        return this.prismaService.user.findUnique({
            where: {
                id
            }
        })
    }

     async findUserByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDTO | null> {
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

     async uploadAvatar(id: string, path: string): Promise<void> {
        await this.prismaService.user.update({
            data: {
                avatarUrl: path
            },
            where: {
                id: id
            }
        })

    }
    
 }
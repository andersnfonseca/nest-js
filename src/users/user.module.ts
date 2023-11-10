/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { PrismaService } from "src/db/prisma.service";
import { IUserRepository } from "./repositories/user.repository";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.repository";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, PrismaService, {
    provide: IUserRepository,
    useClass: UserPrismaRepository
  }],
})
export class UserModule {}

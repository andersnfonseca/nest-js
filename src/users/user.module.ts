/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { PrismaService } from "src/db/prisma.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, PrismaService],
})
export class UserModule {}

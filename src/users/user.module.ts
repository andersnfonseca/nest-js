/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { PrismaService } from "src/db/prisma.service";
import { IUserRepository } from "./repositories/user.repository";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.repository";
import { ProfileUserUseCase } from "./useCases/profile-user.usecase";
import { UploadAvatarUserUseCase } from "./useCases/upload-avatar-user.usecase";
import { IStorage } from "src/storage/storage";
import { SupabaseStorage } from "src/storage/supabase.storage";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, ProfileUserUseCase, PrismaService, UploadAvatarUserUseCase, {
    provide: IUserRepository,
    useClass: UserPrismaRepository
  },{
    provide: IStorage,
    useClass: SupabaseStorage
  }],
})
export class UserModule {}

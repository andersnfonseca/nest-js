import { Module } from "@nestjs/common";
import { TaskUserController } from "./task-user.controller";
import { PrismaService } from "src/db/prisma.service";
import { CreateTaskUserUseCase } from "./useCases/create-task-user.usecase";
import { TaskUserPrismaRepository } from "./repositories/prisma/task-user.prisma.repository";
import { ITaskUserRepository } from "./repositories/task-user.repository";
@Module({
    controllers: [TaskUserController],
    providers: [
        PrismaService,
        CreateTaskUserUseCase,
        {
            provide: ITaskUserRepository,
            useClass: TaskUserPrismaRepository
        }
    ],
    imports: []
})
export class TaskUserModule {

}
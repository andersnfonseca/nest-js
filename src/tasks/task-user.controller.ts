import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { CreateTaskUserUseCase } from "./useCases/create-task-user.usecase";
import { AuthGuard } from "src/providers/auth-guard.provider";
import { TaskUser } from "@prisma/client";
import { CreateTaskUserSchemaDTO } from "./schemas/task-user.schema";

@Controller("/tasks")
export class TaskUserController {

    constructor(private taskUserCase: CreateTaskUserUseCase) {}


@UseGuards(AuthGuard)
@Post("/")
async create(@Body() data: CreateTaskUserSchemaDTO, @Request() req) {
    await this.taskUserCase.execute({
        ...data,
        userId: req.user.id
    })
}
}
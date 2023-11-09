import { Body, Controller, Post } from "@nestjs/common/decorators";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { CreateUserDTO } from "./dto/user.dto";

@Controller('/users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data)
  } 
 
}


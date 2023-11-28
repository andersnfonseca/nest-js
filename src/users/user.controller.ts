import { Body, Controller, Get, Post, UseGuards, UsePipes } from "@nestjs/common/decorators";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { CreateUserDTO } from "./dto/user.dto";
import { CreateUserValidationPipe } from "./pipe/create-user.validation.pipe";
import { AuthGuard } from "src/providers/auth-guard.provider";
import { Request } from "@nestjs/common/decorators";
import { ProfileUserUseCase } from "./useCases/profile-user.usecase";

@Controller("/users")
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase, private readonly profileUserUseCase: ProfileUserUseCase) {}
  
  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data)
  } 
 
  @Get("/profile")
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
     return await this.profileUserUseCase.execute(req.user.id)
  }
}


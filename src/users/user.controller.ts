import { Body, Controller, Get, Post, Put, UploadedFile, UseGuards, UseInterceptors, UsePipes } from "@nestjs/common/decorators";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { CreateUserDTO, FileDTO } from "./dto/user.dto";
import { CreateUserValidationPipe } from "./pipe/create-user.validation.pipe";
import { AuthGuard } from "src/providers/auth-guard.provider";
import { Request } from "@nestjs/common/decorators";
import { ProfileUserUseCase } from "./useCases/profile-user.usecase";
import { CreateUserResponseSchemaDTO, CreateUserSchemaDTO } from "./schemas/create-user.schema";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadAvatarUserUseCase } from "./useCases/upload-avatar-user.usecase";

@Controller("/users")
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase, private readonly profileUserUseCase: ProfileUserUseCase, private readonly uploadAvatarUserUseCase: UploadAvatarUserUseCase) {}
  
  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserSchemaDTO) {
    const user = await this.createUserUseCase.execute(data)
    return CreateUserResponseSchemaDTO.parse(user)
  } 
 
  @Get("/profile")
  @UseGuards(AuthGuard)
  
  async profile(@Request() req) {
     return await this.profileUserUseCase.execute(req.user.id)
  }

  @Put("/avatar")
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor("file"))
  async uploadAvatar(@Request() req, @UploadedFile() file: FileDTO) {

    
      const result = this.uploadAvatarUserUseCase.execute({
        file,
        idUser: req.user.id
      })
      return result
  }
}


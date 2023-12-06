import { Module } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { LoginModule } from "./login/login.module";
import { ZodValidationPipe } from "nestjs-zod";
import { TaskUserModule } from "./tasks/task-user.module";

@Module({
  imports: [UserModule, LoginModule, TaskUserModule],
  controllers: [],
  providers: [{
    provide: "APP_PIPE",
    useClass: ZodValidationPipe
  }],
})
export class AppModule {}

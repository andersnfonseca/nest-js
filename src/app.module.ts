import { Module } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { ProductModule } from "./products/product.module";
import { LoginModule } from "./login/login.module";
import { ZodValidationPipe } from "nestjs-zod";

@Module({
  imports: [UserModule, ProductModule, LoginModule],
  controllers: [],
  providers: [{
    provide: "APP_PIPE",
    useClass: ZodValidationPipe
  }],
})
export class AppModule {}

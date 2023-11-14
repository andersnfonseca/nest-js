import { Module } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { ProductModule } from "./products/product.module";
import { LoginModule } from "./login/login.module";

@Module({
  imports: [UserModule, ProductModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

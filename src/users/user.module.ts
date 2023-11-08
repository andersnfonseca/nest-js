/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}

import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { PrismaService } from "src/db/prisma.service";
import { SignInUseCase } from "./useCases/sign-in.usecase";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: 'SEGREDO',
            signOptions: {
                expiresIn: '60s'
            }
        })
    ],
    controllers: [LoginController],
    providers: [
        PrismaService,
        SignInUseCase
    ]
})
export class LoginModule {

}
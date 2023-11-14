import { JwtService } from "@nestjs/jwt";
import { SignInDTO } from "../dto/sign-in.dto";
import { PrismaService } from "src/db/prisma.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt"

@Injectable()
export class SignInUseCase {
    constructor(private jwtService: JwtService, private PrismaService: PrismaService) {}

    async execute(data: SignInDTO) {

        const user = await this.PrismaService.user.findFirst({
            where: {
                username: data.username
            }
        })

        if (!user) {
            throw new UnauthorizedException();
        }

        const isEqualPassword = await compare(data.password, user.password)

        if (!isEqualPassword) {
            throw new UnauthorizedException();
        }

        const token = await this.jwtService.signAsync({ id: user.id, username: user.username, email: user.email })

        return {
            acess_token: token
        }
    }
}
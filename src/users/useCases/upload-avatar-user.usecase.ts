import { Injectable } from "@nestjs/common";
import { AvatarDTO } from "../dto/user.dto";
import { IStorage } from "src/storage/storage";
import { IUserRepository } from "../repositories/user.repository";

@Injectable()
export class UploadAvatarUserUseCase {

    constructor(private storage: IStorage, private UserRepository: IUserRepository) {}

    async execute(data: AvatarDTO) {
        const file = await this.storage.upload(data.file, "avatars")
        console.log(file)
        return file
    }

}
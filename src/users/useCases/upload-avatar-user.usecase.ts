import { Injectable } from "@nestjs/common";
import { AvatarDTO } from "../dto/user.dto";
import { IStorage } from "src/storage/storage";
import { IUserRepository } from "../repositories/user.repository";
import path, { extname } from "path";

@Injectable()
export class UploadAvatarUserUseCase {

    constructor(private storage: IStorage, private UserRepository: IUserRepository) {}

    async execute(data: AvatarDTO) {
        const extFile = extname(data.file.originalname)
        const transformName = `${data.idUser}${extFile}`
        data.file.originalname = transformName;
        const file = await this.storage.upload(data.file, "avatars")

        const pathAvatarUser = `avatar/${data.file.originalname}`

        await this.UserRepository.uploadAvatar(data.idUser, pathAvatarUser)
        return file
    }

}
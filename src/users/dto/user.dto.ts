export type CreateUserDTO = {
    username: string,
    password: string,
    email: string,
    name: string,
}


export type UsernameAndEmail = {
    email: string,
    username: string
}


export type UserCreatedDTO = {
    id: number,
    createdAt: Date
} & CreateUserDTO

export type FileDTO = {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    buffer: Buffer,
    size: number
}

export type AvatarDTO = {
    idUser: string,
    file: FileDTO
}
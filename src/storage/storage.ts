import { FileDTO } from "src/users/dto/user.dto";

export abstract class IStorage {
   abstract upload(file: FileDTO, folder: string): Promise<any> 
}
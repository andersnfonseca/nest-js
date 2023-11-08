import { Controller, Get } from "@nestjs/common";

@Controller()
export class UserController {
  @Get("/teste")
  helloUser() {
    return "Teste";
  }
}

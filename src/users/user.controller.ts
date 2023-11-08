import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { randomUUID } from "crypto";

type params = {
  id: string;
  idEmpresa: string;
}

type queryUser = {
  p: string
  r: string
}

type bodyUser = {
  name: string
  age: number
}

@Controller('/users')
export class UserController {
  @Get("/:id/:idEmpresa")
  findById(@Param() params: params) {
    return 'This action returns a user' + 'Id USER: ' + params.id + 'ID Empresa: ' + params.idEmpresa;
  }

  @Get('/findByPages')
  findByPages(@Query() queries: queryUser) {
    return 'Queries' + JSON.stringify(queries);
  }

  @Post('/create')
  create(@Body() data: bodyUser) {
    return {
      ...data,
      id: randomUUID(),
      msg: 'User created successfully'
    }
  }
}

import { Controller, Get } from "@nestjs/common";

@Controller()
export class ProductController {
  @Get("/products")
  getProducts() {
    return "Products";
  }
}

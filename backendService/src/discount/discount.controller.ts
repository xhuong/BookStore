import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { DiscountService } from "./discount.service";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { Response } from "express";

@Controller("discount")
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  create(
    @Body() createDiscountDto: CreateDiscountDto,
    @Res() response: Response,
  ) {
    return this.discountService.create(createDiscountDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.discountService.findAll(response);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.discountService.findOne(+id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDiscountDto: UpdateDiscountDto,
    @Res() response: Response,
  ) {
    return this.discountService.update(+id, updateDiscountDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.discountService.remove(+id, response);
  }
}

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
import { UserRelDiscountService } from "./user_rel_discount.service";
import { CreateUserRelDiscountDto } from "./dto/create-user_rel_discount.dto";
import { UpdateUserRelDiscountDto } from "./dto/update-user_rel_discount.dto";
import { Response } from "express";

@Controller("user-rel-discount")
export class UserRelDiscountController {
  constructor(
    private readonly userRelDiscountService: UserRelDiscountService,
  ) {}

  @Post()
  create(
    @Body() createUserRelDiscountDto: CreateUserRelDiscountDto,
    @Res() response: Response,
  ) {
    return this.userRelDiscountService.create(
      createUserRelDiscountDto,
      response,
    );
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.userRelDiscountService.findAll(response);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.userRelDiscountService.findOne(+id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUserRelDiscountDto: UpdateUserRelDiscountDto,
    @Res() response: Response,
  ) {
    return this.userRelDiscountService.update(
      +id,
      updateUserRelDiscountDto,
      response,
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.userRelDiscountService.remove(+id, response);
  }
}

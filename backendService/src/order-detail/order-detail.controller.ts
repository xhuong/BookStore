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
import { OrderDetailService } from "./order-detail.service";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
import { Response } from "express";

@Controller("order-detail")
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Post()
  create(
    @Body() createOrderDetailDto: CreateOrderDetailDto,
    @Res() response: Response,
  ) {
    return this.orderDetailService.create(createOrderDetailDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.orderDetailService.findAll(response);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.orderDetailService.findOne(+id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
    @Res() response: Response,
  ) {
    return this.orderDetailService.update(+id, updateOrderDetailDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.orderDetailService.remove(+id, response);
  }
}

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
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Response } from "express";
import { CreateOrderDetailDto } from "src/order-detail/dto/create-order-detail.dto";

@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(
    @Body()
    requestBody: {
      order: CreateOrderDto;
      order_details: CreateOrderDetailDto[];
      payment_id: number;
    },
    @Res() response: Response,
  ) {
    return this.orderService.createNewOrder(requestBody, response);
  }
  // @Post()
  // create(@Body() createOrderDto: CreateOrderDto, @Res() response: Response) {
  //   return this.orderService.create(createOrderDto, response);
  // }

  @Get()
  findAll(@Res() response: Response) {
    return this.orderService.findAll(response);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.orderService.findOne(+id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateOrderDto: UpdateOrderDto,
    @Res() response: Response,
  ) {
    return this.orderService.update(+id, updateOrderDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.orderService.remove(+id, response);
  }
}

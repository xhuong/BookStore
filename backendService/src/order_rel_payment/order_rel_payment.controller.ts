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
import { OrderRelPaymentService } from "./order_rel_payment.service";
import { CreateOrderRelPaymentDto } from "./dto/create-order_rel_payment.dto";
import { UpdateOrderRelPaymentDto } from "./dto/update-order_rel_payment.dto";
import { Response } from "express";

@Controller("order-rel-payment")
export class OrderRelPaymentController {
  constructor(
    private readonly orderRelPaymentService: OrderRelPaymentService,
  ) {}

  // @Post()
  // create(
  //   @Body() createOrderRelPaymentDto: CreateOrderRelPaymentDto,
  //   @Res() response: Response,
  // ) {
  //   return this.orderRelPaymentService.create(
  //     createOrderRelPaymentDto,
  //     response,
  //   );
  // }

  @Get()
  findAll(@Res() response: Response) {
    return this.orderRelPaymentService.findAll(response);
  }

  // @Get(":id")
  // findOne(@Param("id") id: string, @Res() response: Response) {
  //   return this.orderRelPaymentService.findOne(+id, response);
  // }

  // @Patch(":id")
  // update(
  //   @Param("id") id: string,
  //   @Body() updateOrderRelPaymentDto: UpdateOrderRelPaymentDto,
  //   @Res() response: Response,
  // ) {
  //   return this.orderRelPaymentService.update(
  //     +id,
  //     updateOrderRelPaymentDto,
  //     response,
  //   );
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string, @Res() response: Response) {
  //   return this.orderRelPaymentService.remove(+id, response);
  // }
}

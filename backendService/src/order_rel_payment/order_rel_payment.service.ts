import { Injectable } from "@nestjs/common";
import { CreateOrderRelPaymentDto } from "./dto/create-order_rel_payment.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class OrderRelPaymentService {
  constructor(private prisma: PrismaService) {}
  async create(
    createOrderRelPaymentDto: CreateOrderRelPaymentDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.orderRelPayment.create({
        data: createOrderRelPaymentDto,
      });

      return response.status(200).json({
        status: 200,
        message: "Create orderRelPayment successfully",
        result: {
          data: data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create orderRelPayment faild",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.orderRelPayment.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all orderRelPayment successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get all orders failed`,
      };
    }
  }
}

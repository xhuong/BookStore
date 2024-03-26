import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto, response: Response) {
    try {
      const data = await this.prisma.payment.create({ data: createPaymentDto });
      return response.status(200).json({
        status: 200,
        message: "Create new payment successfully",
        result: {
          data,
        },
      });
    } catch (err) {
      return {
        status: 400,
        message: "Create new payment failed",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.payment.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all payments successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get all payments failed`,
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.payment.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get payment with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get payment failed`,
      };
    }
  }

  async update(
    id: number,
    updatePaymentDto: UpdatePaymentDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.payment.update({
        where: { id },
        data: updatePaymentDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated payment with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Update payment failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.payment.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Remove payment with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: `Remove payment failed`,
      };
    }
  }
}

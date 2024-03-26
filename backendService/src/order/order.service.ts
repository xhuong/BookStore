import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto, response: Response) {
    try {
      const data = await this.prisma.order.create({
        data: createOrderDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create order successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create order faild",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.order.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all orders successfully",
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

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.order.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get order with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get order failed`,
      };
    }
  }

  async update(id: number, updateOrderDto: UpdateOrderDto, response: Response) {
    try {
      const data = await this.prisma.order.update({
        where: { id },
        data: updateOrderDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated order with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Update order failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.order.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Remove order with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: `Remove order failed`,
      };
    }
  }
}

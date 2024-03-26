import { Injectable } from "@nestjs/common";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class OrderDetailService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderDetailDto: CreateOrderDetailDto, response: Response) {
    try {
      const data = await this.prisma.order_detail.create({
        data: createOrderDetailDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create order detail successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create order detail faild",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.order_detail.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all order details successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get all order details failed`,
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.order_detail.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get order detail with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get order detail failed`,
      };
    }
  }

  async update(
    id: number,
    updateOrderDetailDto: UpdateOrderDetailDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.order_detail.update({
        where: { id },
        data: updateOrderDetailDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated order detail with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Update order detail failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.order_detail.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Remove order detail with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: `Remove order detail failed`,
      };
    }
  }
}

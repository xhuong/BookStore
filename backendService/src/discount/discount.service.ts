import { Injectable } from "@nestjs/common";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class DiscountService {
  constructor(private prisma: PrismaService) {}
  async create(createDiscountDto: CreateDiscountDto, response: Response) {
    try {
      const data = await this.prisma.discount.create({
        data: createDiscountDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create discount successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create discount faild",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.discount.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all discounts successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get all discounts failed`,
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.discount.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get discount with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get discount failed`,
      };
    }
  }

  async update(
    id: number,
    updateDiscountDto: UpdateDiscountDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.discount.update({
        where: { id },
        data: updateDiscountDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated discount with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Update discount failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.discount.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Remove discount with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: `Remove discount failed`,
      };
    }
  }
}

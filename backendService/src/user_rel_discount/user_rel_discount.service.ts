import { Injectable } from "@nestjs/common";
import { CreateUserRelDiscountDto } from "./dto/create-user_rel_discount.dto";
import { UpdateUserRelDiscountDto } from "./dto/update-user_rel_discount.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class UserRelDiscountService {
  constructor(private prisma: PrismaService) {}
  async create(
    createUserRelDiscountDto: CreateUserRelDiscountDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.userRelDiscount.create({
        data: createUserRelDiscountDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create userRelDiscount successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create userRelDiscount faild",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.userRelDiscount.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all userRelDiscounts successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get all userRelDiscounts failed`,
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.userRelDiscount.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get userRelDiscount with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get userRelDiscount failed`,
      };
    }
  }

  async update(
    id: number,
    updateUserRelDiscountDto: UpdateUserRelDiscountDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.userRelDiscount.update({
        where: { id },
        data: updateUserRelDiscountDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated userRelDiscount with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Update userRelDiscount failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.userRelDiscount.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Remove userRelDiscount with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: `Remove userRelDiscount failed`,
      };
    }
  }
}

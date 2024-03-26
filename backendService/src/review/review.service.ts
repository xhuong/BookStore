import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { Response } from "express";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}
  async create(createReviewDto: CreateReviewDto, response: Response) {
    try {
      const data = await this.prisma.review.create({
        data: createReviewDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create review successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create review faild",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.review.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all reviews successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get all reviews failed`,
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.review.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get review with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get review failed`,
      };
    }
  }

  async update(
    id: number,
    updateReviewDto: UpdateReviewDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.review.update({
        where: { id },
        data: updateReviewDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated review with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Update review failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.review.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Remove review with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: `Remove review failed`,
      };
    }
  }
}

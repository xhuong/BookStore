import { Injectable } from "@nestjs/common";
import { CreatePublisherDto } from "./dto/create-publisher.dto";
import { UpdatePublisherDto } from "./dto/update-publisher.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class PublisherService {
  constructor(private prisma: PrismaService) {}

  async create(createPublisherDto: CreatePublisherDto, response: Response) {
    try {
      const data = await this.prisma.publisher.create({
        data: createPublisherDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create a new publisher successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create a new publisher failed",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.publisher.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all publishers successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Get all publishers failed",
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.publisher.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Find publisher with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Find publisher failed",
      };
    }
  }

  async update(
    id: number,
    updatePublisherDto: UpdatePublisherDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.publisher.update({
        where: { id },
        data: updatePublisherDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated publisher with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Updated publisher failed",
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.publisher.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Deleted publisher with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: "Deleted publisher failed",
      };
    }
  }
}

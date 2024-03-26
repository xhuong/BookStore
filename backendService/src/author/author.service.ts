import { Injectable } from "@nestjs/common";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto, response: Response) {
    try {
      const data = await this.prisma.author.create({
        data: createAuthorDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create a new author successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create a new author failed",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.author.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all authors successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Get all authors failed",
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.author.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Find author with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Find author failed",
      };
    }
  }

  async update(
    id: number,
    updateAuthorDto: UpdateAuthorDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.author.update({
        where: { id },
        data: updateAuthorDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated author with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Updated author failed",
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.author.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Deleted author with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: "Deleted author failed",
      };
    }
  }
}

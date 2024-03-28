import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto, response: Response) {
    try {
      const book = await this.prisma.book.findFirst({
        where: {
          isbn: createBookDto.isbn,
        },
      });
      if (!book || !book.isbn) {
        const data = await this.prisma.book.create({
          data: createBookDto,
        });
        return response.status(200).json({
          status: 200,
          message: "Create new book successfully",
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 401,
          message: "The book with ISBN is exist, please check the ISBN value",
        });
      }
    } catch (err) {
      return {
        status: 400,
        message: "Create new book failed",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.book.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get list of books successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: "Get list of books failed",
      };
    }
  }

  async findOne(title: string, response: Response) {
    try {
      const data = await this.prisma.book.findFirst({
        where: {
          name: title,
        },
      });
      return response.status(200).json({
        status: 200,
        message: `Get book with name = ${data.name} successfully`,
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: "Find book failed",
      };
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto, response: Response) {
    try {
      await this.prisma.book.update({
        where: { id },
        data: updateBookDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated book with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: "Update book failed",
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.book.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Deleted book with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: "Deleted book failed",
      };
    }
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Response } from "express";

@Controller("book")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto, @Res() response: Response) {
    return this.bookService.create(createBookDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.bookService.findAll(response);
  }

  @Get(":name")
  findOne(@Param("name") id: string, @Res() response: Response) {
    return this.bookService.findOne(id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookDto: UpdateBookDto,
    @Res() response: Response,
  ) {
    return this.bookService.update(+id, updateBookDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.bookService.remove(+id, response);
  }
}

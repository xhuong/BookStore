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
import { AuthorService } from "./author.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Response } from "express";

@Controller("author")
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto, @Res() response: Response) {
    return this.authorService.create(createAuthorDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.authorService.findAll(response);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.authorService.findOne(+id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
    @Res() response: Response,
  ) {
    return this.authorService.update(+id, updateAuthorDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.authorService.remove(+id, response);
  }
}

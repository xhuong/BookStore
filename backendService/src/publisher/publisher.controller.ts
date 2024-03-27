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
import { PublisherService } from "./publisher.service";
import { CreatePublisherDto } from "./dto/create-publisher.dto";
import { UpdatePublisherDto } from "./dto/update-publisher.dto";
import { Response } from "express";

@Controller("publisher")
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  create(
    @Body() createPublisherDto: CreatePublisherDto,
    @Res() response: Response,
  ) {
    return this.publisherService.create(createPublisherDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.publisherService.findAll(response);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.publisherService.findOne(+id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
    @Res() response: Response,
  ) {
    return this.publisherService.update(+id, updatePublisherDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.publisherService.remove(+id, response);
  }
}

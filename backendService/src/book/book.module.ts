import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [BookController],
  imports: [PrismaModule],
  providers: [BookService],
})
export class BookModule {}

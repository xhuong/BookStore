import { Module } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [AuthorController],
  imports: [PrismaModule],
  providers: [AuthorService],
})
export class AuthorModule {}

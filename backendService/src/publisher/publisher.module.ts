import { Module } from "@nestjs/common";
import { PublisherService } from "./publisher.service";
import { PublisherController } from "./publisher.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [PublisherController],
  imports: [PrismaModule],
  providers: [PublisherService],
})
export class PublisherModule {}

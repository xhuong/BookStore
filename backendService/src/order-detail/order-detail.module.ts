import { Module } from "@nestjs/common";
import { OrderDetailService } from "./order-detail.service";
import { OrderDetailController } from "./order-detail.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [OrderDetailController],
  imports: [PrismaModule],
  providers: [OrderDetailService],
})
export class OrderDetailModule {}

import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [OrderController],
  imports: [PrismaModule],
  providers: [OrderService],
})
export class OrderModule {}

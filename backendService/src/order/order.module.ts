import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { OrderRelPayment } from "src/order_rel_payment/entities/order_rel_payment.entity";
import { OrderDetailService } from "src/order-detail/order-detail.service";

@Module({
  controllers: [OrderController],
  imports: [PrismaModule],
  providers: [OrderService, OrderRelPayment, OrderDetailService],
})
export class OrderModule {}

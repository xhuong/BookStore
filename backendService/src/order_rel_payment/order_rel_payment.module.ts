import { Module } from "@nestjs/common";
import { OrderRelPaymentService } from "./order_rel_payment.service";
import { OrderRelPaymentController } from "./order_rel_payment.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [OrderRelPaymentController],
  imports: [PrismaModule],
  providers: [OrderRelPaymentService],
})
export class OrderRelPaymentModule {}

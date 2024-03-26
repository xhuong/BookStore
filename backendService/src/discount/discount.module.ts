import { Module } from "@nestjs/common";
import { DiscountService } from "./discount.service";
import { DiscountController } from "./discount.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [DiscountController],
  imports: [PrismaModule],
  providers: [DiscountService],
})
export class DiscountModule {}

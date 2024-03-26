import { Module } from "@nestjs/common";
import { UserRelDiscountService } from "./user_rel_discount.service";
import { UserRelDiscountController } from "./user_rel_discount.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [UserRelDiscountController],
  imports: [PrismaModule],
  providers: [UserRelDiscountService],
})
export class UserRelDiscountModule {}

import { Module } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { ReviewController } from "./review.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [ReviewController],
  imports: [PrismaModule],
  providers: [ReviewService],
})
export class ReviewModule {}

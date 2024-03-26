import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDetailDto {
  @IsNumber()
  @IsNotEmpty()
  book_id: number;

  @IsNumber()
  @IsNotEmpty()
  order_id: number;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}

import { IsNumber } from "class-validator";

export class CreateOrderRelPaymentDto {
  @IsNumber()
  order_id: number;

  @IsNumber()
  payment_id: number;
}

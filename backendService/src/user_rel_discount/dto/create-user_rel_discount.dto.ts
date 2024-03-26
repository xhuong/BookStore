import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserRelDiscountDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  discount_id: number;
}

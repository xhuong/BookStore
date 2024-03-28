import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export enum EPaymentMethod {
  COD = "COD",
  BANK_TRANSFER = "BANK_TRANSFER",
}

export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  payment_name: string;

  @IsEnum(EPaymentMethod, { message: "Invalid payment method" })
  payment_method: EPaymentMethod;

  @IsNumber()
  order_id: number;
}

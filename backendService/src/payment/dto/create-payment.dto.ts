import { IsDateString, IsEnum, IsNumber } from "class-validator";

export enum EPaymentMethod {
  BANK_TRANSFER = "BANK_TRANSFER",
  COD = "COD",
}

export enum EPaymentStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PROCESSING = "PROCESSING",
  NOT_CREATED = "NOT_CREATED",
}

export class CreatePaymentDto {
  @IsDateString()
  payment_date_time: Date;

  @IsEnum(EPaymentMethod, { message: "Invalid payment method" })
  payment_method: EPaymentMethod;

  @IsEnum(EPaymentStatus, { message: "Invalid payment status" })
  payment_status: EPaymentStatus;

  @IsNumber()
  order_id: number;
}

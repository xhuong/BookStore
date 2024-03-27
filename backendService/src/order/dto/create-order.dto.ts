import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export enum EOrderStatus {
  CREATED = "CREATED",
  PENDING_PAYMENT = "PENDING_PAYMENT",
  PROCESSING = "PROCESSING",
  SHIPPING = "SHIPPING",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
  RETURNED = "RETURNED",
}

export class CreateOrderDto {
  @IsString()
  @IsDateString()
  @IsNotEmpty()
  order_date: Date;

  @IsEnum(EOrderStatus, { message: "Invalid order status" })
  @IsNotEmpty()
  status: EOrderStatus;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsOptional()
  discount_id?: number;

  @IsNumber()
  @IsNotEmpty()
  payment_id: number;
}

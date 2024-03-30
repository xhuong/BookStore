import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

export enum EDiscountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  EXPIRED = "EXPIRED",
}
export class CreateDiscountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsDateString()
  @IsNotEmpty()
  start_time: Date;

  @IsDateString()
  @IsNotEmpty()
  end_time: Date;

  @IsNumber()
  @IsNotEmpty()
  number_of_uses_remaining: number;

  @IsNotEmpty()
  @IsEnum(EDiscountStatus, { message: "Invalid discount status" })
  status: EDiscountStatus;
}
